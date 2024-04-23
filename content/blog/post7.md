---
title: post7-setting up a github.io static-site WIP.
description: setting up a github.io static-site WIP.
date: 2024-04-17
tags:
  - second tag
  - posts with two tags
---

### what is svelte

Svelte is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

Imagine building web apps that are blazing fast, super small, and a breeze to code. That's SvelteKit! Compared to React, it compiles code down to tiny vanilla JavaScript, ditching the virtual DOM for smooth performance. Plus, you write less code overall, thanks to its familiar HTML, CSS, and JavaScript approach. Ideal for small projects or when speed is king.

## how i set up a github.io static-site using sveltejs WIP.

Here's a breakdown of setting up a GitHub Pages static site using SvelteKit:

**1. Create a SvelteKit project:**

Use the `npx` command to initialize a new SvelteKit project:

```bash
npx degit @sveltejs/kit my-sveltekit-app
cd my-sveltekit-app
```a

Replace `my-sveltekit-app` with your desired project name.

**2. Configure for GitHub Pages (optional):**

- If your website will be deployed at the root of your GitHub Pages URL (e.g., `https://username.github.io`), no configuration is needed.
- If your website will be deployed in a subfolder (e.g., `https://username.github.io/your-project-name`), you'll need to adjust the base path in `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // Add this line with your subfolder path
    paths: { base: '/your-project-name' },
  },
};

export default config;
```

**3. Develop your website:**

- Edit files within the `src` directory to build your website's components and pages. SvelteKit uses Svelte for component creation and offers features like routing and data fetching.

**4. Build for deployment:**

- Run the build command to generate the optimized static website files:

```bash
pnpm build
```

**5. Create a `.nojekyll` file (optional):**

- If your project name conflicts with Jekyll configurations on GitHub Pages, create an empty file named `.nojekyll` in the `build` directory. This prevents Jekyll from processing your website files.

**6. Deploy to GitHub Pages:**

There are two main approaches:

  - **Manual Deployment:**
    - Create a new branch in your GitHub repository (e.g., `gh-pages`).
    - Push the contents of your `build` directory to the `gh-pages` branch.
    - GitHub Pages will automatically deploy your website when changes are pushed to this branch.

  - **CI/CD with GitHub Actions (optional):**
    - Set up a workflow in `.github/workflows` that automatically builds and deploys your website on push events. This requires additional configuration but allows for automated deployments.

Here are some helpful resources for further guidance:

- SvelteKit deployment guide: [https://kit.svelte.dev/docs/building-your-app](https://kit.svelte.dev/docs/building-your-app)
Here are some helpful resources for further guidance:

SvelteKit deployment guide: https://kit.svelte.dev/docs/building-your-app
How to deploy a SvelteKit website to GitHub Pages: https://medium.com/mkdir-awesome/two-easy-ways-to-publish-your-svelte-project-on-github-pages-c8eaca2b6225

[my repos](https://github.com/douglasjsmith404/)

[this repo](https://github.com/douglasjsmith404/eleventy-base-blog)

