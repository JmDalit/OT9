<template>
  <section class="services-page">
    <header class="detail-header">
      <div class="detail-intro">
        <div class="detail-icon">
          <IconShield :size="28" />
        </div>
        <p class="detail-kicker">01 / Strategic Security</p>
      </div>

      <div class="detail-copy">
        <h1>Security leadership that makes risk visible and manageable.</h1>
        <p class="lead">
          We help executive teams translate technical risk into practical decisions,
          governance, and action plans aligned to business priorities.
        </p>
      </div>

      <router-link to="/" class="back-link">
        <IconArrowLeft :size="16" />
        Back to home
      </router-link>
    </header>

    <div class="detail-grid">
      <article class="detail-panel">
        <p class="panel-label">Protection includes</p>
        <h2>Protection built around the person and the business.</h2>
        <ul>
          <li><IconCircleCheck :size="18" /> Executive risk assessments</li>
          <li><IconCircleCheck :size="18" /> Governance and security roadmaps</li>
          <li><IconCircleCheck :size="18" /> Board-level reporting and briefings</li>
          <li><IconCircleCheck :size="18" /> Operational decision support</li>
        </ul>
      </article>

      <article class="detail-panel accent">
        <p class="panel-label">The outcome</p>
        <h2>Clear priorities, informed leadership, and stronger resilience.</h2>
        <p>
          Reduce uncertainty, improve visibility, and build a resilient program that can adapt as your organization changes.
        </p>
      </article>
    </div>

    <section class="service-list">
      <div class="section-heading">
        <p class="eyebrow">
          <span class="eyebrow-dot"></span>
          Core offerings
        </p>
        <h2>What we do</h2>
      </div>

      <div class="cards-grid">
        <article class="mini-card">
          <div class="mini-icon"><IconTarget :size="20" /></div>
          <h3>Adversary-Led Testing</h3>
          <p>Simulate real-world conditions to expose gaps before they become exposures.</p>
        </article>

        <article class="mini-card">
          <div class="mini-icon"><IconLock :size="20" /></div>
          <h3>Digital Risk Protection</h3>
          <p>Uncover external threats, impersonation, and monitoring blind spots across your ecosystem.</p>
        </article>

        <article class="mini-card">
          <div class="mini-icon"><IconChartBar :size="20" /></div>
          <h3>Risk Strategy</h3>
          <p>Translate findings into business priorities and next-step action plans.</p>
        </article>
      </div>
    </section>
  </section>
</template>

<script setup>
import {
  IconArrowLeft,
  IconChartBar,
  IconCircleCheck,
  IconLock,
  IconShield,
  IconTarget,
} from '@tabler/icons-vue'
</script>

<style scoped>
.services-page {
  padding: 2rem 0 4rem;
}

.detail-header {
  position: relative;
  padding: 2rem 0 1.5rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
}

.detail-intro {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.detail-icon {
  width: 3rem;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9rem;
  background: rgba(56, 189, 248, 0.12);
  color: #7dd3fc;
}

.detail-kicker {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7dd3fc;
}

.detail-copy h1 {
  margin: 0;
  max-width: 50rem;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.lead {
  max-width: 44rem;
  margin-top: 1rem;
  color: #cbd5e1;
  font-size: 1.08rem;
  line-height: 1.75;
}

.back-link {
  margin-top: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #dbeafe;
  font-weight: 700;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 1.5rem;
  padding-top: 2rem;
}

.detail-panel {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 1.25rem;
  padding: 1.75rem;
}

.detail-panel.accent {
  background: linear-gradient(135deg, rgba(12, 74, 110, 0.45), rgba(15, 23, 42, 0.7));
}

.panel-label {
  margin: 0 0 1rem;
  color: #7dd3fc;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.detail-panel h2 {
  margin: 0;
  font-size: clamp(1.7rem, 2.8vw, 2.5rem);
  line-height: 1.15;
}

.detail-panel ul {
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
}

.detail-panel li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #e2e8f0;
}

.detail-panel p {
  margin: 1rem 0 0;
  color: #cbd5e1;
  line-height: 1.7;
}

.service-list {
  padding-top: 3rem;
}

.section-heading {
  margin-bottom: 1.4rem;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 0.9rem;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #7dd3fc;
  font-weight: 700;
}

.eyebrow-dot {
  display: inline-block;
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #38bdf8, #4ade80);
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.7);
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.mini-card {
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 1.25rem;
  padding: 1.5rem;
}

.mini-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 0.8rem;
  background: rgba(56, 189, 248, 0.1);
  color: #7dd3fc;
  margin-bottom: 1rem;
}

.mini-card h3 {
  margin: 0 0 0.7rem;
  font-size: 1.3rem;
}

.mini-card p {
  margin: 0;
  line-height: 1.7;
  color: #cbd5e1;
}

@media (max-width: 900px) {
  .detail-grid,
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
