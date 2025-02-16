---
layout: single
# title: "Blog Posts"
permalink: /posts/
description: "Posts about recent topics on finance, tech, or science."
robots: noindex
read_time: true
comments: true
share: true
related: true
---

<!-- <h1>Recent Posts</h1> -->

{% for post in site.posts %}
  <article>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p><small>Published on {{ post.date | date: "%B %d, %Y" }} by {{ post.author }}</small></p>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}">Read more...</a>
  </article>
  <hr>
{% endfor %}
