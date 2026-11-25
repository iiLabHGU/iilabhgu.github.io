---
title: Contact
description: "한동대학교 산업지능화 연구실 연락처와 위치 — 경북 포항시 북구 한동로 558 뉴턴홀 107호."
subtitle: 오시는 길
permalink: /contact/
redirect_from:
  - /about/
---
{% assign lab = site.lab %}

<div class="contact-grid" markdown="0">
  <div class="contact-card">
    <p class="eyebrow">English</p>
    <p class="contact-name">{{ site.title }}</p>
    <p>{{ lab.room }}<br>{{ lab.affiliation }}<br>{{ lab.address }}</p>
  </div>
  <div class="contact-card">
    <p class="eyebrow">한국어</p>
    <p class="contact-name">{{ site.title_ko }}</p>
    <p>{{ lab.affiliation_ko }}<br>{{ lab.address_ko }}</p>
  </div>
  <div class="contact-card">
    <p class="eyebrow">Email · Phone</p>
    <p class="contact-name"><a href="mailto:{{ lab.email }}">{{ lab.email }}</a></p>
    <p>{{ lab.phone }}</p>
  </div>
</div>

<div class="map" markdown="0">
  <iframe src="{{ lab.map_embed }}" title="Map to Newton Hall, Handong Global University" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
