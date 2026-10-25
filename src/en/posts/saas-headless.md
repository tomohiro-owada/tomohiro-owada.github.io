---
title: "SaaS Will Lose Its Head Before It Dies"
date: 2026-10-25T19:00:00+08:00
description: "A prediction that general-purpose SaaS will vanish within 3 years is making the rounds on X. I think it will vanish too, but first SaaS will lose its UI and become just an API, and then get absorbed into our own services. Until then, what keeps SaaS alive is engineers who can't see the cost of operations and follow-on development."
tags:
  - tech
  - saas
  - engineering
  - open-source
image: /images/posts/saas-headless/hero-en.png
imageAlt: "Cream background with the headline \"SaaS Will Lose Its Head Before It Dies\" and a line drawing of an API with no screen"
lang: en
---

A prediction that SaaS will vanish within 3 years is making the rounds on X. I think SaaS will vanish too. But I have my own view of how it will disappear, and of why it survives until then.

## A prediction of extinction within 3 years

According to [X's news summary](https://x.com/i/trending/2114172476057952713), the entrepreneur Alex Becker says one-size-fits-all SaaS (software you use over the internet, usually for a monthly fee) is in decline, and that custom software built for each company will become the mainstream. He even warns that companies selling the same UI (user interface) to everyone will be gone within 3 years.

My own experience points the same way. When I sign up for a new service these days, I rarely go with SaaS. Implementing it myself is faster.

## For adding a feature, SaaS is faster

Honestly, though, the bigger factor is the difference in values among engineers: how they see implementation and what it costs.

To add a feature itself, adopting SaaS is overwhelmingly faster. But when you bring something inflexible into software whose specs change often, you end up depending on it. Then an inelegant setup grows up around it, twisting things to fit the SaaS.

## The engineers who keep choosing SaaS

Engineers who can't see this will keep adopting SaaS as casually as they always have, because they can't correctly estimate the cost of operations and of follow-on development (adding features to or reworking what you adopted, after the fact).

I'd like to say SaaS won't die as long as such engineers exist. But once other engineers start stepping in to stop them, that culture will fade quickly.

## First, the screen goes

Even if SaaS disappears, at first it will just go headless: no screen, only an API (the way programs call its functions).

Until now, OSS (open source software, whose source code is public and free for anyone to use) came in units of libraries or features. From now on, OSS at the scale of a whole SaaS will appear as a matter of course. Most of it will probably be headless too. If you're embedding it into your own app, a GUI (the visual part you operate with buttons) only gets in the way.

Next, the SaaS we only call through its API gets gradually absorbed into our own services. And when the dependency finally reaches zero, that SaaS is gone.

What keeps SaaS alive is engineers who can't see through the cost of follow-on development and operations, but it's only a matter of time.
