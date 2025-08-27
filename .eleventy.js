module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("CNAME");
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