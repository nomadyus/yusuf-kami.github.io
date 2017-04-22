---
layout: plain/page
title: Whats up!
permalink: /posts/
---

Here lives the posts made by Yusuf Fadairo!

{% for post in in site.posts %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
{% endfor %}