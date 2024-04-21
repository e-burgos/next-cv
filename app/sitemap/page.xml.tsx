import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

function generateSiteMap() {
  // consts
  const priority = 0.8;
  const lastmod = '2023-12-12T19:08:23+00:00';
  const PUBLIC_URL = 'https://www.estebanburgos.com.ar';
  const urls = [
    '/',
    '/about',
    '/contact',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
  ];

  const sitePages = urls
    ? urls
        .map((path) => {
          return `
<url>
<loc>${`${PUBLIC_URL}/${path}`}</loc>
<lastmod>${lastmod}</lastmod>
<priority>${priority}</priority>
</url>
`;
        })
        .join(' ')
    : undefined;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitePages && sitePages}
</urlset>`;
}

export default function SiteMap({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {}

export const getServerSideProps = (async ({ res }) => {
  if (res) {
    const sitemap = generateSiteMap();
    // set headers
    res.setHeader('Content-Type', 'text/xml');

    // we send the XML to the browser
    res.write(sitemap);
    res.end();
    return { props: { sitemap } };
  }
}) as GetServerSideProps<{}>;
