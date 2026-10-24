---
title: "AIのスキルは手順書か、プロの振る舞いか。Agent Skills寄贈で考えたこと"
date: 2026-10-24T20:05:00+08:00
description: "AnthropicがAgent SkillsをLinux Foundation傘下のAAIFに寄贈しました。善意だけのわけはなく、スキルが資産とも限りません。ただ、スキルを手順書として読むか、プロの振る舞いとして読むかで答えは変わると考えています。"
tags:
  - tech
  - ai
  - agent-skills
image: /images/posts/agent-skills-donation/hero.png
imageAlt: "クリーム色の背景に「AIのスキルは手順書か、プロの振る舞いか。Agent Skills寄贈で考えたこと」というタイトルと、チェックリストの入ったフォルダ、コードエディタ、チョークを持つ手の線画"
---

AIに仕事のやり方を教える規格「Agent Skills」を、Anthropic（Claudeを開発している会社）が業界の財団に寄贈しました。善意だけでなく、戦略もあるはずです。そして、スキルが資産かと聞かれても、私はすぐには「はい」と言えません。ただ、スキルを手順書として読むか、プロの振る舞いとして読むかで、答えは変わると考えています。

## Agent Skills が財団に移った

Anthropicは10月22日、Agent Skillsを Agentic AI Foundation（AAIF）に寄贈したと[発表しました](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)。AAIFはLinuxなどのオープンソースを支える非営利団体 Linux Foundation の傘下にある財団です。寄贈したのは規格そのものと、名前とロゴ、GitHubの組織、agentskills.io のドメインです。

AAIFは2025年12月に、Anthropic、Block、OpenAIの3社が中心になって[立ち上げました](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation)。最初のプロジェクトはAIと外部のツールやデータをつなぐ規格のMCP（Model Context Protocol）、Blockの goose、OpenAIの AGENTS.md の3つでした。同じ日にOpenAI、Hugging Face、Alibabaもそれぞれプロジェクトを寄贈し、AAIFのプロジェクトは[10件になりました](https://aaif.io/news/agentic-ai-foundation-announces-four-new-projects)。

Anthropicの開発者向けアカウント ClaudeDevs の[投稿](https://x.com/ClaudeDevs/status/2113328528536305718)によると、今後は Anthropic、Earendil（Pi）、Google、Microsoft、OpenAI、OpenCode のエンジニアによる技術運営委員会で運営されます。OpenCode は、私が毎日コードを書かせている opencode を作っているところです。

## スキルの中身はフォルダとMarkdown

[仕様](https://agentskills.io/specification)を見ると、スキルの作りはかなり素朴です。1つのスキルは1つのフォルダで、その中に SKILL.md というMarkdownファイルを置きます。ファイルの先頭にはfrontmatter（ファイル冒頭に書く設定情報）があり、`name`（名前）と `description`（何をするスキルで、いつ使うか）の2つが必須です。

AIはまず全部のスキルの名前と説明だけを読み込み、使うと決めたときに本文を、必要になったときに添付のスクリプトや資料を読みます。最初に読む量はスキル1つあたり100トークンほど（トークンはAIが文章を数える単位）です。

Anthropicによると、Agent Skills はClaude Code（Anthropicのコーディング用AI）を作る中で生まれました。2025年10月に公開し、12月にオープンな規格として切り出しています。今では ChatGPT や Cursor、GitHub Copilot、VS Code など70以上のサービスが対応し、公開されたスキルは100万件、インストールは約2億8千万回だそうです。Claude Codeの生みの親である Boris Cherny さんも、「Claude Code の実験から始まった」と[書いています](https://x.com/bcherny/status/2113333859907747871)。

## 善意だけのわけがない

なぜ手放したのか。今の彼らに善意があったとしても、戦略がないわけがない、と私は思っています。

Anthropicは6月1日に、IPO（株式の新規上場）に向けた届出書の草案を、SEC（米国証券取引委員会）に非公開で[提出しています](https://www.anthropic.com/news/confidential-draft-s1-sec)。11月中旬の上場を目指しているとも[報じられています](https://www.ifre.com/equities/2499407/anthropic-pushes-ahead-with-mid-november-ipo)。そういう時期に、広く使われている規格を自社の外に出したわけです。何を狙っているのかまでは分かりませんが、偶然のタイミングだとも思いません。

## スキルは資産なのか

では、使う側にとってスキルは資産なのか。正直、難しいところです。スキル自体のメンテナンスが必要なので、必ずしも資産とは言えません。モデルの進化で要らなくなるものもあります。

## 手順書として読むか、プロの振る舞いとして読むか

ここで、スキルを手順書として読むか、プロの振る舞いとして読むかで、話が分かれると気づきました。

手順書として読むと、スキルは「この作業はこのコマンドで、この順番でやる」という知識です。これはモデルが賢くなるほど、書かなくても自分でできるようになります。いずれ要らなくなるのは、こちらのスキルです。

プロの振る舞いとして読むと、スキルは「何を大事にするか」「何を絶対にしないか」という判断の集まりになります。これは、その人や状況に固有のものなので、モデルがいくら進化しても自分では知りようがありません。そして、振る舞いは人や状況が変われば変わるものです。メンテナンスが要るのは欠点ではなく、当たり前のことになります。

## この記事を見張っていたスキル

実はこのブログの記事も、AIがスキルを使ってチェックしています。`blog-post-review` という40行ほどの SKILL.md で、先頭には `name` と `description` があり、Agent Skills の仕様と同じ形です。

ただ、中身に手順らしい手順はほとんどありません。書いてあるのは「『結論から言うと』と書かない」「勤務先の名前を出さない」「最後は本当のオチで終える」といった、私のルールばかりです。どれも、私がAIの書いた記事にダメを出した点です。

この記事も公開する前にそのスキルを通っています。冒頭に「結論から言うと」がなく、最後にこうしてオチを付けているのも、そのスキルに書いてあるからです。どれだけ賢いモデルが出てきても、私が「結論から言うと」を嫌いなことまでは、自分では覚えてくれません。
