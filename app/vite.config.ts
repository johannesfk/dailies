import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { vite as vidstack } from 'vidstack/plugins';

export default defineConfig({
	plugins: [tailwindcss(), vidstack({ include: /player\// }), sveltekit()],

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
