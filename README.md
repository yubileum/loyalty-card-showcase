# Loyalink landing page

An Indonesian sales landing page for Loyalink digital loyalty cards. Built with plain HTML, CSS, and JavaScript; no build dependencies or backend required.

## Preview

Run `python3 -m http.server 8000` in this directory and visit http://localhost:8000. Any static host can serve the repository root.

## Page and interactions

- Business-focused hero, benefits, cashier workflow, scope, FAQs, and enquiry section.
- Clearly labelled illustrative loyalty cards for coffee shops, salons, and laundries.
- Local stamp simulation with reward state, restart, and reset. It never calls the production API or stores customer data.
- Mobile navigation with expanded state and Escape handling.
- Copyable enquiry brief with a manual-copy fallback if clipboard access is unavailable.
- Native expandable FAQs, visible keyboard focus, skip navigation, and reduced-motion support.

## Sales configuration

Enquiries link to https://www.instagram.com/yubisa.ai/. Update both the link and accompanying handle/copy if the sales channel changes. The existing app demo link is https://loyalink-demo.vercel.app; verify that deployment separately before a campaign.

Pricing and implementation scope are confirmed during consultation. Do not add numerical performance claims, customer counts, testimonials, or integration promises without evidence. The illustrated businesses are examples, not customer endorsements.

## Files

- `index.html`: page copy, metadata, navigation, and enquiry links.
- `styles.css`: responsive design, brand colours, and accessibility states.
- `script.js`: navigation, local demonstration, and enquiry clipboard handling.
- Existing PNG brand and product assets are retained.

Google Fonts is optional: system fonts remain available as fallbacks. No analytics, lead collection, or third-party application API is installed by this landing page.

## Branch and release

Development branch: `dev/landing-page-refresh`. Review before merging into `main`. This change does not fix or deploy the separate Loyalink application/backend; its access-control and reward-flow findings need independent remediation before customer onboarding.

## Checks

- `node --check script.js`
- Check local assets and fragment links.
- Browser QA: desktop and 390px embedded mobile viewport; stamp progression, business switching, reset/restart, FAQ, menu, and clipboard fallback.
