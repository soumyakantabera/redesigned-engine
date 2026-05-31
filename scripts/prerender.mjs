import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const ROUTES = [
  "/",
  "/about-us",
  "/book-free-demo",
  "/contact",
  "/course-ai-builder",
  "/course-ai-projects",
  "/course-business-english",
  "/course-career-counselling",
  "/course-finance-excel",
  "/course-ielts",
  "/course-interactive-speaking",
  "/course-interview-prep",
  "/course-master-excel",
  "/course-ms-office",
  "/course-power-bi",
  "/course-prompt-engineering",
  "/course-python",
  "/course-spoken-english",
  "/english-career",
  "/excel-data",
  "/founder",
  "/success-stories",
  "/why-us",
];

function escapeAttr(val) {
  return String(val ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;");
}

function buildHeadHtml(headData) {
  let html = "";
  const hasDynamicTitle = headData.meta.some((m) => "title" in m);

  for (const m of headData.meta) {
    if ("title" in m) {
      html += `  <title>${m.title}</title>\n`;
    } else if (m.property) {
      html += `  <meta property="${escapeAttr(m.property)}" content="${escapeAttr(m.content)}"/>\n`;
    } else if (m.name) {
      html += `  <meta name="${escapeAttr(m.name)}" content="${escapeAttr(m.content)}"/>\n`;
    }
  }
  for (const l of headData.links) {
    const attrs = Object.entries(l)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(" ");
    html += `  <link ${attrs}/>\n`;
  }
  for (const s of headData.scripts) {
    if (s.type === "application/ld+json" && s.children) {
      html += `  <script type="application/ld+json">${s.children}</script>\n`;
    }
  }

  return { headHtml: html, hasDynamicTitle };
}

const { render } = await import(
  resolve(root, "dist/server/entry-server.js")
);

const template = readFileSync(resolve(root, "dist/index.html"), "utf-8");

let successCount = 0;
let failCount = 0;

for (const route of ROUTES) {
  try {
    const { appHtml, headData } = await render(route);
    const { headHtml, hasDynamicTitle } = buildHeadHtml(headData);

    let html = template;

    // Remove the generic title from the template when we have a route-specific one
    if (hasDynamicTitle) {
      html = html.replace(/<title>[^<]*<\/title>\n?/, "");
    }

    // Remove static generic meta tags superseded by per-route head() data
    const hasDynamicOg = headData.meta.some((m) => m.property?.startsWith("og:"));
    const hasDynamicTwitter = headData.meta.some((m) => m.name?.startsWith("twitter:"));
    const hasDynamicDesc = headData.meta.some((m) => m.name === "description");
    if (hasDynamicOg) {
      html = html.replace(/<meta property="og:[^"]*"[^/]*\/>\n?/g, "");
    }
    if (hasDynamicTwitter) {
      html = html.replace(/<meta name="twitter:[^"]*"[^/]*\/>\n?/g, "");
    }
    if (hasDynamicDesc) {
      html = html.replace(/<meta name="description"[^/]*\/>\n?/, "");
    }

    // Inject per-route head tags + rendered app HTML
    html = html
      .replace("</head>", `${headHtml}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const dir =
      route === "/" ? resolve(root, "dist") : resolve(root, `dist${route}`);
    mkdirSync(dir, { recursive: true });
    writeFileSync(resolve(dir, "index.html"), html);
    console.log(`✓  ${route}`);
    successCount++;
  } catch (err) {
    console.error(`✗  ${route}: ${err.message}`);
    failCount++;
  }
}

// Remove the server bundle — it's not needed for deployment
rmSync(resolve(root, "dist/server"), { recursive: true, force: true });

console.log(`\nPrerender complete: ${successCount} OK, ${failCount} failed.`);
if (failCount > 0) process.exit(1);
