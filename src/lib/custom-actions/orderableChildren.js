import interact from 'interactjs';

export const orderableChildren = (
	containerNode,
	{ startEvent = 'hold', onStart, onMove, onEnd, ...options } = {}
) => {
	// This array is going to be mutated for the sake of my mental health
	const itemNodes = Array.from(containerNode?.children || []);
	let itemNodeCopy = null;

	// This is where the magic begins
	const makeInteract = (itemNode, order) => {
		const position = { x: 0, y: 0 };

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
							switch (itemNode.compareDocumentPosition(overNode)) {
								case Node.DOCUMENT_POSITION_PRECEDING:
									containerNode.insertBefore(itemNode, overNode);
									break;
								case Node.DOCUMENT_POSITION_FOLLOWING:
									containerNode.insertBefore(itemNode, overNode.nextSibling);
									break;
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
	};

	// Observe current nodes
	itemNodes.forEach(makeInteract);

	// React to new nodes being added and observe those too
	// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	const handleMutations = mutationRecords => {
		const mutations = Array.from(mutationRecords);

		mutations.forEach(mutationList =>
			mutationList.addedNodes?.forEach(newNode => {
				if (itemNodes.find(node => node === newNode)) {
					console.log('skip');
					return;
				}

				console.log('itemNodes.length', itemNodes.length);
				makeInteract(newNode, itemNodes.length);
				itemNodes.push(newNode);
			})
		);
	};
	const observer = new MutationObserver(handleMutations);
	observer.observe(containerNode, { childList: true });

	return {
		update: newParameters => {
			console.error(
				'Parementer updating is not implemented. The dragging behavior will not change.'
			);
		},
		// destroy: () => {},
	};
};
