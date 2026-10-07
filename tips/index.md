---
title: Tips & Tricks
permalink: /tips/
---

# Tips & Tricks

Community-tested techniques for getting more from The Drift. These are things that worked for somebody, not mandatory rules for everybody.

<a class="button primary" href="{{ '/contribute/' | relative_url }}">Share a tip</a>

{% assign entries = site.tips | sort: "title" %}
{% if entries.size > 0 %}
<div class="entry-list spaced">
{% for entry in entries %}
  <a class="entry-row" href="{{ entry.url | relative_url }}">
    <span><strong>{{ entry.title }}</strong>{% if entry.summary %}<small>{{ entry.summary }}</small>{% endif %}</span>
    <span class="muted">{% if entry.author %}@{{ entry.author }}{% endif %}</span>
  </a>
{% endfor %}
</div>
{% else %}
<p class="empty-state">No community tips yet.</p>
{% endif %}
