/**
 * IndexNow + Google Sitemap Ping Script
 * 
 * Notifies search engines about updated pages.
 * - IndexNow: Instantly notifies Bing, Yandex, Seznam, Naver
 * - Google Ping: Notifies Google about sitemap changes
 * 
 * Usage: INDEXNOW_KEY=your-key node scripts/ping-search-engines.mjs
 */

const SITE_URL = "https://media-house.studio";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (!INDEXNOW_KEY) {
  console.error("Error: INDEXNOW_KEY environment variable is required");
  console.error("Set it with: INDEXNOW_KEY=your-key node scripts/ping-search-engines.mjs");
  process.exit(1);
}

const URLS_TO_INDEX = [
  `${SITE_URL}/`,
  `${SITE_URL}/minecraft`,
  `${SITE_URL}/roblox`,
  `${SITE_URL}/for-creators`,
  `${SITE_URL}/for-server-owners`,
  `${SITE_URL}/apply/creator`,
  `${SITE_URL}/apply/server-owner`,
];

async function pingIndexNow() {
  console.log("\n📡 Pinging IndexNow (Bing, Yandex, Seznam, Naver)...\n");

  const payload = {
    host: "media-house.studio",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URLS_TO_INDEX,
  };

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  for (const engine of engines) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const status = res.status;
      const statusText = status === 200 ? "✅ OK" :
        status === 202 ? "✅ Accepted" :
          `⚠️ ${res.statusText}`;
      console.log(`  ${statusText} - ${engine} (HTTP ${status})`);
    } catch (err) {
      console.log(`  ❌ Failed - ${engine}: ${err.message}`);
    }
  }
}

async function noteGoogleSitemap() {
  console.log("\n📡 Google Sitemap...\n");
  console.log("  ℹ️  Google deprecated the /ping endpoint in 2023.");
  console.log("  ℹ️  Submit your sitemap via Google Search Console instead:");
  console.log("  ℹ️  https://search.google.com/search-console/sitemaps");
}

async function main() {
  console.log("🔍 Search Engine Notification Script");
  console.log("━".repeat(50));
  console.log(`Site: ${SITE_URL}`);
  console.log(`URLs: ${URLS_TO_INDEX.length} pages`);

  await pingIndexNow();
  await noteGoogleSitemap();

  console.log("\n━".repeat(50));
  console.log("✅ Done! Search engines have been notified.");
  console.log("\n📋 Next steps:");
  console.log("  1. Check Google Search Console → URL Inspection");
  console.log("  2. Check Bing Webmaster Tools → URL Inspection");
  console.log("  3. Wait 1-3 days for Google, 1-2 hours for Bing");
}

main().catch(console.error);
