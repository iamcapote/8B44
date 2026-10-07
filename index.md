---
title: Home
---

<section class="hero">
  <p class="eyebrow">COMMUNITY ARCHIVE // 8B-44</p>
  <h1>The Drift</h1>
  <p class="hero-copy">An impossible inhabited world discovered one experience at a time.</p>
  <p class="hero-subcopy">Explore what others encountered. Follow their characters. Share what happened in yours.</p>
  <div class="hero-actions">
    <a class="button primary" href="{{ '/start/' | relative_url }}">Enter the Drift</a>
    <a class="button" href="{{ '/contribute/' | relative_url }}">Add your experience</a>
  </div>
</section>

<section class="grid">
  <a class="card" href="{{ '/experiences/' | relative_url }}">
    <span class="card-kicker">Archive</span>
    <h2>Experiences</h2>
    <p>Sessions, discoveries, encounters, stories, and records from individual Drift experiences.</p>
  </a>
  <a class="card" href="{{ '/characters/' | relative_url }}">
    <span class="card-kicker">Registry</span>
    <h2>Characters</h2>
    <p>Characters people chose to preserve, share, and continue evolving.</p>
  </a>
  <a class="card" href="{{ '/tips/' | relative_url }}">
    <span class="card-kicker">Field notes</span>
    <h2>Tips & Tricks</h2>
    <p>Community-tested techniques. Useful possibilities, not mandatory rules.</p>
  </a>
  <a class="card" href="{{ '/docs/' | relative_url }}">
    <span class="card-kicker">Reference</span>
    <h2>Docs</h2>
    <p>Getting started, continuity, contribution, and stable project documentation.</p>
  </a>
</section>

<section class="content-section">
  <div class="section-heading">
    <h2>Recent experiences</h2>
    <a href="{{ '/experiences/' | relative_url }}">View all →</a>
  </div>
  {% assign entries = site.experiences | sort: "date" | reverse %}
  {% if entries.size > 0 %}
  <div class="entry-list">
    {% for entry in entries limit: 5 %}
    <a class="entry-row" href="{{ entry.url | relative_url }}">
      <span>{{ entry.title }}</span>
      <span class="muted">{% if entry.date %}{{ entry.date | date: "%Y-%m-%d" }}{% endif %}</span>
    </a>
    {% endfor %}
  </div>
  {% else %}
  <p class="empty-state">The archive is open. No public experiences have been added yet.</p>
  {% endif %}
</section>
