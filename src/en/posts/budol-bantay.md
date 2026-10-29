---
title: "I Built a Scam-SMS Checker. Even the Biggest AI Model Fits in the Free Tier: 93 Checks a Day"
date: 2026-10-30T05:40:00+08:00
description: "I released Budol Bantay, a nonprofit tool that judges how scam-like a suspicious SMS or Messenger message is, even when it's written in Taglish. The AI runs only on the Cloudflare Workers AI free tier with a daily cap, and falls back to rules-only checks once the cap is used up. The numbers behind my model choice, measured on 20 test messages, are included."
tags:
  - tech
  - philippines
  - budol-bantay
  - ai
  - security
  - cloudflare
image: /images/posts/budol-bantay/hero-en.png
imageAlt: "Cream background with the headline \"I built a scam-SMS checker. Even the biggest AI model fits in the free tier: 93 checks a day\" and a line drawing of a smartphone showing an SMS with a warning sign, a shield and a magnifying glass"
lang: en
---

On the early morning of October 30, 2026 (Manila time), I released "[Budol Bantay](https://abalol.xyz/budol-bantay/)," a nonprofit tool that judges how scam-like a suspicious SMS or Messenger message is. It works on Taglish too (Tagalog and English mixed together). The AI runs only on the Cloudflare Workers AI free tier, and once the daily cap is used up it switches to rules-only checks. It's designed so that no charges can ever happen. The name is a placeholder, and the official name hasn't been decided yet.

## So the people around me can check for themselves

In the Philippines, people get SMS messages that pretend to be GCash (an e-wallet app widely used in the Philippines), fake delivery notices, fake job offers and loan pitches all the time. I thought the people close to me should have something they can use to check for themselves, and that's why I built this.

Budol Bantay is the third in the "Bantay" (Tagalog for watchman) series I'm building in the Philippines. The first was [Presyo Bantay](/en/posts/presyo-bantay/) for market prices, the second was Sakuna Bantay for disaster preparedness, and this one watches over scam messages. "Budol" is an everyday Philippine word for being conned.

## Scams people tend to swallow

The Philippines has a huge number of scams. In its 2026 [survey](https://gasa.org/knowledge-base/reports/state-of-scams-in-the-philippines-2026), the GASA (Global Anti-Scam Alliance, an international nonprofit) found that 84% of adults had come across a scam in the past 12 months, an average of 151 times a year. Among people who lost money, the average loss was ₱10,427 (₱ is the Philippine peso), and the estimated total loss nationwide is ₱121.8 billion. Note that this is an estimate based on a survey of 1,160 people, not an official tally by the police or the government. [Philstar](https://www.philstar.com/headlines/2026/10/10/2562116/online-scams-cost-filipinos-p1218-billion-one-year) also says it is a survey-based estimate.

The average loss is a mean, so it doesn't prove that small losses are the most common. Still, the numbers show that victims tend to give up. In the same survey, only 4% of all respondents reported to the authorities, and only 29% even among those who lost money. An official at the DOJ (the Philippine Department of Justice) who handles cybercrime says that victims sometimes tell them "napatawad ko na" ("I've already forgiven them") right before prosecution and drop the case ([Rappler](https://www.rappler.com/newsbreak/inside-track/scam-victims-move-on-fraud-cases-hanging/)). The methods start small, too. In a task scam the SEC (the Philippine Securities and Exchange Commission) [warned about](https://www.philstar.com/business/2025/07/25/2460429/sec-warns-public-vs-job-offer-scams), you pay ₱500 to get ₱1,000 worth of tasks, and later you're made to pay ₱5,000.

Scams also happen on social media that people look at every day. In the same survey, 58% of respondents named Facebook as a place where they encountered scams, followed by Gmail at 33% ([Inquirer](https://business.inquirer.net/615055/survey-filipinos-lost-p121b-to-scams-in-2025)). The most common report to the PNP ACG (the Philippine National Police Anti-Cybercrime Group) in 2025 (through November 21) was online selling scams, at 1,630 cases ([Inquirer](https://newsinfo.inquirer.net/2144504/fewer-online-scams-logged-in-2025-so-far-but-acg-on-lookout-amid-holidays)). That figure doesn't say which services the cases happened on.

On top of that, I believe an account that has been bought and sold looks no different from a real one. In January 2024, the NBI (the National Bureau of Investigation) arrested seven people who were selling GCash accounts on Facebook, and the five accounts its agents bought cost ₱1,500 to ₱3,500 each ([Philstar](https://www.philstar.com/nation/2024/01/21/2327372/7-face-raps-selling-gcash-accounts)). In January 2026, eight people who were selling e-wallet accounts online were arrested too ([Newsbytes.PH](https://newsbytes.ph/2026/01/26/pnp-arrests-8-for-selling-e-wallet-accounts-online/)). Even SIM cards turned up for sale: 240 registered under fictitious names were sold on Facebook Marketplace ([Philstar](https://www.philstar.com/nation/2025/10/13/2479426/pnp-cracks-down-sim-card-sellers)). The GASA also says scammers clone profiles, fabricate engagement numbers and mimic verified pages ([BusinessWorld](https://bworldonline.com/banking-finance/2025/11/26/714453/over-60-of-filipinos-targeted-by-financial-scams-report-says/)).

If you can't tell from the sender's account, you at least need a way to easily check what the message itself says. That's what I wanted.

## How it judges what you paste

You paste a suspicious message and press "I-check." The result shows how scam-like it is, why it came to that judgment, and what to do next. The interface comes in Taglish, English and Japanese.

It's made of two parts: a static site (hosted on GitHub Pages) and a separate API written in Go. The judgment has two layers.

- Rule-based checks: links, urgency phrases, requests for an OTP (a one-time code sent by SMS), and so on, checked in your own browser
- AI judgment: only a copy with phone numbers, OTPs and similar details masked on your device is sent to the API, which returns the AI's verdict

The rule-based result is produced on the device you pasted into. If you turn the AI off, the message never leaves your device. The same API could also be used later from something like a Messenger bot.

## Guardrails to stay inside the free tier

The AI runs only on the free tier of Cloudflare Workers AI (Cloudflare's service for running AI models). The free tier gives you 10,000 neurons (Workers AI's unit of usage) a day, and I set the daily cap at 8,000 to leave some margin. Once it's used up, the API stops calling the AI and falls back to rules-only checks. I use the free plan, so nothing is billed even if the cap is exceeded. The day rolls over at 8:00 a.m. Manila time.

There are also safeguards against abuse. Requests are rate-limited per IP address, and the CORS settings (CORS is the browser mechanism that decides whether another website may call an API) let only allowed sites call the API.

## Choosing a model with 20 test messages

I picked the AI model by measuring, not by gut feeling. The test set was 20 fictional Taglish messages (11 scams and 9 legitimate ones). For each model I measured accuracy and the neurons spent per check. The neuron figures come from the usage information returned in the API responses.

| Model | Accuracy | Neurons per check | Checks per day (cap 8,000) |
|---|---|---|---|
| Rules only | 70% | 0 | - |
| gpt-oss-120b | 100% | ~85 | ~93 |
| gpt-oss-20b | 95% | ~29 | ~276 |
| gemma-4-26b | 100% | ~55 | ~146 |
| sea-lion-v4 | 90% | ~60 | ~132 |
| qwen3-30b | 75% | ~33 | ~242 |
| llama-3.1-8b | 85% | ~29 | ~273 |

I adopted the biggest one, gpt-oss-120b. It got all 20 right and never flagged a legitimate message as a scam. At about 85 neurons per check, the 8,000 cap allows about 93 checks a day. The smaller gpt-oss-20b scored 95% and allows about 276 checks a day, so it's the backup.

## The disappointing models, and the weakness of rules

The surprise was sea-lion-v4, which is tuned for Southeast Asia. I had figured it would be the strongest at Taglish, yet it scored 90% and flagged two legitimate messages as suspicious. One of them was a bank OTP notice. gemma-4-26b scored 100%, but it took over 30 seconds per check (the median was 33 seconds), and in 2 of the 20 runs the answer never finished and was cut off. I ran the models at the same time, so the slowness is somewhat exaggerated, but it still wasn't practical. llama-3.1-8b scored 85%, and some of the advice text it produced made no sense.

The other thing I saw was the limit of rules alone. The rules never misjudged a legitimate message as a scam, but they missed 6 of the 11 scams, which gives 70% accuracy. That said, I chose these 20 messages to include a lot of scams the rules are bad at. Across the full set of 59 messages, rules alone scored 83.1%. And gpt-oss-120b's 100% on 20 messages is only the result of a small trial.

## Saying "not perfect" right next to the result

A notice always appears right next to the result. In Japanese it reads 「このチェックは完全ではありません。迷ったときは一人で判断せず、家族・友人・信頼できる人に相談してください」, roughly "This check is not perfect. If you're unsure, don't decide alone; ask family, friends or someone you trust." It's shown in Tagalog and English too. I also wrote the terms of use in Tagalog, English and Japanese.

I haven't put any personal contact information on the site. Honestly, my feeling is that people shouldn't be sending questions to me. Feedback and bug reports go to GitHub Issues. If you've been scammed, the site points you to the CICC (the Philippines' Cybercrime Investigation and Coordinating Center) hotline 1326, the PNP ACG (the Philippine National Police Anti-Cybercrime Group), and the official support of your bank or e-wallet.

The source code is on [GitHub](https://github.com/tomohiro-owada/budol-bantay) under the MIT license. Before the release, I went through the repository to check that nothing that shouldn't be public was in it.

## The last verdict: ask a person

I put an AI that scored 100% on 20 messages into this tool, and yet next to every result it says, "Don't decide alone; ask the people around you." A tool for spotting scams ends up telling you to go ask someone.

The AI closes up shop after 93 checks a day, but the line "ask a person" can show up as many times as needed.
