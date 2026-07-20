AOIP.app Landing Page

This repository contains the static public landing page for AOIP.app.

AOIP — Airport Operational Intelligence Platform — connects daily airport operations, ground handling records, supervisor visibility, trip files, master data and ready-made daily, weekly and monthly management reporting.

Deployment structure:

- aoip.app
  Public AOIP landing page.

- test.aoip.app
  AOIP demo / test environment with sample data.
  Private/noindex as needed.

- omr.aoip.app
  AOIP - OMR pilot environment.
  Login-only/noindex.

Files included:

- index.html
- robots.txt
- sitemap.xml
- site.webmanifest
- assets/styles.css
- assets/main.js
- assets/aoip-icon.svg
- assets/favicon.svg
- assets/aoip-og-image.png
- assets/aoip-operations-view.svg
- assets/aoip-reporting-view.svg
- assets/aoip-cloud-view.svg

Notes:

- This repository contains only the public marketing website.
- It does not contain AOIP application source code.
- It does not contain server passwords, environment variables, databases, operational data or private airport data.
- The AOIP application itself is deployed separately from the private AOIP repository.
- The contact form currently opens the visitor's email client with a prepared inquiry to info@aoip.app.

VPS deployment target:

- Public web root: /var/www/aoip-landing
- Served by Nginx
- HTTPS via server SSL configuration