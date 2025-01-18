---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
permalink: /talks/
description: "A comprehensive list of my public talks."
---

<div class="reduced-font">

<h1>Talks</h1>

<!-- Toggle Buttons -->
<button id="btn-year" class="active" onclick="showByYear()"><strong>Sort by Year</strong></button>
<button id="btn-type" onclick="showByType()"><strong>Sort by Type</strong></button>

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
  /* Reduce font size for the specific content block */
  .reduced-font {
    font-size: 80%; /* Adjust font size as needed */
  }
</style>

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
  document.getElementById('talks-by-year').style.display = 'block';
  document.getElementById('talks-by-type').style.display = 'none';
  
  // Set active button
  document.getElementById('btn-year').classList.add('active');
  document.getElementById('btn-type').classList.remove('active');
}

function showByType() {
  document.getElementById('talks-by-year').style.display = 'none';
  document.getElementById('talks-by-type').style.display = 'block';
  
  // Set active button
  document.getElementById('btn-type').classList.add('active');
  document.getElementById('btn-year').classList.remove('active');
}
</script>
