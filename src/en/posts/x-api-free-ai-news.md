---
title: "How I Get an Automatic AI News Briefing Every Morning Without Paying for the X API"
date: 2026-10-24T17:59:00+08:00
description: "Without the paid X API, I get an AI news briefing delivered automatically every morning at 7:17, using the free public-post reads built into Grok Bot (up to 30 per minute and 1,000 per day). Here's how it works and the limits I ran into."
tags:
  - tech
  - ai-agents
  - x-api
  - grok-bot
  - automation
image: /images/posts/x-api-free-ai-news/hero-en.png
imageAlt: "Navy background with the headline \"An Automatic AI News Briefing Every Morning, Without the Paid X API\" and line drawings of a rising sun and a newspaper"
lang: en
---
It turns out you can get a morning AI news briefing built automatically every day without the paid X API (X's official way for programs to read its data). What I use is the free public-post reading built into the AI assistant Grok Bot, capped at 30 reads per minute and 1,000 per day. One morning briefing uses somewhere between a dozen or so and 25 reads, nowhere near the limit.

## I just wanted the AI trends

You can follow most AI news by keeping an eye on X. But reading X myself is a chore, and all I want is the AI-related trends. So I set up a system that collects public posts from X every morning and delivers them to me as an "AI news morning edition." It has run every day since the morning of October 16.

## A two-part briefing every morning at 7:17

The scheduled job runs every morning at 7:17 (Manila time). It covers roughly the 24 hours since the previous morning, searching across changing topics, removing duplicates and summarizing. Each run uses a dozen or so to 25 reads, far below the limit.

At first I only asked for the small news. Big announcements reach me through other channels anyway, so I wanted full coverage of smaller tools, papers, OSS (software published for anyone to use) and things developers have discovered. But I found I wanted the major news too after all, so I switched to a two-part format:

- Major news comes in a single message
- Smaller news gets a one-line parent message, with the full text in its thread

There are around 45 to 75 small items a day, so dumping them all into the chat would bury everything. Keeping the parent message to one line and opening the thread only when I want to read turned out to be just right.

## Repeat topics become "follow-ups"

When you summarize every day, the same topics keep showing up for days in a row. A new model gets announced, and the next day come the benchmark results and the tools adding support for it.

So for topics already covered in earlier editions, only those with new developments now appear, marked as "follow-ups," and straight repeats are dropped. On days when it drops items that may have been in the previous day's edition, the report says so.

## What I learned

### I avoided paying for the API

Just reading public posts, I could run it every day without going through the official API's billing. Against the limit of 1,000 reads a day, one briefing uses about 25 at most.

### Summaries are based only on the post text

The limitation is that the summaries rely only on the text of the posts and X's news summaries. It doesn't open the linked articles. Many posts are cut off partway, so I need to check fine details like numbers and conditions at the source. Stories based on media reports (say, a company's reported IPO (initial public offering) filing) are summarized just as the post describes them.

That's why I have it put "Summaries based on post text" at the top of the small-news thread every time. Each item links to the original post, so I trace back only the ones that catch my interest.

### Think about duplicates at the topic level

It's normal for several people to post about the same topic, so duplicates within a single day get merged into one. The hard part is duplicates across days, which you can't judge without remembering what was already covered. Right now it compares against earlier editions and decides based on whether there's something new.

I've asked for full coverage, but crypto promotions and clickbait-style "save this list" posts get left out.

I'm the type who reads even the small news in full, so every morning I open the thread and read it from top to bottom.

## I actually took the long way around

Written out like this, it sounds like it came together smoothly, but at first I took quite a detour.

My first idea was to search with the official X API. But the X API is now prepaid, with no free tier. Every call eats into prepaid credits, so running dozens of searches every morning would turn straight into a monthly expense. I didn't need any data tied to my own account either, so I wanted to avoid paying X indefinitely just for this.

Next, I tried having an AI agent (an AI that takes instructions and carries out the steps itself) log in to X in its browser and read it. When it entered the email address and pressed "Continue," nothing happened, not even an error. X seemed to detect an automated environment and block the login. Clicking differently wasn't going to fix that, so I gave up on the browser route.

What I ended up using was the free public-post reading built into Grok Bot. No login, no money. In exchange, there are limits: 30 reads per minute and 1,000 per day.

The first run used 15 searches and collected 54 news items from the last 24 hours. That left 983 reads for the day, plenty of room for one run every morning.

## After an hour-long fight

Looking back, I spent more than an hour that day wrestling with X's login screen. When I finally grumbled, "I just want to know the AI trends," the reply was, "If you only need to read public posts, (…) you don't need a login or any money." The one who should have said that at the start was probably me.
