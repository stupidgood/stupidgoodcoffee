# Eleveny Starter

A project scaffold for quickly starting a site build with:

- [Eleventy](https://11ty.dev) for templates and site generation
- [Tailwindcss](https://tailwindcss.com) for a utility first CSS workflow
- [PurgeCSS](https://www.purgecss.com/) for optimizing css output
- [Parcel JS](https://parceljs.org) for a simple asset build pipeline
- [Netlify CLI](https://www.npmjs.com/package/netlify-cli) for Netlify dev pipeline and local replication of prod environment

---

## Prerequisites

- [Node and NPM](https://nodejs.org/)
- [Netlify CLI](https://www.npmjs.com/package/netlify-cli) _optional_

## Running locally

```bash
# install the project dependencies
npm install

# run the build and server locally
npm run start

# run the production build
npm run build
```

## Netlify Dev

```bash
# Install the Netlify CLI globally
npm install -g netlify-cli
netlify dev
```

Serverless functions are located in `src/functions`

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello

### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello
