import { isClient } from '$lib/helpers';
import { DateTime } from 'luxon';

export let addFunction = () => {};

if (isClient()) {
	const timeout = 500;
	window.prontoTick = () => {};
	window.DateTime = DateTime;

	const timer = setInterval(
		() =>
			window.prontoTick({
				timer,
				timeout,
			}),
		timeout
	);

	addFunction = fun => {
		const old = window.prontoTick;
		window.prontoTick = (...args) => {
			old(...args);
			fun(...args);
		};

		window.prontoTick();
	};
}
