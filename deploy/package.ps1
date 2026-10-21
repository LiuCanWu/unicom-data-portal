param(
    [string]$OutputDirectory = (Join-Path $PSScriptRoot 'packages'),
    [string]$SshTarget,
    [string]$RemoteInbox = '~/unicom-data-portal-inbox'
)

$ErrorActionPreference = 'Stop'
$repo = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$front = Join-Path $repo 'frontend'
$dist = Join-Path $front 'dist'

Push-Location $front
try {
    & npm run build
    if ($LASTEXITCODE -ne 0) { throw 'Frontend build failed.' }
} finally { Pop-Location }

foreach ($required in @('index.html', 'images/products/data-agent-architecture.png')) {
    if (-not (Test-Path (Join-Path $dist $required) -PathType Leaf)) {
        throw "Missing build artifact: $required"
    }
}
if (-not (Get-ChildItem (Join-Path $dist 'assets') -Filter '*.js' -File)) {
    throw 'Missing bundled JavaScript.'
}
if (-not (Get-ChildItem (Join-Path $dist 'assets') -Filter '*.css' -File)) {
    throw 'Missing bundled CSS.'
}

New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$archive = Join-Path $OutputDirectory "unicom-data-portal-$stamp.tar.gz"
& tar -czf $archive -C $dist .
if ($LASTEXITCODE -ne 0) { throw 'Archive creation failed.' }
$sha = (Get-FileHash $archive -Algorithm SHA256).Hash
Write-Host "Package: $archive"
Write-Host "SHA256:  $sha"

if ($SshTarget) {
    if ($SshTarget -notmatch '^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+$') {
        throw 'SshTarget must be user@host; use an SSH config alias if needed.'
    }
    if ($RemoteInbox -notmatch '^(~|/[A-Za-z0-9._/-]+)(/[A-Za-z0-9._-]+)*$') {
        throw 'RemoteInbox must be a simple absolute path or a path under ~.'
    }
    & ssh $SshTarget "mkdir -p $RemoteInbox"
    if ($LASTEXITCODE -ne 0) { throw 'Remote inbox creation failed.' }
    & scp $archive (Join-Path $PSScriptRoot 'deploy.sh') "${SshTarget}:${RemoteInbox}/"
    if ($LASTEXITCODE -ne 0) { throw 'Upload failed.' }
    Write-Host "Uploaded only the package and deploy.sh to ${SshTarget}:${RemoteInbox}"
    Write-Host 'No server deployment was started. Run deploy.sh after approval.'
}
