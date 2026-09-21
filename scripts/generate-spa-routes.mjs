import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDir, "index.html");

if (fs.existsSync(indexPath)) {
  const routes = ["project", "product", "business"];
  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(indexPath, path.join(routeDir, "index.html"));
  }
  // Also write 404.html for GitHub Pages fallback
  fs.copyFileSync(indexPath, path.join(distDir, "404.html"));
  console.log("✓ SPA static fallback routes generated: /project, /product, /business and 404.html");
}
