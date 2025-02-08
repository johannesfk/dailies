import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';
import vidstack from 'vidstack/tailwind.cjs';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', contentPath(import.meta.url, 'svelte')],

	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: [themes.cerberus, themes.terminus]
		}),
		vidstack({
			selector: '.media-player',
			prefix: 'media',
			webComponents: true
		}),
		containerQueries
	]
} satisfies Config;
