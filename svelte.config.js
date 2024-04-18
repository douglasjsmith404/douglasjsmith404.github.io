import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '/douglasjsmith404.github.io', // replace 'repo-name' with your repository name
      assets: '/douglasjsmith404.github.io', // replace 'repo-name' with your repository name
    },
  },
};

export default config;