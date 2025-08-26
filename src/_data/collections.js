module.exports = {
  tagList: function(collection) {
    const tagSet = new Set();
    collection.getAllSorted().forEach(item => {
      (item.data.tags || []).forEach(tag => {
        if (tag !== "posts") { // "posts"タグを除外
          tagSet.add(tag);
        }
      });
    });
    return [...tagSet].sort();
  }
};