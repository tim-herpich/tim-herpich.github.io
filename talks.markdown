---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
permalink: /talks/
description: "A comprehensive list of my public talks."
# robots: noindex
---

<h1>Talks</h1>

<div class="reduced-font">

{% include sort-toggle.html
   a="talks-by-year"
   b="talks-by-type"
   label_a="Sort by Year"
   label_b="Sort by Type" %}

<!-- 1) Group & render by YEAR -->
<div id="talks-by-year">
  {% assign talks_by_year = site.talks | group_by: "year" | sort: "name" | reverse %}
  {% for group in talks_by_year %}
    <h2>{{ group.name }}</h2> <!-- the year -->
    <ul>
      {% for talk in group.items %}
      <li>
        <em>{{ talk.title }}</em><br>
        {% if talk.location %}{{ talk.location }}, {% endif %}
        {% if talk.year %}{{ talk.year }}{% endif %}<br>
        {% if talk.presentation %}
          <a href="{{ talk.presentation }}" target="_blank">[presentation]</a>
        {% endif %}
        <!-- etc. -->
      </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<!-- 2) Group & render by TYPE -->
<div id="talks-by-type" style="display: none;">
  {% assign talks_by_type = site.talks | group_by: "type" %}
  {% assign type_order = "Conferences, Online" | split: ", " %}
  {% for type in type_order %}
    {% assign matching_group = talks_by_type | where: "name", type %}
    {% if matching_group.size > 0 %}
      <h2>{{ type }}</h2> <!-- the type -->
      <ul>
        {% assign items = matching_group.first.items | sort: "year" | reverse %}
        {% for talk in items %}
        <li>
          <em>{{ talk.title }}</em><br>
          {% if talk.location %}{{ talk.location }}, {% endif %}
          {% if talk.year %}{{ talk.year }}{% endif %}<br>
          {% if talk.presentation %}
            <a href="{{ talk.presentation }}" target="_blank">[presentation]</a>
          {% endif %}
          <!-- etc. -->
        </li>
        {% endfor %}
      </ul>
    {% endif %}
  {% endfor %}
</div>
</div>

<style>
h1 {
  margin-bottom: 0.5cm;
}
</style>
