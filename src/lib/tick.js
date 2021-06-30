import { isClient } from '$lib/helpers';

export let addFunction = () => {};

if (isClient()) {
	const timeout = 500;
	window.prontoTick = () => {};

	const timer = setInterval(
		() =>
			window.prontoTick({
				timer,
				timeout,
			}),
		timeout
	);

	window.prontoTickTimer = timer;

	addFunction = fun => {
		const old = window.prontoTick;
		window.prontoTick = (...args) => {
			old(...args);
			fun(...args);
		};

		window.prontoTick();
	};
}
