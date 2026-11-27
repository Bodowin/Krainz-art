import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import handler from '../dist/server/handler.js';
const pages = JSON.parse(await readFile('src/content/original-pages.json', 'utf8'));
const source = await readFile('src/content/artworks.ts', 'utf8');
const artworks = [...source.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const routes = ['/', ...['de','en'].flatMap(lang => [`/${lang}/`, `/${lang}/art/`, `/${lang}/explore/`, `/${lang}/brand/`, ...pages.map(p=>`/${lang}/pages/${p.slug}/`), ...artworks.map(slug=>`/${lang}/art/${slug}/`)])];
let count=0;const issues=[];
// Render through the built production handler without starting a preview server.
for(let i=0;i<routes.length;i+=6) {
 await Promise.all(routes.slice(i,i+6).map(async route=>{
  try {
   const response=await handler(new Request(`https://gabriela-krainz-art-preview.bodowin.chatgpt.site${route}`));
   const html=await response.text();
   assert.equal(response.status,200,route);
   assert.match(html,/<h1[\s>]/,route);
   if(route!=='/') {
    assert.match(html,/id="main-content"/,route);
    assert.match(html,/<html[^>]*lang="(?:de|en)"/,route);
    assert.match(html,/noindex/,`Missing preview noindex: ${route}`);
   }
   count++;
  } catch(e) {issues.push(`${route}: ${e.message}`);}
 }));
}
for(const route of ['/de/pages/nonexistent-page/', '/de/art/nonexistent-artwork/', '/fr/']) {
 const response=await handler(new Request(`https://example.test${route}`));
 assert.equal(response.status,404,`Unknown route should be 404: ${route}`);
 await response.text();
}
console.log(JSON.stringify({routesChecked:count,unknownRoutesChecked:3,issues},null,2));
assert.equal(issues.length,0);
