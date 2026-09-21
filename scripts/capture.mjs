import { execFile } from "node:child_process";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outFile = process.argv[2];
const width = process.argv[3] || "390";
const height = process.argv[4] || "844";

const args = [
  "--headless=new",
  "--disable-gpu",
  `--window-size=${width},${height}`,
  `--screenshot=${outFile}`,
  "http://127.0.0.1:5174/project"
];

const child = execFile(chromePath, args, { timeout: 15000 }, (err, stdout, stderr) => {
  if (err) {
    console.error("Capture error:", err.message, "stderr:", stderr, "stdout:", stdout);
    process.exit(1);
  }
  console.log(`Captured ${outFile} (${width}x${height})`);
  process.exit(0);
});
