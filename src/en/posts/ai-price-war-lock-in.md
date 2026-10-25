---
title: "AI's Price War: Every List Price Is $2. Was the Discount's Catch \"Don't Use OpenCode\"?"
date: 2026-10-25T08:50:00+08:00
description: "OpenAI is winning coding work from Anthropic on price, but list prices are flat at $2 per million tokens. The real fight is private discounts and the strings attached to them, from tool requirements to always-on agents. A note from someone who chooses models by cost, speed, and quality."
tags:
  - tech
  - ai
  - openai
  - anthropic
image: /images/posts/ai-price-war-lock-in/hero-en.png
imageAlt: "Cream background with the headline 'AI's Price War: Every List Price Is $2. The Catch: Don't Use OpenCode?' and line drawings of a padlocked price tag, a code window and a hand holding chalk"
lang: en
---

The AI price war has reached the enterprise. Yet if you line up the list prices, almost everyone charges $2 per million tokens. The real fight, as I see it, is happening off the price list: in private discounts, and in the strings that come attached to them.

## Rippling switched to OpenAI in five months

According to [a report by The Information](https://www.theinformation.com/articles/anthropics-margin-openais-opportunity) on October 24, Anthropic's models handled 57% of the coding work done by hundreds of engineers at HR software company Rippling in May, while OpenAI's handled 16%. Now it's flipped: OpenAI at 52%, Anthropic at 18%. CEO Parker Conrad said the company wanted to cut costs and OpenAI was cheaper ([free excerpt](https://www.benzinga.com/content/62577789/anthropic-s-margin-openai-s-opportunity)).

Replit, which lets you build apps in the browser, reportedly moved most of its AI spending to OpenAI after getting more than 30% off a deal worth over $100 million a year ([Techmeme summary](https://www.techmeme.com/261024/p8)). CEO Amjad Masad [said on X](https://x.com/amasad/status/2111494912562888939) that OpenAI is now the "preferred partner" for its agent because of performance, cost, and the strength of the partnership. Claude is still available as an option.

## Every list price is $2

So how much cheaper is OpenAI? Line up the API (the way programs call an AI model) list prices and it's almost anticlimactic.

- OpenAI GPT-6.1 Sol: $2 input, $10 output ([official](https://openai.com/index/introducing-gpt-6-1-sol/))
- Anthropic Claude Sonnet 5.5: $2 input, $10 output ([official](https://platform.claude.com/docs/en/about-claude/pricing))
- Moonshot Kimi K3.1 Pro: $2 input, $10 output ([per Artificial Analysis](https://x.com/ArtificialAnlys/status/2113688083145314416))

Those are per million tokens (the units AI uses to count text). In yen that's about ¥314 in and ¥1,568 out; in pesos, about ₱127 and ₱636. Identical.

The model itself is barely a differentiator anymore. Every AI can now drive a terminal, has its own VM (virtual machine), and runs agents in the cloud. There are even decision models built only for judging and classifying: Microsoft's [Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/) costs $0.042 per million input tokens, and output is free. Cheap LLMs (large language models) running on your own machine return answers with usable quality and speed. A price war was inevitable.

For software development, today's Opus or Sol is plenty. There's no need to keep paying for a top-tier model like Mythos. Even the free Muse model [I use through opencode](/en/posts/presyo-bantay/) is enough. So what do we actually want next?

## The discount came with a condition

When list prices are flat, the competition moves to discounts you never see. The Information's article says OpenAI also offered a discount to online learning company DataCamp. In [a screenshot of the article posted by The Information's Amir Efrati](https://x.com/amir/status/2114028199567118499), one line reads "...use Codex rather than a competing tool like OpenCode or Claude Code." The sentence is cut off, but it appears the discount was tied to using Codex, OpenAI's AI coding tool. OpenCode is an open-source AI coding tool, and Claude Code is Anthropic's. DataCamp's CEO said, "We're looking at an 80% to 90% decrease in costs."

Since no one can hold customers with a model alone, every company is trying to lock them in with an ecosystem. OpenAI has [Daybreak](https://openai.com/daybreak/), which works with Codex to find security holes in your code and prepare fixes, backed by $1 billion in subsidized access for defenders. Anthropic has Claude Code and things like [Agent Skills, which I wrote about last time](/en/posts/agent-skills-donation/).

The strongest lock-in goes one step further: always-on AI like OpenAI's [Dots](https://openai.com/index/introducing-dots/) (autonomous agents that keep working 24/7 on their own cloud computer), Anthropic's [Claude Duet](https://www.theverge.com/ai-artificial-intelligence/1015843/anthropic-claude-duet-ai-agent) (an agent that sends a morning brief and handles tasks in the background), and Grok Bot. They remember my context and act on my behalf. Once you've lived with one of these, it's really hard to leave.

## Choose by cost, speed, and quality

I've been saying it for years: choose your model by cost, speed, and quality. Accept a discount that ties you to a tool, and you give up the freedom to choose again on those three.

Big words, I know. I wrote this post running the free Muse on OpenCode, the very tool that discount reportedly told people not to use. I probably can't quit my always-on agent either, but the model, at least, I still pick for free every day.
