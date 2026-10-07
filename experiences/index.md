---
title: Experiences
permalink: /experiences/
---

# Experiences

Session logs, discoveries, encounters, screenshots, stories, and other records from individual Drift experiences.

<a class="button primary" href="{{ '/contribute/' | relative_url }}">Add your experience</a>

{% assign entries = site.experiences | sort: "date" | reverse %}
{% if entries.size > 0 %}
<div class="entry-list spaced">
{% for entry in entries %}
  <a class="entry-row" href="{{ entry.url | relative_url }}">
    <span><strong>{{ entry.title }}</strong>{% if entry.summary %}<small>{{ entry.summary }}</small>{% endif %}</span>
    <span class="muted">{% if entry.date %}{{ entry.date | date: "%Y-%m-%d" }}{% endif %}</span>
  </a>
{% endfor %}
</div>
{% else %}
<p class="empty-state">No public experiences yet. The archive is ready for the first one.</p>
{% endif %}
