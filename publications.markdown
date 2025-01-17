---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
permalink: /publications/
description: "A comprehensive list of journal publications, theses and whitepapers."
---

<h1>Publications</h1>

<!-- Toggle Buttons -->
<button id="btn-year" class="active" onclick="showByYear()"><strong>Sort by Year</strong></button>
<button id="btn-type" onclick="showByType()"><strong>Sort by Type</strong></button>

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
          {% if pub.thesis %}
            <a href="{{ pub.thesis }}" target="_blank">[thesis]</a>
          {% endif %}
        </li>
        {% endfor %}
      </ul>
    {% endif %}
  {% endfor %}
</div>

<!-- Styles for active button -->
<style>
button {
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: white;
}

button.active {
  background-color: #0092ca; /* Blue background */
  color: white;
  border: 1px solid #0056b3; /* Darker blue border */
}
</style>

<!-- Simple JS to toggle sections -->
<script>
function showByYear() {
  document.getElementById('pubs-by-year').style.display = 'block';
  document.getElementById('pubs-by-type').style.display = 'none';
  
  // Set active button
  document.getElementById('btn-year').classList.add('active');
  document.getElementById('btn-type').classList.remove('active');
}

function showByType() {
  document.getElementById('pubs-by-year').style.display = 'none';
  document.getElementById('pubs-by-type').style.display = 'block';
  
  // Set active button
  document.getElementById('btn-type').classList.add('active');
  document.getElementById('btn-year').classList.remove('active');
}
</script>
