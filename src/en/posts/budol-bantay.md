---
title: "A Country Full of Scammers: What Sets the Philippines Apart from Japan Is the Amount That Makes You Give Up"
date: 2026-10-30T06:10:00+08:00
description: "The Philippines has a lot of scams, and I think what sets it apart from Japan is the amount that makes victims give up. Why I built Budol Bantay, a nonprofit tool that judges how scam-like a message is, how it runs on a free tier, and how I picked the AI model on 20 test messages."
tags:
  - tech
  - philippines
  - budol-bantay
  - ai
  - security
  - cloudflare
image: /images/posts/budol-bantay/hero-en.png
imageAlt: "Cream background with the headline \"A Country Full of Scammers: What Sets the Philippines Apart from Japan Is the Amount That Makes You Give Up\" and a line drawing of a small peso coin next to a worried figure, a tall stack of yen banknotes, and a phone with a warning sign in a speech bubble"
lang: en
---

The Philippines is a country with scammers everywhere. What sets it apart from Japan, I think, is the amount at which victims decide to give up.

That's why I built "[Budol Bantay](https://abalol.xyz/budol-bantay/)," a nonprofit tool that judges how scam-like a pasted message is. I released it early on October 30, 2026 (Manila time). The name is a placeholder; the official name isn't decided.

## A country where 84% of adults meet scams

In the [2026 survey](https://gasa.org/knowledge-base/reports/state-of-scams-in-the-philippines-2026) by GASA (the Global Anti-Scam Alliance), 84% of adults had met a scam in the past 12 months, an average of 151 times a year each. It's an estimate from 1,160 respondents, not an official tally.

58% of respondents named Facebook as where they met scams ([Inquirer](https://business.inquirer.net/615055/survey-filipinos-lost-p121b-to-scams-in-2025)). The social network people open every day is the front door.

## What sets it apart from Japan is the amount that makes you give up

Japan's special fraud (the "it's me" phone scams and the like) goes for big sums at once. In the National Police Agency's [2025 final figures](https://www.npa.go.jp/bureau/safetylife/sos47/new-topics/260605/01.html), the average was about ¥5.236 million per completed case.

![Japan and the Philippines side by side. Japan, National Police Agency 2025 final figures: special fraud averages ¥5.236 million per completed case, SNS investment and romance fraud ¥12.133 million, and there were 27,832 special fraud cases. The Philippines, GASA 2026 survey-based estimate: 84% of adults met a scam in the past 12 months, 151 times a year, and those who lost money lost ₱10,427 on average](/images/posts/budol-bantay/compare-japan-philippines-en.png)

In the Philippine survey, people who lost money lost ₱10,427 on average (₱ is the Philippine peso). That's a mean, and the method and currency differ from Japan's. Only the tendency can be compared.

The tricks start small, too. The task scam that the SEC (Securities and Exchange Commission) [warns about](https://www.philstar.com/business/2025/07/25/2460429/sec-warns-public-vs-job-offer-scams) starts with paying ₱500 to get ₱1,000 worth of work.

And very few people report. Only 4% of respondents told the authorities, and 29% of those who lost money. A DOJ (Department of Justice) official says victims sometimes drop out right before prosecution, saying "napatawad ko na" (I've already forgiven them) ([Rappler](https://www.rappler.com/newsbreak/inside-track/scam-victims-move-on-fraud-cases-hanging/)).

![Share of victims who reported to the authorities in the Philippines: 4% of all respondents and 29% of those who lost money. A DOJ official says victims sometimes drop the case just before prosecution, saying they have forgiven the scammer](/images/posts/budol-bantay/report-rate-en.png)

I believe bought and sold accounts can't be told apart from real ones by looking. Seven people who sold GCash (a widely used e-wallet app in the Philippines) accounts on Facebook were charged in 2024. The NBI (National Bureau of Investigation) ran the case ([Philstar](https://www.philstar.com/nation/2024/01/21/2327372/7-face-raps-selling-gcash-accounts)).

If you can't tell by the sender, you at least need a tool to check what the message says. That's how I saw it.

## How it works: paste and get a verdict

Paste a suspicious SMS or Messenger message and press "I-check." You get how scam-like it is, why, and what to do. It works on Taglish (Tagalog and English mixed together) too.

The verdict has two stages. Rules check links, pressure phrases, and requests for an OTP (the one-time code sent by SMS). Then the AI weighs in. The AI only receives a copy with phone numbers and the like masked.

It's a static site on GitHub Pages plus an API written in Go. The API might also serve a Messenger bot later.

## Staying inside the free tier, and measuring to choose

The AI runs only on the free tier of Cloudflare Workers AI (Cloudflare's AI inference service). The free tier is 10,000 neurons a day (a unit of usage), and I set my cap at 8,000 to leave some room. Once it's used up, the tool falls back to rules-only checks, so there's no bill.

Against abuse, there's a per-IP rate limit. CORS (the browser mechanism that decides which sites may call an API) lets only allowed sites through.

I chose the model by measuring on 20 fictional Taglish messages (11 scams, 9 legit).

![Comparison of seven options. Accuracy and calls per day: rules only 70%; gpt-oss-120b 100% and 93 calls; gpt-oss-20b 95% and 276; gemma-4-26b 100% and 146 but too slow; sea-lion-v4 90% and 132; qwen3-30b 75% and 242; llama-3.1-8b 85% and 273](/images/posts/budol-bantay/model-comparison-en.png)

I adopted the biggest one, gpt-oss-120b. It got all 20 right and uses about 85 neurons a call, so it runs about 93 times a day. The smaller gpt-oss-20b, at 95%, is the backup.

What surprised me was sea-lion-v4, tuned for Southeast Asia. It scored 90% and flagged a bank's OTP notice as suspicious. gemma-4-26b scored 100% but took a median of 33 seconds, so it wasn't usable.

Rules alone scored 70%. But I'd picked more of the messages the rules are weak on, and on all 59 messages it was 83.1%. It's also a small test.

## Writing "this isn't perfect" next to the result

A disclaimer always sits next to the result. In the Japanese version it reads: "This check is not perfect. When in doubt, don't decide alone; talk to family, friends, or someone you trust." The Tagalog and English versions say the same, and the terms of use come in all three languages.

I don't list any personal contact. "Please don't send your questions to me" is the honest answer. Feedback and bug reports go to GitHub Issues.

I also point people to where to report a scam: the hotline 1326 of the CICC (the Philippines' cybercrime agency), the PNP ACG (the national police's cybercrime group), and the official support of banks and e-wallet apps.

The source code is on [GitHub](https://github.com/tomohiro-owada/budol-bantay) under the MIT license. Before release, I went through it once to make sure nothing that shouldn't be public was in there.

## Kindness that scams prey on

Even with an AI that scored 100% on 20 messages, I wrote "talk to someone" next to the result. When in doubt, ask the people around you. I think that one line points the same way as the Philippines' culture of supporting each other.

I won't forgive scams that prey on the kind national character born of a culture of mutual support. But the poverty and inequality behind them are a fact, too.
