export const scrollToOnFocus = (node, { scrollContainer, offset = 0 }) => {
	const handleOnFocus = event => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			scrollContainer.scrollTop = event.target.offsetTop - offset;
		}
	};

	document.addEventListener('focus', handleOnFocus, true);

	return {
		destroy() {
			document.removeEventListener('focus', handleOnFocus, true);
		},
	};
};
