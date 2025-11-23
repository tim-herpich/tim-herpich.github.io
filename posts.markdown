---
layout: single
permalink: /posts/
description: "Posts about recent topics on finance, tech, or science."
# read_time: true
share: false
related: false
# robots: noindex
---

<h1>Blog Posts</h1>

<div class="reduced-font">
{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% for post in sorted_posts %}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ forloop.index }}. {{ post.title }}</a></h2>
    <p>Published on {{ post.date | date: "%B %d, %Y" }} by {{ post.author }}</p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </article>
  <hr>
{% endfor %}
</div>

