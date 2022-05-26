import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function markdownToHtmlSync(markdown: string) {
  const result = remark().use(html).processSync(markdown);
  return result.toString() as string;
}