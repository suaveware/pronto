<script>
	import Select from '$lib/components/atoms/Select.svelte';
	import { saveConfig, state } from '$lib/state';
	import { isClient } from '$lib/helpers';
	import Index from '../index.svelte';

	const themes = [
		{ value: '', label: 'Automático' },
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
		{ value: 'cupcake', label: 'Cupcake' },
		{ value: 'bumblebee', label: 'Bumblebee' },
		{ value: 'emerald', label: 'Emerald' },
		{ value: 'corporate', label: 'Corporate' },
		{ value: 'synthwave', label: 'Synthwave' },
		{ value: 'retro', label: 'Retro' },
		{ value: 'cyberpunk', label: 'Cyberpunk' },
		{ value: 'valentine', label: 'Valentine' },
		{ value: 'halloween', label: 'Halloween' },
		{ value: 'garden', label: 'Garden' },
		{ value: 'forest', label: 'Forest' },
		{ value: 'aqua', label: 'Aqua' },
		{ value: 'lofi', label: 'Lofi' },
		{ value: 'pastel', label: 'Pastel' },
		{ value: 'fantasy', label: 'Fantasy' },
		{ value: 'wireframe', label: 'Wireframe' },
		{ value: 'black', label: 'Black' },
		{ value: 'luxury', label: 'Luxury' },
		{ value: 'dracula', label: 'Dracula' },
	];
	let chosenTheme = $state.config.theme;

	$: {
		if (isClient()) {
			saveConfig($state.config.set('theme', chosenTheme));
			document.body.setAttribute('data-theme', chosenTheme);
		}
	}
</script>

<div class="flex flex-col overflow-y-scroll bg-base-300 justify-center">
	<div class="px-6">
		<Select label="Temas" options={themes} bind:value={chosenTheme} />
	</div>
	<div class="mockup-phone relative transform scale-90">
		<div class="camera" />
		<div class="display">
			<div class="w-full h-full artboard phone-1 artboard-demo">
				<Index preview={true} />
			</div>
		</div>
	</div>
</div>
