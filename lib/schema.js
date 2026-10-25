// JSON-LD (schema.org) builder for Tomo's Diary.
// Returns a single @graph so every page describes WebSite + Person + the page itself.
const site = require("../src/_data/site.js");

const abs = (p) => (!p ? p : /^https?:\/\//.test(p) ? p : site.url.replace(/\/$/, "") + (p.startsWith("/") ? p : "/" + p));
const iso = (d) => (d ? new Date(d).toISOString() : undefined);
const realTags = (tags) => (tags || []).filter((t) => t !== "posts");
const slug = (s) => String(s).toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");

const IDS = {
  website: abs("/") + "#website",
  person: abs("/about/") + "#person",
};

function personNode(lang) {
  const p = site.person;
  const description = lang === "en"
    ? `${p.jobTitle} based in ${p.location}, working on ${p.knowsAbout.join(", ")}.`
    : `${p.jobTitleJa}（${p.location}）。${p.knowsAbout.join("・")}に取り組んでいます。`;
  return {
    "@type": "Person",
    "@id": IDS.person,
    name: p.name,
    alternateName: [p.nameJa, p.handle],
    jobTitle: p.jobTitle,
    description,
    knowsAbout: p.knowsAbout,
    worksFor: { "@type": "Organization", name: p.companyOfficialName || p.company, alternateName: p.companyOfficialName ? p.company : undefined, url: p.companyUrl },
    homeLocation: { "@type": "Place", name: p.location },
    image: abs(p.image),
    url: abs("/about/"),
    sameAs: p.sameAs,
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: abs("/"),
    name: site.title,
    description: site.description,
    inLanguage: site.language,
    author: { "@id": IDS.person },
    publisher: { "@id": IDS.person },
  };
}

function breadcrumb(url, items) {
  return {
    "@type": "BreadcrumbList",
    "@id": abs(url) + "#breadcrumb",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: abs(it.url) })),
  };
}

function itemList(url, posts) {
  return {
    "@type": "ItemList",
    "@id": abs(url) + "#itemlist",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(post.url),
      name: post.data.title,
    })),
  };
}

function blogPosting(o, lang) {
  const tags = realTags(o.tags);
  const image = abs(o.image || site.defaultImage);
  return {
    "@type": "BlogPosting",
    "@id": abs(o.url) + "#article",
    headline: o.title,
    description: o.description,
    image: o.image ? { "@type": "ImageObject", url: image, width: 1200, height: 630, caption: o.imageAlt || o.title } : image,
    datePublished: iso(o.date),
    dateModified: iso(o.updated || o.date),
    author: { "@id": IDS.person },
    publisher: { "@id": IDS.person },
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(o.url), breadcrumb: { "@id": abs(o.url) + "#breadcrumb" } },
    isPartOf: { "@id": IDS.website },
    articleSection: tags[0],
    keywords: tags,
    inLanguage: lang,
    translationOfWork: o.translationOf ? { "@id": abs(o.translationOf) + "#article" } : undefined,
  };
}

/**
 * o: { type: "home"|"post"|"tag"|"tags"|"about"|"page", url, title, description, image, imageAlt,
 *      date, updated, tags, tag, posts }
 */
function build(o) {
  const lang = o.lang === "en" ? "en" : site.language;
  const home = lang === "en" ? "/en/" : "/";
  const prefix = lang === "en" ? "/en" : "";
  const graph = [websiteNode(), personNode(lang)];
  const url = o.url || "/";
  if (o.type === "home") {
    graph.push({
      "@type": "CollectionPage",
      "@id": abs(url) + "#webpage",
      url: abs(url),
      name: o.title,
      description: o.description,
      inLanguage: lang,
      isPartOf: { "@id": IDS.website },
      about: { "@id": IDS.person },
      mainEntity: { "@id": abs(url) + "#itemlist" },
    });
    graph.push(itemList(url, o.posts || []));
  } else if (o.type === "post") {
    graph.push(blogPosting(o, lang));
    const tags = realTags(o.tags);
    const crumbs = [{ name: site.title, url: home }];
    if (tags[0]) crumbs.push({ name: "#" + tags[0], url: `${prefix}/tags/${slug(tags[0])}/` });
    crumbs.push({ name: o.title, url });
    graph.push(breadcrumb(url, crumbs));
  } else if (o.type === "tag") {
    graph.push({
      "@type": "CollectionPage",
      "@id": abs(url) + "#webpage",
      url: abs(url),
      name: o.title,
      description: o.description,
      inLanguage: lang,
      isPartOf: { "@id": IDS.website },
      breadcrumb: { "@id": abs(url) + "#breadcrumb" },
      mainEntity: { "@id": abs(url) + "#itemlist" },
    });
    graph.push(itemList(url, o.posts || []));
    graph.push(breadcrumb(url, [{ name: site.title, url: home }, { name: lang === "en" ? "Tags" : "タグ", url: `${prefix}/tags/` }, { name: "#" + o.tag, url }]));
  } else if (o.type === "about") {
    graph.push({
      "@type": "ProfilePage",
      "@id": abs(url) + "#webpage",
      url: abs(url),
      name: o.title,
      description: o.description,
      inLanguage: lang,
      isPartOf: { "@id": IDS.website },
      mainEntity: { "@id": IDS.person },
      breadcrumb: { "@id": abs(url) + "#breadcrumb" },
    });
    graph.push(breadcrumb(url, [{ name: site.title, url: home }, { name: o.title, url }]));
  } else {
    graph.push({
      "@type": "WebPage",
      "@id": abs(url) + "#webpage",
      url: abs(url),
      name: o.title,
      description: o.description,
      inLanguage: lang,
      isPartOf: { "@id": IDS.website },
    });
  }
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
  // never let content close the <script> element
  return json.replace(/</g, "\\u003c");
}

module.exports = { build, abs, iso, realTags };
