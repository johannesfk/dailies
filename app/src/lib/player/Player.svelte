<script lang="ts">
	import type { MediaPlayerElement } from 'vidstack/elements';
	import 'vidstack/bundle';
	import 'vidstack/icons';

	let player: MediaPlayerElement = $state();
</script>

<!-- src="https://files.vidstack.io/sprite-fight/720p.mp4" -->
<media-player
	class="player"
	title="Sprite Fight"
	src="A012C015_170217_ROFK.mov"
	crossOrigin
	playsInline
	bind:this={player}
>
	<media-provider>
		<media-poster
			class="vds-poster"
			src="https://files.vidstack.io/sprite-fight/poster.webp"
			alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
		></media-poster>
	</media-provider>
	<media-video-layout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
	></media-video-layout>
</media-player>

<style lang="postcss">
	.player {
		--brand-color: #f5f5f5;
		--focus-color: #4e9cf6;

		--audio-brand: var(--brand-color);
		--audio-focus-ring-color: var(--focus-color);
		--audio-border-radius: 2px;

		--video-brand: var(--brand-color);
		--video-focus-ring-color: var(--focus-color);
		--video-border-radius: 2px;

		/* 👉 https://vidstack.io/docs/player/components/layouts/default#css-variables for more. */

		&[data-view-type='audio'] media-poster {
			display: none;
		}

		&[data-view-type='video'] {
			aspect-ratio: 16 /9;
		}
	}

	.src-buttons {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-top: 40px;
		margin-inline: auto;
		max-width: 300px;
	}
</style>
