import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#app',
		adapter: vercel(),
		vite: {
			build: {
				minify: true,
				brotliSize: true,
				sourcemap: true
			}
		}
	}
};

export default config;
