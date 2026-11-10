---
title: "Even in the AI Era, Don't Pay 100% of the Cost for the Last 1%"
date: 2026-11-10T20:25:00+08:00
description: "A story spread on X about a company that had AI write 100% of its code, only to see its codebase triple. Left to AI, things bloat. The more conscientious people are, the heavier they make things, and they take satisfaction in the weight. In tests and quality gates alike, I have chosen the option that is solid but not heavy. I don't pay 100% of the cost for the last 1%."
tags:
  - tech
  - ai
  - engineering
image: /images/posts/solid-not-heavy/hero.png
imageAlt: "A pencil line drawing on cream paper: a person walks along carrying one small box, next to a large, tilting heap of wooden crates and cables. No text."
lang: en
---
Left to AI, code and everything around it bloats. That is why I only pick options that may make things more solid, but never heavier.

## Had AI write 100% of the code, and it tripled

A story was spreading on X ([X trending](https://x.com/i/trending/2119657618927202600)). It started as a post on Reddit. A year ago, a company ordered that "100% of code be written by AI." Its codebase (all the code that makes up the product) grew to three times its size. It is full of duplication, and hardly anyone is left who can review it (read the code and check it). Ryan Dahl, who created Node.js, reacted with surprise.

I have not verified what the post says. Still, it did not surprise me when I read it, because I have seen something similar.

## Waiting on long test runs for every few lines I changed

One product I was involved with at work started before its spec ever settled. It was launched before it was ready. Luckily, what I was building myself with AI was looking one step ahead of that product.

Meanwhile, around that product, people relied on AI but could not fully trust it. Because they could not trust it, they kept trying to make everything robust. More and more machinery piled up, and the whole thing bloated.

Changing just a few lines of code set off an enormous number of tests. I was made to wait, pointlessly, before every deploy (releasing what you have built to the production environment).

I hated that. So I always kept one option at hand: it may get more solid, but it does not get heavier.

This is not about one particular technique. In tests, in harnesses (setups that run AI or programs through fixed steps and check the results), in quality gates (mechanisms that automatically stop changes that miss a standard from moving forward), at every layer, I choose the option that is solid but not heavy.

## The more conscientious, the heavier

Every engineer has probably seen this failure at least once.

And the more conscientious people are, the heavier they make things, because heaviness gives them a sense of satisfaction. Adding tests and adding review steps makes you feel you are doing things properly.

In reality, it is different. Just as with development quality, getting from 99% to 100% costs a great deal. That does not change with AI. Even when AI does the implementing, the testing, and the verification, the last 1% of quality still costs. So I do not make choices that add 100% of the cost to chase the last 1%.

The strange part is that back when humans did all the work, this should have been the ordinary call. Yet somehow, when AI does the work, people get it wrong. As a result, time that should go to the parts that really matter gets eaten away.

## Only the people who built it are satisfied by the weight

The satisfaction that heaviness brings belongs to the people who built it. Users never see that weight, and it does not make them happy. You should not pay for a satisfaction that users do not enjoy.

Robustness and lightness can coexist. You just have to pick the solid-but-not-heavy option every time. If the fix is a few lines, it ships after a few lines' worth of waiting. To me, that is what robustness is.
