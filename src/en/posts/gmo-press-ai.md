---
title: "Was the AI Talk at GMO's Press Conference Sincere or a Smokescreen? My Answer Is \"I Can't Say\""
date: 2026-11-02T15:50:00+08:00
description: "After the press conference held by the head of GMO Internet Group, many viewers on X said the AI talk went on too long. Was it a sincere explanation, or a smokescreen to steer attention away? My answer is \"I can't say.\" I walk through the incident in plain language for non-IT readers, and explain why this time is only a possibility but could become a serious crisis."
tags:
  - tech
  - security
  - ai
  - japan
  - north-korea
image: /images/posts/gmo-press-ai/hero.png
imageAlt: "A pencil line drawing on cream paper: a podium with two microphones in a spotlight. Behind the curtain next to it, a row of cabinets sits in shadow, and one small door is open with a thin ray of light leaking out"
lang: en
---

At the press conference on November 2, Masatoshi Kumagai, the head of GMO Internet Group, talked about AI. Was that a sincere explanation, or a smokescreen meant to steer attention away from the real issue? My answer is "I can't say." As I wrote out my reasons, something other than the conference itself started to bother me more.

## An apology press conference turned into "an AI talk" partway through

The conference began a little after 3:30 p.m. on November 2, in central Tokyo ([NHK](https://news.web.nhk/newsweb/na/nd-20261102de69492), in Japanese). Kumagai apologized and admitted that the service's system did have a security problem ([Yomiuri Shimbun](https://www.yomiuri.co.jp/economy/20261102-GYT1T00253/), in Japanese). He also admitted that experts inside the group had pointed out issues in April 2024, and that those warnings were not put to use in running the service ([Nikkei](https://www.nikkei.com/article/DGXZQOUC0235C0S6A101C2000000/), in Japanese).

AI came up too. According to Nikkei's summary, attackers adapted to AI technology early, and cyberattacks have "evolved from pistols to machine guns." The turmoil of surging data leaks and the like is "only the prologue."

Many viewers on X wrote that this part felt out of place. "I thought I was watching an apology press conference and it turned into an AI lecture lol" ([@sue__husk](https://x.com/sue__husk/status/2117155606968910032)). "Part two of the GMO press conference has turned into an AI agent seminar by President Kumagai." ([@kamimochi_2101](https://x.com/kamimochi_2101/status/2117153587323457859)). These are individual viewers' impressions. In what I looked at, I could not find any report stating how many minutes the AI talk lasted, so I won't give a number.

On the other hand, ITmedia pointed out in an October 26 article that no evidence has been shown that AI was used in this attack ([ITmedia](https://www.itmedia.co.jp/news/article/2610/26/2000002571/), in Japanese).

The threat of AI itself is a real topic. But as far as I could check, no evidence has been presented that AI was involved in this incident. With nothing decisive on either side, "I can't say" is the only answer I can give.

## What happened? Probably 99 out of 100 people still haven't understood

My sense is that about 99 out of 100 people in the world still don't understand what happened in this incident or what the problem was. To explain it to someone who isn't into IT, you have to go all the way into how software is built, how it runs, and how it is protected.

So let me retell it as plainly as I can, within what has been reported.

- The service involved was a VPS (a virtual private server: a PC of your own that you rent over the internet) used for automated FX (foreign exchange margin) trading. Users stored their trading account IDs and passwords on it ([ITmedia](https://www.itmedia.co.jp/news/article/2610/24/2000002566/), in Japanese).
- According to the Sankei Shimbun, this is what the vice president explained. On August 5, the attacker got in through remote desktop (a way to operate a computer's screen from far away) and stole an administrator account (something like a master key to the whole system). They then moved into the management server, and between September 20 and October 14, malware (a malicious program) was distributed to other customers' VPSs ([Sankei Shimbun](https://topics.smt.docomo.ne.jp/article/sankei/nation/sankei-_affairs_crime_H4V7LEBJRNORXLGJB5MLHHPJ2I), in Japanese). As far as I could confirm, only the Sankei reports the August 5 date.
- To use an analogy: it's as if the building manager's master key was stolen and someone tampered with the residents' rooms.
- As a result, trading account login details and other data inside the servers were taken by a third party, and unauthorized trades caused financial losses ([ITmedia](https://www.itmedia.co.jp/news/article/2610/24/2000002566/), in Japanese). Up to 26,739 servers could be affected ([Nikkei](https://www.nikkei.com/article/DGXZQOUC2155P0R21C26A0000000/), in Japanese). Finance Minister Katayama said five FX brokers had reported damage to their customers. The amount and number of cases have not been disclosed ([Ministry of Finance](https://www.mof.go.jp/public_relations/conference/my20261027.html), in Japanese).

Only after explaining all this can I finally get to "so how does AI come into it?" Unless you go as far as saying AI is rapidly changing how software is built, attacked, and defended, the real weight of this incident doesn't get across. So even if the AI talk at the conference was long, I can't say it was just spinning its wheels.

## What really scares me is North Korea getting its hands on AI

North Korea's involvement has not been confirmed. On November 1, Kyodo News reported, based on people familiar with the matter, that GMO believes it is highly likely a North Korea-linked hacking group is on the attacking side ([Yahoo! News (Kyodo)](https://news.yahoo.co.jp/articles/e93001b1bba67a2c7cbf0f45223c362ef61a4680), in Japanese). The same article also notes that an expert pointed to the possibility of a disguise meant to throw investigators off (a false flag operation). According to TBS, a GMO executive told its reporters that the company is investigating, including the possibility of a link ([TBS NEWS DIG](https://newsdig.tbs.co.jp/articles/-/3054787), in Japanese). On the government side, Chief Cabinet Secretary Kihara said at a press conference on October 20 that it was not yet at a stage where he could say anything definitive ([FNN](https://www.fnn.jp/articles/-/1136322), in Japanese). That remark was an answer about the series of domestic attacks in general, and came before the GMO incident was announced.

In other words, we cannot yet say North Korea is the culprit. And as I wrote above, whether AI was used is also unconfirmed in this case.

So how was the Japanese in the attacker's post-incident messages? My impression is that much of it read as Japanese without any jarring oddness, and I find it hard to believe it was written by AI alone. But what has been reported partly conflicts with my impression. An analysis by Security Taisaku Lab points to "localized breakdowns" in the Japanese on the claim site, such as an unnatural sentence in the part listing recipients, while the part explaining the course of events was a polite, flawless long text. It reads this as suggesting division of writing among several people, or the use of translation and text-generation tools ([Security Taisaku Lab](https://rocket-boys.co.jp/security-measures-lab/gmo-cyberattack-motive-clearweb-multiple-actors-column/), in Japanese). On the Japanese notes found in the site's source code, an IIJ representative said, "These days AI can translate, so we can't immediately tell whether the attacker is someone who uses Japanese" ([Sankei Shimbun](https://www.sankei.com/article/20261030-MEYKWNFP5VKIVHLQ37QUOYMRUA/), in Japanese). Takayuki Sugiura, representative director of the Japan Hackers Association, thinks it is highly likely an amateur with some IT knowledge was working while asking AI ([Kansai TV](https://www.ktv.jp/news/articles/?id=30603), in Japanese). The reality is that the quality of the Japanese alone can't tell us who wrote it or how.

Even so, there is general evidence. On October 29, Microsoft rated the overall level of AI adoption among North Korea-linked threat actors as "high." It says some groups use AI across every stage of their operations. It also writes that AI-enabled operations are still directed by humans and have not become fully autonomous ([Microsoft](https://www.microsoft.com/en-us/security/blog/2026/10/29/tracking-ai-adoption-in-north-korean-threat-actor-tradecraft/)). In its August 2025 report, Anthropic described North Korean operatives using AI to build fake backgrounds and get remote jobs at major US technology companies ([Anthropic](https://www.anthropic.com/news/detecting-countering-misuse-aug-2025)). Microsoft's same report also describes the main purposes of North Korea-linked activity as securing revenue for the regime and collecting strategic information.

From here on, this is my own opinion. North Korea's involvement this time is only a possibility. But I think it could become a serious crisis going forward. North Korea has been a threat as a country for a long time. What scares me more is that they have gotten hold of something that could become a new kind of weapon, AI, and can actually use it. Nuclear weapons are tools for threatening. AI is different. I suspect they would not care at all about causing real harm.

Taking the impression of those messages into account as well, it would not be strange if this were an extension of state-backed espionage, as before. Of course, this is not a confirmed fact. It is my own reading.

## What if, behind the big incident on the surface, something more important was taken?

One more thing, and this too is my speculation. It is not backed by evidence.

The GMO incident is certainly a big one. But I would not be surprised if, behind it, even more important data had been taken. It could well be that data has already been taken from an even more important institution. If this is an extension of state-backed activity, money may be only a part of the goal, and a storyline in which the data they truly wanted was somewhere else is also conceivable.

There is one fact that prompted me to think this way. At the conference, Vice President Yamashita said the attack was confirmed on October 20, when the company looked into a customer inquiry, and that until then they had not noticed. It was also reported that he said, "We take it deeply to heart that we could not notice through the monitoring of the service" ([Reuters](https://topics.smt.docomo.ne.jp/article/reuters/business/reuters-20261102065?fm=latestnews), in Japanese).

In the age of "from pistols to machine guns," the first to notice something was wrong was not the monitoring but a customer's inquiry.

If you can't notice that something was taken, no one can say it wasn't taken.
