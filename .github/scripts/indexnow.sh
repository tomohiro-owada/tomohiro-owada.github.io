#!/usr/bin/env bash
# Submit changed URLs to IndexNow (https://www.indexnow.org/documentation).
# Usage: indexnow.sh <before-sha> <after-sha>   (run from the repo root, after the Pages deploy)
# Never fails the workflow: every problem is logged as a warning and exits 0.
set -uo pipefail

BEFORE="${1:-}"
AFTER="${2:-HEAD}"
HOST="abalol.xyz"
BASE="https://${HOST}"
ENDPOINT="${INDEXNOW_ENDPOINT:-https://api.indexnow.org/indexnow}"

warn() { echo "::warning::IndexNow: $*"; }

# The key is the file name of indexnow/<key>.txt (published at /<key>.txt by Eleventy passthrough)
KEYFILE=$(ls indexnow/*.txt 2>/dev/null | head -n1 || true)
if [ -z "$KEYFILE" ]; then warn "no key file in indexnow/, skipping"; exit 0; fi
KEY=$(basename "$KEYFILE" .txt)
KEYLOCATION="${BASE}/${KEY}.txt"

URLS=$(mktemp)
all_sitemap_urls() {
  echo "Submitting all sitemap URLs"
  curl -fsS --retry 3 --max-time 30 "${BASE}/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed -e 's/<loc>//' -e 's#</loc>##' >> "$URLS" \
    || warn "could not fetch sitemap"
}

CHANGED=""
if [ -n "$BEFORE" ] && ! echo "$BEFORE" | grep -qE '^0+$' && git cat-file -e "${BEFORE}^{commit}" 2>/dev/null; then
  CHANGED=$(git diff --name-only "$BEFORE" "$AFTER" 2>/dev/null || echo "__DIFF_FAILED__")
else
  CHANGED="__DIFF_FAILED__"
fi

if [ "$CHANGED" = "__DIFF_FAILED__" ]; then
  all_sitemap_urls
elif echo "$CHANGED" | grep -qE '^(src/_includes/|src/_data/|lib/|\.eleventy\.js$|css/|indexnow/|src/[^/]+\.(njk|html)$|src/en/[^/]+\.njk$)'; then
  # Templates, styles or site data changed: every page may have changed
  all_sitemap_urls
else
  echo "Submitting changed posts + home pages"
  echo "${BASE}/" >> "$URLS"
  echo "${BASE}/en/" >> "$URLS"
  # src/posts/<slug>.md -> /posts/<slug>/ (+ .md);  src/en/posts/<slug>.md -> /en/posts/<slug>/ (+ .md)
  echo "$CHANGED" | sed -nE \
    -e 's#^src/posts/([^/]+)\.md$#'"${BASE}"'/posts/\1/\n'"${BASE}"'/posts/\1.md#p' \
    -e 's#^src/en/posts/([^/]+)\.md$#'"${BASE}"'/en/posts/\1/\n'"${BASE}"'/en/posts/\1.md#p' >> "$URLS"
fi

# de-duplicate, drop blanks, IndexNow accepts at most 10,000 URLs per request
sort -u "$URLS" | grep -E "^${BASE}/" | head -n 10000 > "${URLS}.u" || true
COUNT=$(wc -l < "${URLS}.u" | tr -d ' ')
if [ "$COUNT" -eq 0 ]; then warn "no URLs to submit"; exit 0; fi

# JSON body (URLs contain only [A-Za-z0-9-_./:], so no escaping needed)
LIST=$(sed 's/.*/"&"/' "${URLS}.u" | paste -sd, -)
BODY="{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"${KEYLOCATION}\",\"urlList\":[${LIST}]}"

echo "Submitting ${COUNT} URL(s) to IndexNow:"; cat "${URLS}.u"
CODE=$(curl -sS -o /tmp/indexnow.out -w '%{http_code}' --max-time 30 --retry 2 \
  -X POST "$ENDPOINT" -H 'Content-Type: application/json; charset=utf-8' --data "$BODY" || true)
echo "IndexNow responded HTTP ${CODE}"; cat /tmp/indexnow.out 2>/dev/null || true
case "${CODE:-000}" in
  200|202) echo "IndexNow accepted the submission." ;;
  *) warn "unexpected HTTP ${CODE:-000} (ignored; deploy is not affected)" ;;
esac
exit 0
