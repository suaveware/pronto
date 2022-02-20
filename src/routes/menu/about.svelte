<script>
	import Separator from '$lib/components/atoms/Separator.svelte';
	import { version } from '/package.json';
</script>

<div
	class="px-4 overflow-y-scroll inline-flex gap-2 text-xl flex-col items-stretch w-full"
	style="height: 76vh"
>
	<div class="inline-flex flex-col text-base items-center pt-4 gap-2 w-full">
		<p class="text-2xl font-bold">by Suaveware</p>
		<p class="text-justify">
			Este aplicativo é de código livre sob a licença GPL-3 e seu código fonte está disponível neste
			<a class="underline" href="https://github.com/suaveware/pronto"> repositório no Github </a>
			.
		</p>
		<p class="text-justify">
			Distribuído como <i>progressive web app</i> (PWA) através do endereço:
		</p>
		<a class="underline w-full" href="https://pronto.suaveware.dev">
			https://pronto.suaveware.dev
		</a>
		<Separator title="Contato" class="mt-4" />
		<div class="inline-flex w-full flex-col gap-2">
			<p>
				Email: <a class="underline" href="luizcarlos1405@suaveware.dev"
					>luizcarlos1405@suaveware.dev</a
				>
			</p>
			<p>
				Twitter:
				<a class="underline w-full" href="https://twitter.com/semmilho"> @semmilho </a>
			</p>
			<p>
				YouTube: <a class="underline w-full" href="https://youtube.com/CanalPalco"> CanalPalco </a>
			</p>
			<p>
				TikTok:
				<a class="underline w-full" href="https://www.tiktok.com/@rsensato"> @RSensato </a>
			</p>
		</div>

		<Separator title="Versão" class="mt-4" />
		<div class="text-sm">
			{version}
		</div>
	</div>
</div>
