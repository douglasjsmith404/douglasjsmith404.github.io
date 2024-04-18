import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: '/douglasjsmith404.github.io',
      assets: '/douglasjsmith404.github.io'
		}
	}
};

export default config;