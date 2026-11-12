# haibeizhao.com
Personal academic website for Haibei (Laura) Zhao

The public healthcare operations overview is served at
`/research/healthcare-operations.html`. Its reviewed source is
`haibei-zhao/content/healthcare-operations-overview.html` in the sibling checkout.
Publish changes with `haibei-zhao/scripts/update_healthcare_operations_slides.py`;
the public URL stays stable. The detailed working deck is not deployed here.

GitHub Pages serves the site at `https://haibeizhao.com/`. The `CNAME` file
declares this custom domain; DNS and the Pages custom-domain setting must agree.
Cloudflare manages the domain and DNS. The apex has four DNS-only A records for
GitHub Pages (`185.199.108.153` through `185.199.111.153`), and `www` is a
DNS-only CNAME to `haibeizhao-laura.github.io`. The old GitHub Pages URL
redirects to the custom domain. Keep the Google Search Console and GitHub Pages
domain-verification TXT records in Cloudflare DNS.

Cloudflare Web Analytics tracks `haibeizhao.com` using the snippet in both
`index.html` and `research/healthcare-operations.html`. Google Search Console
uses the `haibeizhao.com` domain property and `/sitemap.xml`. When moving the
site again, update the canonical URLs, structured data, sitemap, robots file,
analytics property, Search Console, and profile links together.

The CV is not deployed. The CV icon opens an email request to
`haibeizhao@ucla.edu`; share the PDF individually if the request is approved.
Do not add a CV PDF to this public repository or its deployment assets.
