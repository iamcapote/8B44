---
title: Characters
permalink: /characters/
---

# Characters

Characters people chose to preserve and share. A character can keep evolving: later Pull Requests can update the same page while Git retains the history.

<a class="button primary" href="{{ '/contribute/' | relative_url }}">Add your character</a>

{% assign entries = site.characters | sort: "title" %}
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
<p class="empty-state">No public characters yet.</p>
{% endif %}
