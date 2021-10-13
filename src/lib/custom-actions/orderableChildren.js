const moveEvents = ['touchmove', 'mousemove'];
const endEvents = ['touchend', 'mouseup'];

const extractEventClientPosition = event => {
	// TODO: Maybe support multitouch
	const position = {
		x: event.clientX || event.changedTouches?.[0]?.clientX || event.detail?.clientX,
		y: event.clientY || event.changedTouches?.[0]?.clientY || event.detail?.clientY,
	};

	if (!(position.x && position.y)) {
		console.error('Unable to extract position from the event:', event);
	}

	return position;
};

export const orderableChildren = (
	containerNode,
	{ startEvent = 'hold', onStart, onMove, onEnd } = {}
) => {
	// This array is going to be mutated for the sake of my mental health
	let itemNodes = Array.from(containerNode?.children || []);
	let itemNodeCopy = null;
	let itemNodeIndex = -1;
	let lastOverNode = null;
	let translateOffset = { x: 0, y: 0 };

	const handleStartEvent = event => {
		const targetRect = event.currentTarget.getBoundingClientRect();
		const position = extractEventClientPosition(event);

		itemNodes = Array.from(containerNode?.children || []);
		translateOffset.x = targetRect.left - event.detail.clientX;
		translateOffset.y = targetRect.top - event.detail.clientY;

		itemNodeIndex = itemNodes.findIndex(node => node === event.currentTarget);
		itemNodeCopy = event.currentTarget.cloneNode(true);

		// This prevents other events from being fired while dragging
		event.currentTarget.style['pointer-events'] = 'none';
		event.currentTarget.style['touch-action'] = 'none';

		itemNodeCopy.style['pointer-events'] = 'none';
		itemNodeCopy.style['touch-action'] = 'none';
		itemNodeCopy.style['z-index'] = 99999;
		itemNodeCopy.style.width = `${event.currentTarget.clientWidth}px`;
		itemNodeCopy.style.height = `${event.currentTarget.clientHeight}px`;
		itemNodeCopy.style.position = 'fixed';
		itemNodeCopy.style.top = 0;
		itemNodeCopy.style.left = 0;
		itemNodeCopy.style.transform = `translate(${targetRect.left}px, ${targetRect.top}px)`;

		containerNode.appendChild(itemNodeCopy);

		onStart?.({
			event,
			position,
			containerNode,
			itemNodeCopy,
			itemNode: event.currentTarget,
			itemNodes,
		});
	};

	const handleMoveEvent = event => {
		if (!itemNodeCopy) {
			return;
		}

		const position = extractEventClientPosition(event);
		const translate = {
			x: position.x + translateOffset.x,
			y: position.y + translateOffset.y,
		};

		itemNodes = Array.from(containerNode?.children || []);
		itemNodeIndex = itemNodes.findIndex(node => node === event.currentTarget);
		itemNodeCopy.style.transform = `translate(${translate.x}px, ${translate.y}px)`;

		// Get toIndex value
		const elementsUnderPoint = document.elementsFromPoint(position.x, position.y);
		const overNode = elementsUnderPoint.find(
			node => node !== event.currentTarget && node?.parentNode === containerNode
		);

		// Don't change back with the same node right after switching places with it
		if (overNode === lastOverNode) {
			return;
		}

		const overNodeIndex = itemNodes.findIndex(node => node === overNode);
		lastOverNode = overNode;

		if (overNodeIndex >= 0 && itemNodeIndex !== overNodeIndex) {
			onMove?.({
				event,
				position,
				fromIndex: itemNodeIndex,
				toIndex: overNodeIndex,
				toNode: overNode,
				containerNode,
				itemNodeCopy,
				itemNode: event.currentTarget,
				itemNodes,
			});
		}
	};

	const handleEndEvent = event => {
		if (!itemNodeCopy) {
			return;
		}

		const position = extractEventClientPosition(event);

		event.currentTarget.style['pointer-events'] = null;
		event.currentTarget.style['touch-action'] = null;
		event.currentTarget.style.opacity = '100%';
		itemNodeCopy.remove();
		itemNodeCopy = null;

		onEnd?.({
			event,
			position,
			containerNode,
			itemNodeCopy,
			itemNode: event.currentTarget,
			itemNodes,
		});
	};

	const addEventListeners = itemNode => {
		itemNode.addEventListener(startEvent, handleStartEvent);
		moveEvents.forEach(eventName => itemNode.addEventListener(eventName, handleMoveEvent, true));
		endEvents.forEach(eventName => itemNode.addEventListener(eventName, handleEndEvent, true));
	};

	const removeEventListeners = itemNode => {
		removeEventListener(startEvent, handleStartEvent);
		moveEvents.forEach(eventName => itemNode.removeEventListener(eventName, handleMoveEvent));
		endEvents.forEach(eventName => itemNode.removeEventListener(eventName, handleEndEvent));
	};

	// Interact with current children
	itemNodes.forEach(addEventListeners);

	// React to new children being added and interact with those too
	// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	const handleMutations = mutationRecords => {
		const mutations = Array.from(mutationRecords);

		mutations.forEach(mutationList =>
			mutationList.addedNodes?.forEach(newNode => {
				if (itemNodes.find(node => node === newNode)) {
					return;
				}

				addEventListeners(newNode, itemNodes.length);
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
		destroy: () => {
			itemNodes.forEach(removeEventListeners);
		},
	};
};
