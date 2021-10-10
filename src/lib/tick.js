import { isClient } from '$lib/helpers';

const TIMEOUT = 500;
const functionsToCall = [];

export const addFunction = functionsToCall.push.bind(functionsToCall);

if (isClient()) {
	window.prontoTick = () => {
		functionsToCall.forEach(functionToCall => functionToCall());
	};

	const timer = setInterval(
		() =>
			window.prontoTick({
				timer,
				TIMEOUT,
			}),
		TIMEOUT
	);

	window.prontoTickTimer = timer;
}
