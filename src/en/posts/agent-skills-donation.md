---
title: "Is an AI Skill a Manual or a Professional's Judgment? Thoughts on the Agent Skills Donation"
date: 2026-10-24T20:05:00+08:00
description: "Anthropic has donated Agent Skills to AAIF, a foundation under the Linux Foundation. It can't be pure goodwill, and skills aren't automatically an asset. But I think the answer changes depending on whether you read a skill as an instruction manual or as how a professional behaves."
tags:
  - tech
  - ai
  - agent-skills
image: /images/posts/agent-skills-donation/hero.png
imageAlt: "Cream background with the post title in Japanese and line drawings of a folder holding a checklist, a code editor and a hand holding chalk"
lang: en
---

Anthropic, the company behind Claude, has donated Agent Skills, a standard for teaching AI how to do a job, to an industry foundation. There has to be strategy behind that, not just goodwill. And if you asked me whether skills are an asset, I couldn't say yes right away. But I think the answer changes depending on whether you read a skill as an instruction manual or as how a professional behaves.

## Agent Skills moves to a foundation

On October 22, Anthropic [announced](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) that it had donated Agent Skills to the Agentic AI Foundation (AAIF). AAIF sits under the Linux Foundation, the nonprofit that supports open-source projects such as Linux. The donation covers the standard itself, its name and logo, the GitHub organization, and the agentskills.io domain.

AAIF was [launched](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) in December 2025, led by three companies: Anthropic, Block and OpenAI. Its first three projects were MCP (Model Context Protocol), a standard for connecting AI to outside tools and data; Block's goose; and OpenAI's AGENTS.md. On the same day, OpenAI, Hugging Face and Alibaba each donated projects as well, bringing AAIF to [10 projects](https://aaif.io/news/agentic-ai-foundation-announces-four-new-projects).

According to a [post](https://x.com/ClaudeDevs/status/2113328528536305718) from ClaudeDevs, Anthropic's developer account, Agent Skills will now be run by a technical steering committee of engineers from Anthropic, Earendil (Pi), Google, Microsoft, OpenAI and OpenCode. OpenCode is the team behind opencode, the tool I have writing my code every day.

## Inside, a skill is just a folder and some Markdown

The [specification](https://agentskills.io/specification) shows how simple skills really are. One skill is one folder, and inside it sits a Markdown file called SKILL.md. The file opens with frontmatter (settings written at the very top of a file), and two fields are required: `name` and `description` (what the skill does and when to use it).

The AI first loads only the name and description of every skill. It reads a skill's body once it decides to use it, and the attached scripts or reference files only when it actually needs them. The initial load is about 100 tokens per skill (tokens are the units AI uses to count text).

According to Anthropic, Agent Skills grew out of building Claude Code, Anthropic's AI coding tool. It was released in October 2025 and spun out as an open standard in December. More than 70 services now support it, including ChatGPT, Cursor, GitHub Copilot and VS Code, and there are reportedly 1 million published skills and about 280 million installs. Boris Cherny, the creator of Claude Code, also [wrote](https://x.com/bcherny/status/2113333859907747871) that it started as an experiment in Claude Code.

## It can't be pure goodwill

So why give it away? Even if there is goodwill on their side right now, I can't believe there's no strategy behind it.

On June 1, Anthropic confidentially [submitted](https://www.anthropic.com/news/confidential-draft-s1-sec) a draft registration statement for an IPO (initial public offering) to the SEC (the U.S. Securities and Exchange Commission). It has also been [reported](https://www.ifre.com/equities/2499407/anthropic-pushes-ahead-with-mid-november-ipo) to be aiming for a listing in mid-November. Right in that window, it moved a widely used standard outside the company. I can't tell exactly what it's after, but I don't think the timing is a coincidence either.

## Are skills an asset?

For those of us who use them, then, are skills an asset? Honestly, it's a tough call. Skills need maintenance of their own, so they aren't necessarily an asset. Some of them will also become unnecessary as models evolve.

## A manual, or how a professional behaves

This is where I realized the story splits in two, depending on whether you read a skill as an instruction manual or as how a professional behaves.

Read as a manual, a skill is know-how like "do this task with this command, in this order." The smarter models get, the more of this they can do on their own without being told. These are the skills that will eventually become unnecessary.

Read as how a professional behaves, a skill becomes a set of judgment calls: what to care about, and what never to do. That is specific to a person or a situation, so no matter how far models evolve, they have no way of knowing it by themselves. And behavior changes when the person or the situation changes. Needing maintenance stops being a flaw and becomes simply natural.

## The skill that was watching this post

As it happens, the posts on this blog are checked by an AI using a skill, too. It's a SKILL.md of about 40 lines called `blog-post-review`, with `name` and `description` at the top, the same shape as the Agent Skills spec.

Yet there's hardly anything in it you could call a procedure. What it holds is my rules: never write *ketsuron kara iu to* ("let me start with the conclusion"), never name my employer, end with a real punchline. Every one of them is something I rejected in posts the AI had written.

This post went through that skill before it was published as well. It doesn't open with "let me start with the conclusion" and it ends with a punchline like this one, because that's what the skill says. No matter how smart the next model is, it will never figure out by itself how much I hate "let me start with the conclusion."
