---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
permalink: /publications/
description: "A comprehensive list of my publications in industry and academia."
---

# Publications

<ul>
  {% for publication in site.publications %}
    <li>
      <em>{{ publication.title }}</em><br>
       {{ publication.authors }}<br>
        {% if publication.journal %}{{ publication.journal }}{% endif %},
    {% if publication.volume %}<strong>{{ publication.volume }}</strong>{% if publication.article %}, {{ publication.article }}{% endif %}{% endif %}{% if publication.year %}, {{ publication.year }}{% endif %}<br>
        {% if publication.link %}
          <a href="{{ publication.link }}" target="_blank">[publication]</a>
        {% endif %}
        {% if publication.preprint %}
          <a href="{{ publication.preprint }}" target="_blank">[preprint]</a>
        {% endif %}
        {% if publication.thesis %}
          <a href="{{ publication.thesis }}" target="_blank">[thesis]</a>
        {% endif %}
      <p></p>
    </li>
  {% endfor %}
</ul>
