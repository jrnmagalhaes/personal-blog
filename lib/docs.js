import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'docs');

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { mtime } = fs.statSync(fullPath)
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content, time: mtime.getTime() };
}

export function getAllDocs() {
  const slugs = fs.readdirSync(docsDirectory);
  const docs = slugs
    .map((slug) => getDocBySlug(slug))
  return docs;
}

export function getAllDocsSorteByDate() {
  return getAllDocs().sort((a, b) => b.time - a.time);
}