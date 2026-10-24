module.exports = {
  title: "Tomo's Diary",
  url: "https://abalol.xyz",
  // ホーム・タグ一覧などで使うサイト説明（meta description / WebSite schema / llms.txt）
  description: "マニラ在住のAIエンジニア・経営者 Tomohiro Owada（大和田知洋）のブログ。RAG・AIエージェント・MCPなどのAI技術と、フィリピン・マニラでの生活（物価、為替、手続き、買い物）について書いています。",
  shortDescription: "マニラ在住AIエンジニアの、AI技術とフィリピン生活のブログ",
  language: "ja",
  locale: "ja_JP",
  author: "Tomohiro Owada",
  // 著者情報（About ページと構造化データ用）。ここにある事実だけを使う
  person: {
    name: "Tomohiro Owada",
    nameJa: "大和田知洋",
    handle: "abalol",
    jobTitle: "AI Engineer & Business Owner",
    jobTitleJa: "AIエンジニア・経営者",
    location: "Manila, Philippines",
    knowsAbout: ["RAG", "AI Agents", "MCP (Model Context Protocol)"],
    company: "pay4word",
    // pay4words.com の会社概要での正式名称
    companyOfficialName: "Forward Corporation",
    companyUrl: "https://pay4words.com",
    image: "/icon-512.png",
    sameAs: ["https://x.com/abalol", "https://github.com/tomohiro-owada"]
  },
  twitter: "@abalol",
  // Google Analytics 4 の測定ID（例: "G-XXXXXXXXXX"）。空なら gtag.js を出力しない
  ga4Id: "",
  // Google Search Console の HTML タグ確認用 content 値。空なら meta を出力しない
  gscVerification: "",
  // ヘッダーのサブタイトル
  tagline: "Manila-based AI Engineer & Business Owner — 技術とフィリピン暮らしのノート",
  // 記事に image がないときに使うヒーロー兼OGP画像
  defaultImage: "/images/og-default.jpg",
  defaultImageAlt: "Tomo's Diary",
  // トップカテゴリー（記事の最初のタグ）
  categories: {
    tech: { label: "Tech", description: "AI・RAG・AIエージェント・開発ツールなど、技術の記事" },
    philippines: { label: "Philippines", description: "フィリピンの物価・為替・経済・暮らしの記事" },
    life: { label: "Life", description: "マニラでの生活、手続き、買い物など日々の記録" }
  },
  // posts コレクション外の単独ページ（sitemap / llms.txt 用）
  standalonePages: [
    {
      url: "/loop_engineering/",
      title: "ループ・エンジニアリング：AIに仕事を上手にまかせる4つのコツ",
      description: "AIに仕事を上手にまかせる4つのコツ（ゴールを伝える・計画をチェックする・危ないことは止める・できたか確かめる）を、部下に仕事を任せる話にたとえて説明したスライドです。手順はスキルに、やってほしくないことはCLAUDE.mdに育てていきます。",
      lastmod: "2026-07-08T08:30:11+08:00"
    },
    {
      url: "/why_loop_engineering_fails/",
      title: "なぜ開発でループエンジニアリングがうまくいかないのか",
      description: "/goal でのループエンジニアリングが開発でうまくいかない理由を、Turn-based・Goal-based・Time-basedの3種類のループと4つのコツ（ゴール・計画・ガードレール・検証）から整理したスライドです。残すべきは「決定したこと」ではなく「判断の基準」だという話です。",
      lastmod: "2026-07-08T10:28:50+08:00"
    }
  ],
  // タグページを index させる最低記事数（これ未満は noindex,follow）
  tagIndexMinPosts: 2
};
