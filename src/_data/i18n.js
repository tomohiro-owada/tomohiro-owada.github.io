// UI strings per language. Japanese ("ja") is the default and lives at the
// existing URLs; English ("en") lives under /en/. Pages set `lang: en`
// (src/en/en.json does it for everything under src/en/).
const site = require("./site.js");

module.exports = {
  ja: {
    code: "ja",
    htmlLang: "ja",
    locale: "ja_JP",
    prefix: "",
    langName: "日本語",
    shortDescription: site.shortDescription,
    description: site.description,
    tagline: site.tagline,
    categoryDescriptions: {
      tech: site.categories.tech.description,
      philippines: site.categories.philippines.description,
      life: site.categories.life.description
    },
    switchLabel: "言語",
    footerNav: "サイト",
    footerAbout: "About（著者について）",
    footerTags: "タグ一覧",
    categoryNav: "カテゴリー",
    allTags: "すべてのタグ →",
    allTagsLink: "すべてのタグを見る →",
    published: "公開",
    updated: "更新",
    authorBoxLabel: "この記事を書いた人",
    related: "関連記事",
    linkCopied: "リンクをコピーしました",
    share: {
      heading: "この記事をシェア",
      x: "ポスト", xSr: "（Xで共有・新しいタブ）",
      fb: "シェア", fbSr: "（Facebookで共有・新しいタブ）",
      line: "LINE", lineSr: "で送る（新しいタブ）",
      hatena: "はてブ", hatenaSr: "（はてなブックマークに追加・新しいタブ）",
      threads: "Threads", threadsSr: "でシェア（新しいタブ）",
      copy: "リンクをコピー",
      native: "その他", nativeSr: "のアプリで共有"
    }
  },
  en: {
    code: "en",
    htmlLang: "en",
    locale: "en_US",
    prefix: "/en",
    langName: "English",
    shortDescription: "AI tech and life in the Philippines from a Manila-based AI engineer",
    description: "The blog of Tomohiro Owada, an AI engineer and business owner based in Manila. I write about AI tech such as RAG, AI agents and MCP (Model Context Protocol), and about everyday life in Manila, the Philippines: prices, exchange rates, paperwork and shopping.",
    tagline: "Manila-based AI Engineer & Business Owner — Notes on tech and life in the Philippines",
    categoryDescriptions: {
      tech: "Posts about AI, RAG, AI agents and developer tools",
      philippines: "Posts about prices, the peso, the economy and daily life in the Philippines",
      life: "Notes on life in Manila: paperwork, shopping and everyday things"
    },
    switchLabel: "Language",
    footerNav: "Site",
    footerAbout: "About the author",
    footerTags: "All tags",
    categoryNav: "Categories",
    allTags: "All tags →",
    allTagsLink: "See all tags →",
    published: "Published",
    updated: "Updated",
    authorBoxLabel: "About the author",
    related: "Related posts",
    linkCopied: "Link copied",
    share: {
      heading: "Share this post",
      x: "Post", xSr: " (share on X, opens in a new tab)",
      fb: "Share", fbSr: " (share on Facebook, opens in a new tab)",
      line: "LINE", lineSr: " (send via LINE, opens in a new tab)",
      hatena: "Hatena", hatenaSr: " (add to Hatena Bookmark, opens in a new tab)",
      threads: "Threads", threadsSr: " (share on Threads, opens in a new tab)",
      copy: "Copy link",
      native: "More", nativeSr: " (share with another app)"
    }
  }
};
