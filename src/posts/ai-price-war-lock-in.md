---
title: "AIの値下げ戦争、定価はみんな2ドルだった。値引きの条件は「OpenCodeを使うな」？"
date: 2026-10-25T08:50:00+08:00
description: "OpenAIが値下げでAnthropicからコーディングの仕事を奪っています。ただ定価はどこも100万トークンあたり2ドル。本当の戦いは非公開の値引きと、そこに付いてくる道具の縛り、そして常駐エージェントです。モデルはコストと速さと質で選べと言い続けてきた立場から書きました。"
tags:
  - tech
  - ai
  - openai
  - anthropic
image: /images/posts/ai-price-war-lock-in/hero.png
imageAlt: "クリーム色の背景に「AIの値下げ戦争、定価はみんな2ドルだった。値引きの条件は『OpenCodeを使うな』？」というタイトルと、南京錠の付いた値札、コード画面、チョークを持つ手の線画"
---

AIの値下げ戦争が企業の現場で本格的に始まりました。ただ、定価を並べるとどこも100万トークンあたり2ドルで、ほとんど差がありません。本当の戦いは表に出ない値引きと、その値引きに付いてくる「道具の縛り」のほうにあると私は見ています。

## Rippling は5か月で OpenAI に乗り換えた

米国のテック系メディア The Information が10月24日に[報じた記事](https://www.theinformation.com/articles/anthropics-margin-openais-opportunity)によると、人事ソフトの Rippling では、数百人のエンジニアのコーディング作業のうち、5月は Anthropic のモデルが57%、OpenAI が16%を担っていました。今は OpenAI が52%、Anthropic が18%と逆転しています。CEOの Parker Conrad 氏は、コストを下げたかったことと、OpenAI のほうが安かったことを理由に挙げています（[記事の無料部分](https://www.benzinga.com/content/62577789/anthropic-s-margin-openai-s-opportunity)）。

ブラウザでアプリを作れる Replit も、年1億ドルを超える契約で OpenAI から30%以上の値引きを受け、AIへの支出の大半を移したと[報じられています](https://www.techmeme.com/261024/p8)。CEOの Amjad Masad 氏は OpenAI を自社のAIエージェントの「優先パートナー」にした理由を、性能とコストと提携の強さだと[Xで説明しています](https://x.com/amasad/status/2111494912562888939)。Claude も引き続き選べます。

## 定価はどこも2ドルだった

では OpenAI はどれだけ安いのか。API（プログラムからAIを呼び出す仕組み）の定価を並べると、拍子抜けします。

- OpenAI の GPT-6.1 Sol：入力2ドル、出力10ドル（[公式](https://openai.com/index/introducing-gpt-6-1-sol/)）
- Anthropic の Claude Sonnet 5.5：入力2ドル、出力10ドル（[公式](https://platform.claude.com/docs/en/about-claude/pricing)）
- Moonshot の Kimi K3.1 Pro：入力2ドル、出力10ドル（[Artificial Analysis 調べ](https://x.com/ArtificialAnlys/status/2113688083145314416)）

どれもトークン（AIが文章を数える単位）100万あたりの値段です。円なら入力約314円・出力約1,568円、ペソなら約127ペソ・約636ペソで、まったく同じです。

モデルそのものでは、もう差がつきにくくなりました。今はどのAIもターミナル（コマンドを打ち込む画面）を操作でき、VM（仮想マシン）を持ち、クラウドでエージェントを動かしています。判断や分類だけに絞ったDecision Model（決定モデル）も出てきました。Microsoft の [Decision-1](https://commandline.microsoft.com/microsoft-decision-1-model-foundry/) は入力100万トークンで0.042ドル、出力は無料です。手元で動く安いLLM（大規模言語モデル）も、実用的な質と速さで答えを返します。これで値下げ戦争にならないわけがありません。

ソフトウェア開発なら、今の Opus や Sol で十分です。Mythos のような最上位モデルにお金を払い続ける必要はありません。私が [opencode で使っている無料の Muse](/posts/presyo-bantay/) でも足ります。では、その先に私たちは何を求めるのでしょうか。

## 値引きには条件が付いていた

定価が横並びなら、勝負は表に出ない値引きです。The Information の記事では、オンライン学習の DataCamp にも OpenAI から値引きの提案が来ていました。同誌の Amir Efrati 氏が [Xに載せた記事の画像](https://x.com/amir/status/2114028199567118499)には、「OpenCode や Claude Code のような競合ツールではなく、Codex を使う」という一文が写っています。画像は文の途中から切れていますが、Codex（OpenAI のコーディング用AIツール）を使うことが値引きの条件だったようです。OpenCode はオープンソースの、Claude Code は Anthropic のコーディング用AIツールです。DataCamp のCEOは「コストが80〜90%下がる」と話しています。

モデルだけでは客をつなぎ止められないので、各社は仕組みで囲い込みにきています。OpenAI なら、Codex と組み合わせてコードの脆弱性を探し、修正案まで用意する [Daybreak](https://openai.com/daybreak/) があり、守る側の組織向けに10億ドル分の利用補助まで出しています。Anthropic なら Claude Code や、[前回書いた](/posts/agent-skills-donation/) Agent Skills のような仕組みです。

いちばん強い縛りはその先にあります。OpenAI の [Dots](https://openai.com/index/introducing-dots/)（クラウド上で24時間動き続ける自律エージェント）や、Anthropic の [Claude Duet](https://www.theverge.com/ai-artificial-intelligence/1015843/anthropic-claude-duet-ai-agent)（毎朝の要点報告と裏での作業をこなすエージェント）、Grok Bot のような常駐型のAIです。私の文脈を覚えて、私の代わりに動いてくれます。こういう常駐自律型は、一度体験するともう離れるのは難しいです。

## コストと速さと質で選べ

私はずっと、モデルはコストと速さと質で選べと言い続けています。道具を縛る値引きを受ければ、その3つで選び直す自由を手放すことになります。

と偉そうに書きましたが、この記事は値引きの条件で「使わないで」と名指しされた OpenCode に無料の Muse をつないで書いています。常駐エージェントからは私もたぶん離れられませんが、モデルだけは今日も無料で選んでいます。
