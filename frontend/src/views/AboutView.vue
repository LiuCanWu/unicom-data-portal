<template>
  <div class="about-page">
    <section class="about-hero" aria-labelledby="about-title">
      <div class="hero-grid" aria-hidden="true" />
      <div class="page-container hero-content">
        <p class="hero-eyebrow">ABOUT US <span /> 中国联通</p>
        <h1 id="about-title">{{ aboutContent.hero.title }}</h1>
        <p class="hero-english">{{ aboutContent.hero.englishName }}</p>
        <span class="hero-rule" aria-hidden="true" />
        <p class="hero-statement">{{ aboutContent.hero.statement }}</p>
        <p class="hero-description">{{ aboutContent.hero.description }}</p>
      </div>
    </section>

    <section class="page-section intro-section" aria-labelledby="intro-title">
      <div class="page-container">
        <header class="section-heading">
          <p class="section-eyebrow">WHO WE ARE</p>
          <h2 id="intro-title" class="section-title">{{ aboutContent.introduction.title }}</h2>
        </header>
        <div class="intro-card">
          <p class="intro-lead">以自主研发为根基，<br />服务数字化转型。</p>
          <div class="intro-copy">
            <p v-for="paragraph in aboutContent.introduction.paragraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section" aria-labelledby="principles-title">
      <div class="page-container">
        <header class="section-heading">
          <p class="section-eyebrow">OUR DIRECTION</p>
          <h2 id="principles-title" class="section-title">自主创新，面向未来</h2>
          <p class="section-description">以下为门户建议表述，正式院级使命与愿景以审核后的资料为准。</p>
        </header>
        <div class="principles-grid">
          <article v-for="(item, index) in aboutContent.principles" :key="item.label" class="principle-card">
            <svg class="line-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <template v-if="index === 0"><circle cx="20" cy="20" r="13" /><circle cx="20" cy="20" r="6" /><path d="M20 2v7m0 22v7M2 20h7m22 0h7" /></template>
              <template v-else><path d="M5 29 17 17l7 7L36 10M27 10h9v9M5 36h31" /></template>
            </svg>
            <h3>{{ item.label }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section timeline-section" aria-labelledby="timeline-title">
      <div class="page-container">
        <header class="section-heading">
          <p class="section-eyebrow">OUR JOURNEY</p>
          <h2 id="timeline-title" class="section-title">自主研发，持续创新</h2>
          <p class="section-description">从核心系统集约化建设，到数字化能力沉淀与产品化探索。</p>
        </header>
        <ol class="timeline">
          <li v-for="(item, index) in aboutContent.milestones" :key="item.title" class="timeline-item" :class="{ 'timeline-item--lower': index % 2 === 1 }">
            <span class="timeline-dot" aria-hidden="true" />
            <article class="timeline-card">
              <span class="timeline-marker">{{ item.marker }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </li>
        </ol>
      </div>
    </section>

    <section class="page-section" aria-labelledby="capabilities-title">
      <div class="page-container">
        <header class="section-heading">
          <p class="section-eyebrow">OUR CAPABILITIES</p>
          <h2 id="capabilities-title" class="section-title">深厚技术积累，构筑自主研发能力</h2>
        </header>
        <div class="capabilities-grid">
          <article v-for="item in aboutContent.capabilities" :key="item.title" class="capability-card">
            <span class="icon-frame">
              <svg class="line-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <template v-if="item.icon === 'system'"><rect x="5" y="7" width="30" height="26" rx="3" /><path d="M5 15h30M12 22h8m-8 5h13" /></template>
                <template v-else-if="item.icon === 'operations'"><rect x="6" y="8" width="28" height="7" rx="2" /><rect x="6" y="18" width="28" height="7" rx="2" /><rect x="6" y="28" width="28" height="7" rx="2" /><path d="M28 11.5h2M28 21.5h2M28 31.5h2" /></template>
                <template v-else-if="item.icon === 'data'"><circle cx="20" cy="8" r="3" /><circle cx="7" cy="30" r="3" /><circle cx="20" cy="30" r="3" /><circle cx="33" cy="30" r="3" /><path d="M20 11v9M7 27v-7h26v7M20 20v7" /></template>
                <template v-else><path d="M20 4 7 11v18l13 7 13-7V11L20 4Zm-13 7 13 8 13-8M20 19v17" /></template>
              </svg>
            </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section outcomes-section" aria-labelledby="outcomes-title">
      <div class="page-container outcomes-layout">
        <div>
          <p class="section-eyebrow">PRACTICE & PROGRESS</p>
          <h2 id="outcomes-title" class="section-title">自主创新与实践成果</h2>
          <p class="section-description">长期研发建设与生产运营实践，形成面向数字化转型的技术积累。</p>
          <p class="muted-note">具体认证、荣誉与量化成果待核实后发布。</p>
        </div>
        <div class="outcomes-grid">
          <article v-for="(item, index) in aboutContent.outcomes" :key="item.title" class="outcome-item">
            <span>0{{ index + 1 }}</span>
            <div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section" aria-labelledby="contact-title">
      <div class="page-container contact-layout">
        <div>
          <p class="section-eyebrow">CONNECT WITH US</p>
          <h2 id="contact-title" class="section-title">联系我们</h2>
          <p class="section-description">了解中国联通数据智能产品体系，探索产品体验、解决方案及合作机会。</p>
          <p class="muted-note">产品咨询通道正在准备中，开放时间以正式通知为准。</p>
        </div>
        <div class="contact-links">
          <router-link to="/products">查看产品中心 <span aria-hidden="true">↗</span></router-link>
          <router-link to="/experience">了解产品体验 <span aria-hidden="true">↗</span></router-link>
          <router-link to="/solutions">浏览解决方案 <span aria-hidden="true">↗</span></router-link>
        </div>
      </div>
    </section>

    <section class="about-cta" aria-labelledby="cta-title">
      <div class="page-container cta-inner">
        <p class="section-eyebrow">EXPLORE MORE</p>
        <h2 id="cta-title">以技术创新释放数据价值</h2>
        <p>探索中国联通数据智能产品体系，了解从数据基础设施到智能分析与应用的完整产品能力。</p>
        <div class="cta-actions">
          <router-link class="cta-primary" to="/products">探索数据智能产品 <span aria-hidden="true">→</span></router-link>
          <router-link class="cta-secondary" to="/experience">了解产品体验</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { aboutContent } from '../data/about'
</script>

<style scoped>
.about-page { overflow: hidden; }
.about-hero { position: relative; display: flex; align-items: center; min-height: 405px; overflow: hidden; color: #fff; background: linear-gradient(112deg, #0b376e, #0b5db4 53%, #2a83cf); }
.about-hero::before, .about-hero::after { position: absolute; content: ''; border: 1px solid rgba(255,255,255,.14); border-radius: 50%; }
.about-hero::before { width: 620px; height: 620px; top: -395px; right: -100px; }
.about-hero::after { width: 440px; height: 440px; bottom: -350px; left: -85px; }
.hero-grid { position: absolute; inset: 0; opacity: .35; background-image: linear-gradient(90deg, transparent 49.8%, rgba(255,255,255,.12) 50%, transparent 50.2%), linear-gradient(transparent 49.8%, rgba(255,255,255,.1) 50%, transparent 50.2%); background-size: 96px 96px; mask-image: linear-gradient(90deg, transparent, #000 35%, #000 75%, transparent); }
.hero-content { position: relative; padding-top: 70px; padding-bottom: 74px; text-align: center; }
.hero-eyebrow { display: flex; align-items: center; justify-content: center; gap: 13px; margin: 0 0 19px; color: rgba(255,255,255,.8); font-size: 12px; font-weight: 600; letter-spacing: .14em; }
.hero-eyebrow span { width: 22px; height: 1px; background: rgba(255,255,255,.54); }
.hero-content h1 { margin: 0; color: #fff; font-size: clamp(38px, 4.2vw, 58px); letter-spacing: .04em; }
.hero-english { margin: 11px 0 0; color: rgba(255,255,255,.73); font-size: 14px; letter-spacing: .08em; }
.hero-rule { display: block; width: 46px; height: 2px; margin: 27px auto 22px; background: #a9dcff; }
.hero-statement { margin: 0; font-size: clamp(20px, 2vw, 26px); font-weight: 600; letter-spacing: .08em; }
.hero-description { max-width: 760px; margin: 13px auto 0; color: rgba(255,255,255,.82); font-size: 15px; line-height: 1.85; }
.section-heading { margin-bottom: 42px; text-align: center; }
.section-heading .section-description { margin-right: auto; margin-left: auto; }
.intro-section, .outcomes-section { background: var(--color-bg-light); }
.intro-card { display: grid; grid-template-columns: minmax(230px, .9fr) minmax(0, 2fr); gap: clamp(36px, 6vw, 82px); padding: clamp(36px, 5vw, 64px); border: 1px solid var(--color-border-light); border-radius: var(--radius-lg); background: #fff; }
.intro-lead { margin: 8px 0 0; padding-top: 24px; border-top: 3px solid var(--color-primary); color: #173963; font-size: clamp(24px, 2.4vw, 31px); font-weight: 600; line-height: 1.55; }
.intro-copy p { margin: 0 0 15px; color: var(--color-text-secondary); font-size: 15px; line-height: 2; }
.intro-copy p:last-child { margin-bottom: 0; }
.principles-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.principle-card { min-height: 254px; padding: 39px clamp(24px, 4vw, 58px); border: 1px solid #e2ecf9; border-radius: var(--radius-lg); background: linear-gradient(135deg, #f5f9ff, #eef5fd); text-align: center; }
.line-icon { width: 40px; height: 40px; color: var(--color-primary); stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.principle-card h3 { margin: 15px 0 10px; font-size: 22px; }
.principle-card p { max-width: 390px; margin: 0 auto; color: var(--color-text-secondary); font-size: 15px; line-height: 1.85; }
.timeline-section { background: #f7faff; }
.timeline { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; position: relative; margin: 0; padding: 0; list-style: none; }
.timeline::before { position: absolute; top: 50%; left: 5%; right: 5%; height: 2px; background: #b8d2f5; content: ''; }
.timeline-item { position: relative; display: flex; flex-direction: column; min-height: 360px; padding-bottom: 193px; }
.timeline-item--lower { justify-content: flex-end; padding-top: 193px; padding-bottom: 0; }
.timeline-dot { position: absolute; z-index: 1; top: calc(50% - 7px); left: 24px; width: 14px; height: 14px; border: 3px solid #fff; border-radius: 50%; background: var(--color-primary); box-shadow: 0 0 0 2px var(--color-primary); }
.timeline-item::after { position: absolute; top: calc(50% - 20px); left: 30px; width: 1px; height: 20px; background: #a9c7ec; content: ''; }
.timeline-item--lower::after { top: 50%; }
.timeline-card { min-height: 166px; padding: 20px; border: 1px solid #e5edf7; border-radius: 12px; background: #fff; }
.timeline-marker { color: var(--color-primary); font-size: 13px; font-weight: 700; }
.timeline-card h3 { margin: 8px 0; font-size: 17px; }
.timeline-card p { margin: 0; color: var(--color-text-secondary); font-size: 13px; line-height: 1.75; }
.capabilities-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px; }
.capability-card { min-height: 237px; padding: 29px 24px; border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: #fff; }
.icon-frame { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; margin-bottom: 17px; border-radius: 10px; background: var(--color-primary-light); }
.icon-frame .line-icon { width: 29px; height: 29px; }
.capability-card h3 { margin: 0 0 10px; font-size: 18px; }
.capability-card p { margin: 0; color: var(--color-text-secondary); font-size: 14px; line-height: 1.8; }
.outcomes-layout { display: grid; grid-template-columns: minmax(240px, .8fr) minmax(0, 1.6fr); gap: clamp(44px, 6vw, 100px); }
.outcomes-layout .section-description { margin-top: 21px; }
.muted-note { margin: 24px 0 0; color: var(--color-text-tertiary); font-size: 13px; line-height: 1.8; }
.outcomes-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 15px; }
.outcome-item { display: flex; gap: 17px; min-height: 150px; padding: 27px 24px; border: 1px solid #e8eef6; border-radius: 12px; background: #fff; }
.outcome-item > span { color: #8db7e9; font-size: 19px; font-weight: 700; line-height: 1.4; }
.outcome-item h3 { margin: 0 0 9px; font-size: 17px; }
.outcome-item p { margin: 0; color: var(--color-text-secondary); font-size: 13px; line-height: 1.8; }
.contact-layout { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr); gap: 70px; align-items: center; }
.contact-layout .section-description { margin-top: 17px; }
.contact-links { border-top: 1px solid var(--color-border); }
.contact-links a { display: flex; justify-content: space-between; gap: 20px; padding: 17px 6px; border-bottom: 1px solid var(--color-border); color: #173963; font-size: 15px; font-weight: 600; }
.contact-links a:hover, .contact-links span { color: var(--color-primary); }
.about-cta { padding: 74px 0 82px; background: linear-gradient(112deg, #e9f3ff, #f5faff 55%, #e0efff); }
.cta-inner { text-align: center; }
.cta-inner h2 { margin: 0; color: #173963; font-size: clamp(30px, 3vw, 40px); }
.cta-inner > p:not(.section-eyebrow) { max-width: 690px; margin: 17px auto 0; color: var(--color-text-secondary); font-size: 15px; line-height: 1.8; }
.cta-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
.cta-actions a { display: inline-flex; align-items: center; justify-content: center; gap: 18px; min-height: 44px; padding: 0 23px; border-radius: 8px; font-size: 14px; font-weight: 600; }
.cta-primary { color: #fff; background: var(--color-primary); }
.cta-primary:hover { background: var(--color-primary-hover); }
.cta-secondary { border: 1px solid #bbd3f2; color: #205796; background: rgba(255,255,255,.7); }
.cta-secondary:hover { border-color: var(--color-primary); }
@media (max-width: 1000px) { .capabilities-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .outcomes-layout { gap: 38px; } .timeline { display: block; padding-left: 27px; } .timeline::before { top: 8px; bottom: 8px; left: 6px; right: auto; width: 2px; height: auto; } .timeline-item, .timeline-item--lower { display: block; min-height: 0; margin-bottom: 16px; padding: 0; } .timeline-item:last-child { margin-bottom: 0; } .timeline-dot { top: 23px; left: -27px; } .timeline-item::after { display: none; } .timeline-card { min-height: 0; padding: 20px; } }
@media (max-width: 760px) { .about-hero { min-height: 360px; } .hero-content { padding-top: 62px; padding-bottom: 64px; } .hero-english { font-size: 12px; } .intro-card, .outcomes-layout, .contact-layout { grid-template-columns: 1fr; gap: 27px; } .intro-card { padding: 30px; } .intro-lead br { display: none; } .principles-grid { gap: 14px; } .principle-card { padding: 28px 21px; } .contact-layout { gap: 34px; } }
@media (max-width: 560px) { .hero-content h1 { font-size: 36px; } .hero-description { font-size: 14px; } .principles-grid, .capabilities-grid, .outcomes-grid { grid-template-columns: 1fr; } .principle-card, .capability-card, .outcome-item { min-height: 0; } .section-heading { margin-bottom: 30px; } .intro-card { padding: 25px; } .cta-actions { flex-direction: column; align-items: stretch; } .cta-actions a { width: 100%; } }
</style>
