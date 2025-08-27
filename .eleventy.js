const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("CNAME");
  
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
  
  // Add date filter
  eleventyConfig.addFilter("date", (date, format) => {
    const d = new Date(date);
    if (format === "%Y-%m-%d") {
      return d.toISOString().split('T')[0];
    } else if (format === "%Y年%m月%d日") {
      return `${d.getFullYear()}年${(d.getMonth() + 1).toString().padStart(2, '0')}月${d.getDate().toString().padStart(2, '0')}日`;
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
  eleventyConfig.addFilter("getDate", (post) => post.date);
  
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
  
  // Create tag list collection
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => {
        if (tag !== "posts") {
          tagSet.add(tag);
        }
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