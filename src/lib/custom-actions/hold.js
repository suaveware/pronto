const MOVE_TOLERANCE = 50;

export function hold(node, duration = 400) {
	let timer;
	let startPosition;

	const handleMouseup = () => {
		clearTimeout(timer);
	};

	const handleMouseMove = event => {
		const { clientX, clientY } = event.touches ? event.touches[0] : event;
		let position = { x: clientX, y: clientY };
		let dx = position.x - startPosition.x;
		let dy = position.y - startPosition.y;
		let distSqr = dx * dx + dy * dy;

		if (distSqr > MOVE_TOLERANCE) {
			clearTimeout(timer);
		}
	};

	const handleMousedown = event => {
		const { clientX, clientY } = event.touches ? event.touches[0] : event;
		startPosition = { x: clientX, y: clientY };

		timer = setTimeout(() => {
			// node.removeEventListener('mousedown', handleMousedown);
			// node.removeEventListener('touchStart', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
			node.removeEventListener('touchend', handleMouseup);

			node.dispatchEvent(
				new CustomEvent('hold', {
					detail: {
						clientX: startPosition.x,
						clientY: startPosition.y,
					},
				})
			);
		}, duration);

		node.addEventListener('mouseup', handleMouseup);
		node.addEventListener('mousemove', handleMouseMove);
		node.addEventListener('touchend', handleMouseup);
		node.addEventListener('touchmove', handleMouseMove);
	};

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('touchstart', handleMousedown);

	return {
		update(newDuration) {
			duration = newDuration;
		},
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('touchStart', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
			node.removeEventListener('touchend', handleMouseup);
			node.removeEventListener('mousemove', handleMouseMove);
		},
	};
}
