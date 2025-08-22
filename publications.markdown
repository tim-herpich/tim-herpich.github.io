---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
permalink: /publications/
description: "A comprehensive list of journal publications, theses and whitepapers."
# robots: noindex
---

<h1>Publications</h1>

<div class="reduced-font">

{% include sort-toggle.html
   a="pubs-by-year"
   b="pubs-by-type"
   label_a="Sort by Year"
   label_b="Sort by Type" %}

<!-- 1) Group & render by YEAR -->
<div id="pubs-by-year">
  {% assign pubs_by_year = site.publications | group_by: "year" | sort: "name" | reverse %}
  {% for group in pubs_by_year %}
    <h2>{{ group.name }}</h2> <!-- the year -->
    <ul>
      {% for pub in group.items %}
      <li>
        <em>{{ pub.title }}</em><br>
        {% assign authors = pub.authors | split: ", " %}
        {% for author in authors %}
          {% if author contains "Herpich T." %}
            <strong>{{ author }}</strong>
          {% else %}
            {{ author }}
          {% endif %}
          {% if forloop.last == false %}, {% endif %}
        {% endfor %}
        <br>
        {% if pub.journal %}{{ pub.journal }}, {% endif %}
        {% if pub.year %}{{ pub.year }}{% endif %}<br>
        {% if pub.link %}
          <a href="{{ pub.link }}" target="_blank">[paper]</a>
        {% endif %}
        {% if pub.preprint %}
          <a href="{{ pub.preprint }}" target="_blank">[preprint]</a>
        {% endif %}
        {% if pub.press %}
          <a href="{{ pub.press }}" target="_blank">[press]</a>
        {% endif %}
        {% if pub.thesis %}
          <a href="{{ pub.thesis }}" target="_blank">[thesis]</a>
        {% endif %}
        <!-- etc. -->
      </li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>

<!-- 2) Group & render by TYPE -->
<div id="pubs-by-type" style="display: none;">
  {% assign pubs_by_type = site.publications | group_by: "type" %}
  {% assign type_order = "Whitepapers, Journals, Theses, Other" | split: ", " %}
  {% for type in type_order %}
    {% assign matching_group = pubs_by_type | where: "name", type %}
    {% if matching_group.size > 0 %}
      <h2>{{ type }}</h2> <!-- the type -->
      <ul>
        {% assign items = matching_group.first.items | sort: "year" | reverse %}
        {% for pub in items %}
        <li>
          <em>{{ pub.title }}</em><br>
          {% assign authors = pub.authors | split: ", " %}
          {% for author in authors %}
            {% if author contains "Herpich T." %}
              <strong>{{ author }}</strong>
            {% else %}
              {{ author }}
            {% endif %}
            {% if forloop.last == false %}, {% endif %}
          {% endfor %}
          <br>
          {% if pub.journal %}{{ pub.journal }}, {% endif %}
          {% if pub.year %}{{ pub.year }}{% endif %}<br>
          {% if pub.link %}
            <a href="{{ pub.link }}" target="_blank">[paper]</a>
          {% endif %}
          {% if pub.preprint %}
            <a href="{{ pub.preprint }}" target="_blank">[preprint]</a>
          {% endif %}
          {% if pub.press %}
            <a href="{{ pub.press }}" target="_blank">[press]</a>
          {% endif %}
          {% if pub.thesis %}
            <a href="{{ pub.thesis }}" target="_blank">[thesis]</a>
          {% endif %}
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
