<script>
	import Separator from '$lib/components/Separator.svelte';
	import { version } from '/package.json';
</script>

<div
	class="text-white px-4 overflow-y-scroll inline-flex gap-2 text-xl flex-col items-stretch w-full"
	style="height: 76vh"
>
	<div class="inline-flex flex-col items-center pt-4 gap-2 w-full">
		<p>by Suaveware</p>
		<p class="text-base text-justify">
			Este aplicativo é de código livre sob a licença GPL-3 e seu código fonte está disponível neste
			<a class="underline" href="https://github.com/luizcarlos1405/pronto">
				repositório no Github
			</a>
			.
		</p>
		<p class="text-base text-justify">
			Distribuído como <i>progressive web app</i> (PWA) através do endereço:
		</p>
		<a class="underline text-base w-full" href="https://pronto.suaveware.dev">
			https://pronto.suaveware.dev
		</a>
		<Separator title="Contato" class="text-white mt-4" />
		<div class="inline-flex text-base w-full flex-col gap-2">
			<p>Email: luizcarlos1405@suaveware.dev</p>
			<p>Twitter: @semmilho</p>
			<p>YouTube: CanalPalco</p>
			<p>TikTok: @RSensato</p>
		</div>

		<Separator title="Versão" class="text-white mt-4" />
		<div class="text-sm">
			{version}
		</div>
	</div>
</div>
