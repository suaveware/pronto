import interact from 'interactjs';

export const orderableChildren = (
	containerNode,
	{ startEvent = 'hold', onStart, onMove, onEnd, ...options } = {}
) => {
	// This array is going to be mutated for the sake of my mental health
	const itemNodes = Array.from(containerNode?.children || []);
	let itemNodeCopy = null;

	// This is where the magic begins
	itemNodes.forEach((itemNode, index) => {
		const position = { x: 0, y: 0 };
		itemNode.style.order = index;

		interact(itemNode)
			.draggable({
				autoScroll: true,
				manualStart: true,
				...options,
				listeners: {
					start(event) {
						const targetRect = event.target.getBoundingClientRect();
						position.x = targetRect.x;
						position.y = targetRect.y;
						itemNodeCopy = event.target.cloneNode(true);

						// This prevents other events from being fired while dragging
						itemNode.style['pointer-events'] = 'none';
						itemNode.style['touch-action'] = 'none';
						itemNode.style.opacity = '0%';

						itemNodeCopy.style['pointer-events'] = 'none';
						itemNodeCopy.style['touch-action'] = 'none';
						itemNodeCopy.style['z-index'] = 99999;
						itemNodeCopy.style.width = `${itemNode.clientWidth}px`;
						itemNodeCopy.style.height = `${itemNode.clientHeight}px`;
						itemNodeCopy.style.position = 'fixed';
						itemNodeCopy.style.top = 0;
						itemNodeCopy.style.left = 0;
						itemNodeCopy.style.transform = `translate(${position.x}px, ${position.y}px)`;

						containerNode.appendChild(itemNodeCopy);

						onStart?.({ containerNode, itemNodeCopy, itemNode, itemNodes, event, position });
					},
					move(event) {
						// Move item copy to mouse position
						position.x += event.dx;
						position.y += event.dy;

						itemNodeCopy.style.transform = `translate(${position.x}px, ${position.y}px)`;

						// Move item to it's new position
						const overNode = document
							.elementsFromPoint(event.clientX, event.clientY)
							.find(node => node !== itemNode && node?.parentNode === containerNode);

						if (overNode) {
							const overNodeInitialOrder = +overNode.style.order;
							const itemNodeInitialOrder = +itemNode.style.order;
							const difference = overNodeInitialOrder - itemNodeInitialOrder;
							const distance = Math.abs(difference);
							const direction = Math.sign(difference);

							for (let i = 0; i < distance; ++i) {
								const itemNodeOrder = +itemNode.style.order;
								const switchNode = itemNodes[itemNodeOrder + direction];
								const switchNodeOrder = +switchNode.style.order;

								switchNode.style.order = itemNodeOrder;
								itemNode.style.order = switchNodeOrder;
								itemNodes[switchNodeOrder] = itemNode;
								itemNodes[itemNodeOrder] = switchNode;
							}
						}

						onMove?.({ containerNode, itemNodeCopy, itemNode, itemNodes, event, position });
					},
					end(event) {
						itemNode.style['pointer-events'] = null;
						itemNode.style['touch-action'] = null;
						itemNode.style.opacity = '100%';
						itemNodeCopy.remove();
						itemNodeCopy = null;

						onEnd?.({ containerNode, itemNodeCopy, itemNode, itemNodes, event, position });
					},
				},
			})
			.on(startEvent, event => {
				const { interacting, start } = event.interaction;

				if (!interacting()) {
					start({ name: 'drag' }, event.interactable, event.currentTarget);
				}
			});
	});

	return {
		update: newParameters => {
			console.error(
				'Parementer updating is not implemented. The dragging behavior will not change.'
			);
		},
		// destroy: () => {},
	};
};
