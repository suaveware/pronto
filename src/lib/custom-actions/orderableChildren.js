import interact from 'interactjs';

export const orderableChildren = (
	containerNode,
	{ startEvent = 'hold', onStart, onMove, onEnd, ...options } = {}
) => {
	// This array is going to be mutated for the sake of my mental health
	let itemNodes = Array.from(containerNode?.children || []);
	let itemNodeCopy = null;
	let itemNodeIndex = -1;
	let lastOverNode = null;

	// This is where the magic begins
	const makeInteract = itemNode => {
		const position = { x: 0, y: 0 };

		interact(itemNode)
			.draggable({
				autoScroll: true,
				manualStart: true,
				...options,
				listeners: {
					start(event) {
						itemNodes = Array.from(containerNode?.children || []);
						const targetRect = event.target.getBoundingClientRect();

						itemNodeIndex = itemNodes.findIndex(node => node === itemNode);
						itemNodeCopy = event.target.cloneNode(true);
						position.x = targetRect.x;
						position.y = targetRect.y;

						// This prevents other events from being fired while dragging
						itemNode.style['pointer-events'] = 'none';
						itemNode.style['touch-action'] = 'none';
						itemNode.style.opacity = '20%';

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
						itemNodes = Array.from(containerNode?.children || []);
						itemNodeIndex = itemNodes.findIndex(node => node === itemNode);
						// Move item copy to mouse position
						position.x += event.dx;
						position.y += event.dy;

						itemNodeCopy.style.transform = `translate(${position.x}px, ${position.y}px)`;

						// Get toIndex value
						const elementsUnderPoint = document.elementsFromPoint(event.clientX, event.clientY);
						const overNode = elementsUnderPoint.find(
							node => node !== itemNode && node?.parentNode === containerNode
						);

						// Don't change back with the same node right after switching places with it
						if (overNode === lastOverNode) {
							return;
						}

						const overNodeIndex = itemNodes.findIndex(node => node === overNode);
						lastOverNode = overNode;

						if (overNodeIndex >= 0 && itemNodeIndex !== overNodeIndex) {
							onMove?.({
								fromIndex: itemNodeIndex,
								toIndex: overNodeIndex,
								toNode: overNode,
								containerNode,
								itemNodeCopy,
								itemNode,
								itemNodes,
								event,
								position,
							});
						}
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

	// Interact with current children
	itemNodes.forEach(makeInteract);

	// React to new children being added and interact with those too
	// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	const handleMutations = mutationRecords => {
		const mutations = Array.from(mutationRecords);

		mutations.forEach(mutationList =>
			mutationList.addedNodes?.forEach(newNode => {
				if (itemNodes.find(node => node === newNode)) {
					return;
				}

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
