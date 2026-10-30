// Multi-part series. A post joins a series with front matter
//   series: pogo
//   seriesPart: 1
// The table of contents (top) and previous/next links (bottom) are drawn by
// src/_includes/series-nav.njk from this list. A part is linked only when a
// published post with that slug exists, so parts that are not published yet
// show as plain text instead of dead links.
//
// English posts (front matter `lang: en`, under src/en/posts/) use the same slugs
// and the English strings `titleEn` / `labelEn`; their links point to /en/posts/<slug>/.
module.exports = {
  pogo: {
    title: "POGOとは何だったのか",
    titleEn: "POGO series: What Was POGO?",
    total: 4,
    parts: [
      { part: 1, slug: "pogo-1-china-gambling-ban", label: "POGOはなぜ生まれたか", labelEn: "Why POGO Was Born" },
      { part: 2, slug: "pogo-2-chinese-influx", label: "中国人が増えて、何が起きたか", labelEn: "What Happened as More Chinese Arrived" },
      { part: 3, slug: "pogo-3-scam-hubs-money", label: "POGOを名乗った詐欺拠点と、桁違いの金", labelEn: "Scam Hubs Posing as POGO, and Money on Another Scale" },
      { part: 4, slug: "pogo-4-after-the-ban", label: "POGOが消えたあとに残ったもの", labelEn: "What Was Left After POGO Disappeared" }
    ]
  }
};
