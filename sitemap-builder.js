const fs = require("fs");
const date = new Date();
const data = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
<loc>https://www.quadque.tech/</loc>
<priority>1.0</priority>
<changefreq>always</changefreq>
 </url>
<url> <loc>https://www.quadque.tech#landing</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#services</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/:slug</loc> 
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#about</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#clients</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#case-study</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#client-speak</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#blogs</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#start-project</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech#contacts</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/software-development</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/web-development</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/mobile-app-development</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/ai-iot-solutions</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/e-commerce-development</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/cloud-computing-solutions</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/maintenance-and-support</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/cyber-security</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/services/sap-erp-solutions</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/case-study</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/case-study/:slug</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/blog</loc> </url>
<url>
<loc>https://www.quadque.tech/blog/:slug</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/career</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>

<url>
<loc>https://www.quadque.tech/faq</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/blogs</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
<url>
<loc>https://www.quadque.tech/gallery</loc>
<lastmod>${date.getFullYear()}-${
  date.getMonth() < 10 ? "0" + date.getMonth() + 1 : date.getMonth() + 1
}-${
  date.getDate() < 10 ? "0" + date.getDate() + 1 : date.getDate() + 1
}</lastmod>
</url>
hii
</urlset>`;

fs.writeFile("example.txt", data, (err) => {
  if (err) throw err;
  console.log("File has been saved!");
});
