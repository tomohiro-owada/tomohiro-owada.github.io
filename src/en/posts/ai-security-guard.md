---
title: "AI Found the Hole in PHP. Are Defenders Still Waking People at Night?"
date: 2026-10-29T15:30:00+08:00
description: "Wiz used AI to find critical vulnerabilities in PHP, and the patch shipped the same day they went public. Finding holes and building attacks got faster, yet the first response after a breach may still hinge on a phone call in the middle of the night. My case for assuming you'll be breached and giving the defense side an AI guard too."
tags:
  - tech
  - security
  - ai
  - php
image: /images/posts/ai-security-guard/hero-en.png
imageAlt: "Cream background with the headline \"AI Found the Hole in PHP. Are Defenders Still Waking People at Night?\" and a line drawing of a guard robot standing next to a server"
lang: en
---

An AI dug up a hole that had been buried deep in PHP for a long time. The patch (a fix for the flaw) shipped the same day it went public. What stuck with me was less how fast the hole was found than what happens first once someone gets through it.

## An AI dug up a long-buried hole in PHP

On October 21, 2026, the cloud security company Wiz disclosed critical vulnerabilities (weaknesses in a program) in the core of PHP. PHP is the programming language that runs things like WordPress (a popular tool for building blogs and websites), and Wiz describes it as powering 70% of all websites in the world.

There are two of them, tracked as CVE-2026-109618 and CVE-2026-109619 (CVE is a worldwide ID number assigned to vulnerabilities). On CVSS (the Common Vulnerability Scoring System, which rates severity from 0 to 10), the severity reaches 9.2. They include unauthenticated remote code execution (RCE), which lets someone who is not logged in run whatever program they like on the server. The PHP team released fixed versions on that same day, the 21st.

According to Wiz, the vulnerable code had been there for more than a decade. Finding the flaws and turning them into a working attack was so complex that it sat near the edge of what human researchers could practically do, Wiz explains. The team used Gemini 4 Argon and GPT-5.6 Sol in the research. Wiz also writes that a single researcher finished in a week what would previously have taken a world-class team months.

## Attack and defense: an endless game of cat and mouse

Who benefits more from AI, the attacker or the defender? It's an interesting question, but my answer is "an endless game of cat and mouse." When attackers hunt for holes, defenders plug them. That has always been true.

What has changed is the pace. In Wiz's timeline, the first vulnerability was found on August 19, unauthenticated RCE was confirmed against Drupal (a website-building tool) the next day, the 20th, and against WordPress on the 21st. Five days after disclosure, on October 26, CISA (the US Cybersecurity and Infrastructure Security Agency) added both CVEs to its KEV catalog, its list of vulnerabilities confirmed to be exploited.

CISA strongly urges immediate patching. It also says that if you can't update right away, you should take PHP-based systems offline. The same goes for unsupported versions, PHP 8.1 and earlier. Defenders have to move in a hurry from the very day of disclosure.

## Finding holes got faster. But after one is exploited?

According to Wiz, Gemini 4 Argon helped not only with finding the flaw and developing the exploit, but also with detecting the attack and validating the patch. So AI is already in wide use, from hunting for holes to developing the attack to checking the defense.

Still, I think that in many places the first response after a hole is exploited depends on humans. Wiz writes that this kind of attack runs below the application layer, so application logs may contain little to go on. The warning signs it lists include suspicious file-upload-style requests followed by memory-limit errors, and repeated HTTP 500 errors (responses signaling a server-side failure). CISA also tells defenders to watch for PHP processes launching shells (screens that run commands directly).

That makes me wonder. We can't tell how much damage can be done in a single minute, so is it really fine to keep ringing a phone to wake someone up in the middle of the night, just like before? By the time the person who was woken starts reading those thin clues, many minutes may already have passed.

## Assume you'll be breached, and post a guard

Even once a patch is out, it doesn't reach every server right away. I suspect CISA spells out "if you can't update, take it offline" because some servers can't be updated quickly and stay behind.

So I think it's better to decide up front that you will be breached, and defend on that basis. And I want the defending side to have an AI guard too. It watches for suspicious activity, stops it first before waking anyone, and then tells a human. That's the guard's whole job.

If an AI dug up the hole, an AI can stand guard in front of it too.

A management decision? While you're under attack? Do you really still need one?
