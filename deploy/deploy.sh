#!/usr/bin/env bash
set -Eeuo pipefail

# Run as the dedicated deploy user after Nginx configuration and site ownership are set.
# Usage: bash deploy.sh /path/to/unicom-data-portal-YYYYMMDD-HHMMSS.tar.gz
# Rollback: bash deploy.sh --rollback
SITE_DIR="${SITE_DIR:-/var/www/unicom-data-portal}"
RELEASES="$SITE_DIR/releases"
CURRENT="$SITE_DIR/current"

fail() { echo "ERROR: $*" >&2; exit 1; }
[[ "$SITE_DIR" = /* ]] || fail 'SITE_DIR must be absolute.'
SITE_DIR="$(realpath -m "$SITE_DIR")"
[[ "$SITE_DIR" == /var/www/* && "$SITE_DIR" != /var/www/ ]] || fail 'SITE_DIR must be a site-specific directory under /var/www.'
RELEASES="$SITE_DIR/releases"
CURRENT="$SITE_DIR/current"

if [[ "${1:-}" == '--rollback' ]]; then
    [[ -L "$CURRENT" ]] || fail 'No current release.'
    [[ -f "$SITE_DIR/previous-release" ]] || fail 'No previous release recorded.'
    target="$(cat "$SITE_DIR/previous-release")"
    [[ "$target" == "$RELEASES/"* && -f "$target/index.html" ]] || fail 'Previous release is invalid.'
    sudo nginx -t
    old="$(readlink -f "$CURRENT")"
    ln -s "$target" "$SITE_DIR/.next-release"
    mv -Tf "$SITE_DIR/.next-release" "$CURRENT"
    if ! sudo systemctl reload nginx; then
        ln -s "$old" "$SITE_DIR/.next-release"
        mv -Tf "$SITE_DIR/.next-release" "$CURRENT"
        fail 'Nginx reload failed; restored prior release.'
    fi
    printf '%s\n' "$old" > "$SITE_DIR/previous-release"
    echo "Rolled back to $target"
    exit 0
fi

[[ $# -eq 1 && -f "$1" ]] || fail 'Provide one existing .tar.gz package.'
[[ "$1" == *.tar.gz ]] || fail 'Package must have .tar.gz extension.'
mkdir -p "$RELEASES"
release="$RELEASES/$(date -u +%Y%m%dT%H%M%SZ)-$$"
mkdir "$release"
tar -xzf "$1" -C "$release" --no-same-owner --no-same-permissions
[[ -f "$release/index.html" ]] || fail 'Package has no index.html.'
[[ -d "$release/assets" && -f "$release/images/products/data-agent-architecture.png" ]] || fail 'Package assets are incomplete.'
old=''
if [[ -L "$CURRENT" ]]; then
    old="$(readlink -f "$CURRENT")"
    [[ "$old" == "$RELEASES/"* ]] || fail 'Current symlink points outside releases.'
    # Keep prior hashed assets for browsers still using the earlier HTML.
    if [[ -d "$old/assets" ]]; then cp -an "$old/assets/." "$release/assets/"; fi
elif [[ -e "$CURRENT" ]]; then
    fail 'Current path is not a symlink; manual migration required.'
fi

sudo nginx -t
ln -s "$release" "$SITE_DIR/.next-release"
mv -Tf "$SITE_DIR/.next-release" "$CURRENT"
if ! sudo nginx -t || ! sudo systemctl reload nginx; then
    if [[ -n "$old" ]]; then
        ln -s "$old" "$SITE_DIR/.next-release"
        mv -Tf "$SITE_DIR/.next-release" "$CURRENT"
        sudo systemctl reload nginx || true
        fail 'Release failed; previous release restored.'
    fi
    rm "$CURRENT"
    fail 'Initial release failed; current link removed.'
fi
if [[ -n "$old" ]]; then printf '%s\n' "$old" > "$SITE_DIR/previous-release"; fi
echo "Released $release"
echo 'Keep previous releases for rollback; review disk usage periodically.'
