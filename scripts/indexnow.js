const https = require('https');

const host = "media-house.studio";
const key = process.env.INDEXNOW_KEY;

if (!key) {
  console.error("Error: INDEXNOW_KEY environment variable is required");
  console.error("Set it with: INDEXNOW_KEY=your-key node scripts/indexnow.js");
  process.exit(1);
}

const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  "https://media-house.studio/",
  "https://media-house.studio/minecraft",
  "https://media-house.studio/roblox",
  "https://media-house.studio/apply/creator",
  "https://media-house.studio/apply/server-owner",
  "https://media-house.studio/for-creators",
  "https://media-house.studio/for-server-owners"
];

const postData = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log(`Submitting ${urlList.length} URLs to IndexNow for host ${host}...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow Response STATUS: ${res.statusCode}`);
  
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log("Success! URLs submitted efficiently to search engines.");
  } else {
    console.log("Response indicates an issue (check IndexNow documentation for code).");
  }
  
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    if (chunk) console.log(`BODY: ${chunk}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(postData);
req.end();
