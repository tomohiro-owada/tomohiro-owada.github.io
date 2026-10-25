const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("CNAME");
  // favicon / app icons (X @abalol profile image) -> site root
  eleventyConfig.addPassthroughCopy({ "favicon": "/" });
  
  // Image optimization shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", async function(src, alt, sizes) {
    // 元画像のサイズに基づいて適切な幅を生成
    let metadata = await Image(src, {
      widths: [200, 400, 800, 1200, 1600, "auto"],
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/",
      sharpOptions: {
        animated: true
      }
    });

    let imageAttributes = {
      alt,
      sizes: sizes || "(max-width: 400px) 100vw, (max-width: 800px) 80vw, 800px",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
  
  // Responsive image shortcode with custom sizes
  eleventyConfig.addNunjucksAsyncShortcode("responsiveImage", async function(src, alt, widths, sizes) {
    let widthArray = widths ? widths.split(",").map(w => parseInt(w)) : [200, 400, 800, 1200, 1600];
    widthArray.push("auto"); // 元のサイズも含める
    
    let metadata = await Image(src, {
      widths: widthArray,
      formats: ["webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/",
      sharpOptions: {
        animated: true
      }
    });

    let imageAttributes = {
      alt,
      sizes: sizes || "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px",
      loading: "lazy",
      decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes);
  });
  
  // Keep original images for markdown compatibility
  eleventyConfig.addPassthroughCopy("images");
  
  // 絶対URLにする（http(s)で始まるものはそのまま）
  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    if (!path) return path;
    const str = String(path);
    if (/^https?:\/\//.test(str)) return str;
    return base.replace(/\/$/, "") + (str.startsWith("/") ? str : "/" + str);
  });


  // ===== SEO / AIO helpers =====
  const schema = require("./lib/schema.js");
  const fs = require("fs");

  // JSON-LD @graph for the current page (see lib/schema.js)
  eleventyConfig.addFilter("jsonLd", (opts) => schema.build(opts || {}));

  // ISO 8601 (for article:published_time, sitemap lastmod, JSON-LD)
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString());

  // Latest date among posts (updated or date)
  eleventyConfig.addFilter("latestDate", (posts) => {
    let max = 0;
    (posts || []).forEach((p) => {
      const t = new Date(p.data.updated || p.date).getTime();
      if (t > max) max = t;
    });
    return new Date(max || Date.now());
  });

  // Related posts by shared tags (top categories count less than specific tags)
  eleventyConfig.addFilter("relatedPosts", (posts, url, tags, n = 3) => {
    const cats = ["tech", "philippines", "life"];
    const mine = new Set((tags || []).filter((t) => t !== "posts"));
    return (posts || [])
      .filter((p) => p.url !== url)
      .map((p) => {
        let score = 0;
        (p.data.tags || []).forEach((t) => {
          if (t !== "posts" && mine.has(t)) score += cats.includes(t) ? 1 : 3;
        });
        return { p, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || b.p.date - a.p.date)
      .slice(0, n)
      .map((x) => x.p);
  });

  // Raw Markdown body of a post (front matter stripped) for llms-full.txt
  eleventyConfig.addFilter("rawMarkdown", (inputPath) => {
    const src = fs.readFileSync(inputPath, "utf8");
    return src.replace(/^---[\s\S]*?\n---\s*\n/, "").trim();
  });

  // Make root-relative href/src absolute (for feeds)
  eleventyConfig.addFilter("absoluteHtml", (html, base) =>
    String(html || "").replace(/(href|src)="\/(?!\/)/g, `$1="${base.replace(/\/$/, "")}/`)
  );

  // Safe inside CDATA
  eleventyConfig.addFilter("cdata", (s) => String(s || "").replace(/]]>/g, "]]]]><![CDATA[>"));

  // Count of real tags helper
  eleventyConfig.addFilter("realTags", (tags) => (tags || []).filter((t) => t !== "posts"));

  // Add date filter
  eleventyConfig.addFilter("date", (date, format) => {
    const d = new Date(date);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    } else if (format === "%Y年%m月%d日") {
      return `${d.getFullYear()}年${(d.getMonth() + 1).toString().padStart(2, '0')}月${d.getDate().toString().padStart(2, '0')}日`;
    } else if (format === "en") {
      // "October 24, 2026" (same local-time basis as the Japanese format)
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    } else if (format === "%d日") {
      return `${d.getDate().toString().padStart(2, '0')}日`;
    }
    return d.toLocaleDateString();
  });
  
  // RSS date filter
  eleventyConfig.addFilter("rssDate", (date) => {
    return new Date(date).toUTCString();
  });
  
  // Get date helper
  eleventyConfig.addFilter("getDate", (post) => (post ? post.date : new Date()));
  
  // Limit filter
  eleventyConfig.addFilter("limit", (array, n) => array.slice(0, n));
  
  // Strip tags filter
  eleventyConfig.addFilter("striptags", (str) => {
    return str.replace(/<[^>]*>/g, '');
  });
  
  // Truncate filter
  eleventyConfig.addFilter("truncate", (str, length) => {
    if (str.length > length) {
      return str.substring(0, length) + '...';
    }
    return str;
  });
  
  // Add slug filter for URLs
  eleventyConfig.addFilter("slug", (str) => {
    return str.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  });
  
  // ===== i18n (Japanese default at existing URLs, English under /en/) =====
  const isEn = (item) => item.data && item.data.lang === "en";

  // Keep only items of one language ("ja" = everything that is not English)
  eleventyConfig.addFilter("langOnly", (items, lang) =>
    (items || []).filter((item) => (lang === "en" ? isEn(item) : !isEn(item)))
  );

  // Counterpart URLs for a page: { ja, en } when both versions exist, else null.
  // /en/<path> <-> /<path>; existence is checked against collections.all.
  const urlSets = new WeakMap();
  eleventyConfig.addFilter("i18nAlternates", (url, all) => {
    if (!url || !all) return null;
    let urls = urlSets.get(all);
    if (!urls) {
      urls = new Set(all.map((item) => item.url));
      urlSets.set(all, urls);
    }
    const str = String(url);
    const ja = str.startsWith("/en/") ? str.slice(3) : str;
    const en = str.startsWith("/en/") ? str : "/en" + str;
    return urls.has(ja) && urls.has(en) ? { ja, en } : null;
  });

  // English posts (src/en/posts/*.md); collections.posts stays Japanese-only
  eleventyConfig.addCollection("postsEn", (collectionApi) =>
    collectionApi.getFilteredByGlob("./src/en/posts/*.md")
  );

  // Create tag list collection (Japanese pages only)
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().filter(item => !isEn(item)).forEach(item => {
      (item.data.tags || []).forEach(tag => {
        if (tag !== "posts") {
          tagSet.add(tag);
        }
      });
    });
    return [...tagSet].sort();
  });

  // Tags used by English posts (for /en/tags/<tag>/)
  eleventyConfig.addCollection("tagListEn", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getFilteredByGlob("./src/en/posts/*.md").forEach(item => {
      (item.data.tags || []).forEach(tag => {
        if (tag !== "posts") tagSet.add(tag);
      });
    });
    return [...tagSet].sort();
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};