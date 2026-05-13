import fs from "node:fs";
import path from "node:path";

const contentDirectory = path.join(process.cwd(), "content");

export function getContent(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  return fs.readFileSync(filePath, "utf8").trim();
}
