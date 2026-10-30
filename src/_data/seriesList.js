// Multi-part series. A post joins a series with front matter
//   series: pogo
//   seriesPart: 1
// The table of contents (top) and previous/next links (bottom) are drawn by
// src/_includes/series-nav.njk from this list. A part is linked only when a
// published post with that slug exists, so parts that are not published yet
// show as plain text instead of dead links.
module.exports = {
  pogo: {
    title: "POGOとは何だったのか",
    total: 4,
    parts: [
      { part: 1, slug: "pogo-1-china-gambling-ban", label: "POGOはなぜ生まれたか" },
      { part: 2, slug: "pogo-2-chinese-influx", label: "中国人が増えて、何が起きたか" },
      { part: 3, slug: "pogo-3-scam-hubs-money", label: "POGOを名乗った詐欺拠点と、桁違いの金" },
      { part: 4, slug: "pogo-4-after-the-ban", label: "POGOが消えたあとに残ったもの" }
    ]
  }
};
