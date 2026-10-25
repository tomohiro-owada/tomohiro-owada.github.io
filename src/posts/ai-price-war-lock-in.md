---
title: "定価2ドルのAI値下げ戦争、なのに私は月400ドル払っている"
date: 2026-10-25T09:00:00+08:00
description: "定価はどこも100万トークンあたり2ドル。モデルで差がつかなくなったAI各社は、条件付きの値引きと常駐エージェントで客を囲い込みにきています。1社に縛られないようにAIを方角で使い分けてきた私の、毎月の支払いの話です。"
tags:
  - tech
  - ai
  - openai
  - anthropic
image: /images/posts/ai-price-war-lock-in/hero.png
imageAlt: "クリーム色の背景に「定価2ドルのAI値下げ戦争、なのに私は月400ドル払っている」というタイトルと、南京錠の付いた値札、コード画面、チョークを持つ手の線画"
---

AIの値下げ戦争で、モデルそのものの差はほとんどなくなりました。そこで各社は条件付きの値引きや常駐エージェントで客を囲い込もうとしています。囲い込まれないように工夫してきた私も、どうやら他人事ではありませんでした。

## Rippling は5月から OpenAI に乗り換えた

米国のテック系メディア The Information が10月24日に[報じた記事](https://www.theinformation.com/articles/anthropics-margin-openais-opportunity)によると、人事ソフトの Rippling では、エンジニアのコーディング作業のうち、5月は Anthropic のモデルが57%、OpenAI が16%を担っていました。今は OpenAI が52%、Anthropic が18%と逆転しています。CEOの Parker Conrad 氏は、OpenAI のほうが安かったことを理由に挙げています（[記事の無料部分](https://www.benzinga.com/content/62577789/anthropic-s-margin-openai-s-opportunity)）。

ブラウザでアプリを作れる Replit も、OpenAI から30%以上の値引きを受けて、AIへの支出の大半を移したと[報じられています](https://www.techmeme.com/261024/p8)。

## 定価はどこも2ドル

API（プログラムからAIを呼び出す仕組み）の定価を並べると、拍子抜けします。

- OpenAI の GPT-6.1 Sol：入力2ドル、出力10ドル（[公式](https://openai.com/index/introducing-gpt-6-1-sol/)）
- Anthropic の Claude Sonnet 5.5：入力2ドル、出力10ドル（[公式](https://platform.claude.com/docs/en/about-claude/pricing)）
- Moonshot の Kimi K3.1 Pro：入力2ドル、出力10ドル（[Artificial Analysis 調べ](https://x.com/ArtificialAnlys/status/2113688083145314416)）

どれもトークン（AIが文章を数える単位）100万あたりの値段です。円なら入力約314円・出力約1,568円、ペソなら約127ペソ・約636ペソで、まったく同じです。

今はどのAIもターミナル（コマンドを打ち込む画面）を操作でき、VM（仮想マシン）を持ち、クラウドでエージェントを動かしています。判断や分類だけに絞ったDecision Model（決定モデル）も出てきました。Microsoft の [Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/) は入力100万トークンで0.042ドル、出力は無料です。手元で動く安いLLM（大規模言語モデル）も、実用的な質と速さで答えを返します。

ソフトウェア開発なら、今の Opus や Sol で十分です。Mythos のような最上位モデルにお金を払い続ける必要はありません。[無料の Muse](/posts/presyo-bantay/) でも足ります。

## モデルの代わりに、条件と仕組みで囲い込む

モデルだけでは客をつなぎ止められないので、各社は別の手で囲い込みにきています。

ひとつは条件付きの値引きです。The Information の記事では、オンライン学習の DataCamp にも OpenAI から値引きの提案が来ていました。同誌の Amir Efrati 氏が [Xに載せた記事の画像](https://x.com/amir/status/2114028199567118499)には、「OpenCode や Claude Code のような競合ツールではなく、Codex を使う」という一文が写っています。画像は文の途中から切れていますが、Codex（OpenAI のコーディング用AIツール）を使うことが値引きの条件だったようです。

もうひとつは仕組みです。OpenAI は Codex と組み合わせてコードの脆弱性を探し、修正案まで用意する [Daybreak](https://openai.com/daybreak/) を出しました。常駐型のAIでも、OpenAI の [Dots](https://openai.com/index/introducing-dots/)（クラウド上で24時間動き続ける自律エージェント）や、Anthropic の [Claude Duet](https://www.theverge.com/ai-artificial-intelligence/1015843/anthropic-claude-duet-ai-agent)（毎朝の要点報告と裏での作業をこなすエージェント）が出てきました。

## 私は方角で使い分けている

1社に縛られないように、私は仕事の向きでAIを分けています。

- 内側からのアクション（Slackやメール）：OpenAI の Dots
- つくる仕事（コードを書かせる、ドキュメントをつくる）：Claude
- 外側の動向からのアクション（Xやニュース）：Grok Bot

全部の方角で勝つAIはありません。DataCamp の例のような条件付きの値引きは、方角をひとつ丸ごと1社に明け渡させるものです。

## コストと速さと質で選んだ結果

私はずっと、モデルはコストと速さと質で選べと言ってきました。エージェントも役割ごとにその3つで選べば、1社に囲い込まれずに済むはずでした。

ところが、常駐エージェントはどれも一度体験すると離れられません。1社に囲い込まれないように分けた結果、3社まとめて囲い込まれました。

支払いは Claude の Max プランが月200ドル、Grok と OpenAI が100ドルずつです。定価2ドルの値下げ戦争のさなか、私は3社に毎月400ドル（約6万2,700円、約2万5,500ペソ）を払い続けています。
