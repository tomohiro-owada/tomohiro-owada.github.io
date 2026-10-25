---
title: "I Built a Market Price Site Without Writing a Line of Code. The AI Mistook Eggplant for Eggs, and I Nearly Misread a Correlation"
date: 2026-10-24T17:54:00+08:00
description: "I had AI (opencode and Muse) build Presyo Bantay, a site that turns the Philippine Department of Agriculture (DA) price PDFs into Metro Manila market price charts with USD/PHP correlations, without writing a line of code myself. Imported rice in Las Piñas tracked USD/PHP with a 1–2 week lag at r=+0.92."
tags:
  - tech
  - philippines
  - presyo-bantay
  - ai-agents
image: /images/posts/presyo-bantay/hero-en.png
imageAlt: "Headline \"I Built a Price Site Without Writing Code. AI Mistook Eggplant for Eggs. I Nearly Misread a Correlation.\" with \"Presyo Bantay\", a question mark between an eggplant and an egg, and a line chart"
lang: en
---

Today (October 24, 2026), I launched "[Presyo Bantay](https://abalol.xyz/presyo-bantay/)" as a nonprofit community project. It's a static site that reads the daily market price PDFs published by the Philippine Department of Agriculture (DA) and lets you see, in your browser, how prices move in Metro Manila markets and how they correlate with USD/PHP (the U.S. dollar to Philippine peso exchange rate). At launch it holds data for 39 markets and 34 items. I didn't write a single line of code; opencode (a tool that has AI write code) and an AI model called Muse wrote all of it. At the Las Piñas market, the price of imported rice moved closely with USD/PHP, with a correlation coefficient of r=+0.92 at a lag of one to two weeks (though there's only about two months of data).

The source is on [GitHub](https://github.com/tomohiro-owada/presyo-bantay) (MIT license). Presyo Bantay means something like "price watch" in Tagalog.

## Why I built it

When you live in the Philippines and work remotely for a Japanese company, prices are not someone else's problem. According to the PSA (Philippine Statistics Authority), inflation in September 2026 was 7.2%, with rice up 20.3% year on year ([PSA](https://psa.gov.ph/content/summary-inflation-report-consumer-price-index-2018100-september-2026)).

Meanwhile, the DA [publishes prices for each market as PDFs every day](https://www.da.gov.ph/price-monitoring/). The data exists, but because it's in PDFs, it's hard for ordinary people to chart or compare. I'd been thinking about how I could be useful to the Philippines as an AI engineer, and this was the first thing I took on.

## How it works

The setup is pretty simple.

- Fetch the price PDFs from the DA's listing page and read the tables with `pdfplumber` (a Python library for extracting tables from PDFs)
- Store prices by market and item in SQLite (a database that runs from a single file)
- Get USD/PHP from the ECB (European Central Bank) reference rates via Frankfurter, a free exchange rate API (1,810 days, from 2019-10-01 to 2026-10-23)
- Export JSON for the static site (Vite + TypeScript + uPlot, a charting library) and publish it on GitHub Pages (GitHub's free website hosting)
- Run the import every morning at 6:00 (Manila time) on GitHub Actions (GitHub's system for running jobs automatically)

On the site you pick an item and a market to see how its price has moved, overlay USD/PHP on the right axis, and calculate the correlation coefficient. The interface switches between Taglish (a mix of Tagalog and English) and English. There's no tracking, no ads, no login and no externally loaded scripts (CDNs) at all. The JS is about 74 KB (about 31 KB gzipped).

At launch, the data runs through 2026-10-23. The listing has 1,892 older PDFs, and I'm importing them a little at a time, with gaps in between so as not to put load on the DA's servers.

## Muse in opencode wrote all the code

This time I didn't write a single line of code. I set the spec, reviewed the work and ran the tests, nothing more. Every change to code and configuration was written by the Muse model in opencode (`opencode-go/muse-spark-1.3-contributor`). I picked it for its generous free tier.

I kicked things off in the afternoon with "Let's go big!" and by the end of the day it had gotten this far:

1. A PDF parser (34 markets × 28 items from the Oct 23 PDF)
2. Storage in SQLite and importing of past data
3. Normalizing inconsistent item names, importing USD/PHP and calculating correlations
4. The static site, published on GitHub Pages

In the end there were 167 Python tests and 17 site tests, all passing.

### When eggplant counted as eggs

The first run (about 3 minutes) mostly met the spec, and all 24 tests passed. But when I reviewed it, I found it decided whether something was an egg by checking whether the item name contained "egg." As a result, **Eggplant was being treated as a per-piece price**, just like eggs.

There was one more problem. The GitHub Actions configuration file (workflow) that runs every day had no write permission (`permissions: contents: write`), so it could record changes (commit) but would fail when sending them to GitHub (push).

Once I pointed out these two things, the second run (about 2 minutes) fixed them. The unit is now determined by the "*" attached to headings in the PDF, and a test was added to keep it from happening again.

### When it got stuck because it couldn't write to /tmp

opencode is configured to refuse writes to `/tmp` (the folder for temporary files), so it stopped when it tried to put working files there. I solved it by creating `.scratch/` inside the repository as a workspace (already in `.gitignore`) and telling it to use that.

This reminded me that when you delegate to AI, it's not enough to check whether the tests pass. In review, you need to look at what it's basing its decisions on. The eggplant bug was found with every test passing.

## Moving the importer from Python to Go

For now, the import part is written in Python. But seeing the recent news about security vulnerabilities, I wanted anything that runs on a server every day to carry as little risk as possible.

So I'm in the middle of rewriting the importer as a single binary (an executable file that runs on its own) in Go, and Muse is writing this too. The plan is to keep dependencies to a minimum, feed it the same PDFs as the current Python version, and compare the results to confirm they're exactly the same. Once that's done, the server will just hold one Go binary run by cron (a scheduler for jobs at set times).

## Next steps

- Importing the older PDFs (2019 to early 2025). The format may change again
- Moving to the Go version
- A weekly Taglish digest (the feature itself is done, and I'm getting ready to post it to Telegram)

All numbers are calculated from public DA and ECB data, and actual prices vary from store to store. It's an unofficial nonprofit project, so I'd be glad if you just take a look.

## Prices in Las Piñas vs. USD/PHP

Finally, I calculated the correlation between prices and USD/PHP at the market in Las Piñas, where I live (New Las Piñas City Public Market). I used Pearson's correlation coefficient r, which ranges from −1 to +1: the closer to +1, the more two things move in the same direction, and the closer to −1, the more they move in opposite directions. I paired the price on day *d* with the exchange rate from a lag (the number of days shifted) before *d*.

On the evening of October 24, with the import of past data only partly done, the results looked like this:

| Item | r | Note |
|---|---|---|
| Imported rice (Premium Rice, Imported) | +0.92 (lag 7–14 days) | Only 59 days since 8/18, so treat as a rough figure |
| Galunggong (round scad, an everyday fish related to horse mackerel) | +0.70 | |
| Red onion | −0.31 | Looks mostly unrelated |

Imported rice seems to go up one to two weeks after the peso weakens. However, imported rice for Las Piñas doesn't appear at all in PDFs before 2026-08-18. With only two months of data, during which both the weak peso and rising rice prices kept going, it's entirely possible they just happened to move in the same direction.

## The table went stale while I was writing

As it turns out, this table went out of date while I was writing this post.

After more of the past data was imported, I reran the same calculation. Imported rice stayed at r=+0.92 for both the 7-day and 14-day lags (n=58, where n is the number of days compared), but Galunggong dropped from +0.70 to around +0.39 (n=178), and red onion went from −0.31 to around −0.48 (n=309). The red onion I'd called "mostly unrelated" now had a larger absolute value than Galunggong.

## The one reading too much into it was me

With the eggplant bug, I wrote that it's important to check in review what the AI is basing its decisions on. Yet the one reading too much into numbers from incomplete data was me, not the AI. **Correlation is not causation.** A high r only means "they moved in the same direction during this period"; it doesn't mean the exchange rate made prices move. Showing r, n and a "correlation is not causation" note on the site's correlation panel turned out to be the right call.

Since I didn't write a single line of code, the only one who nearly got something wrong in this post was me. Presyo Bantay's first job as a price watch was keeping an eye on the person who built it.
