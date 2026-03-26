/**
 * Scroll-reveal action using IntersectionObserver.
 * Add `class="reveal"` to the element, then `use:reveal`.
 * Optionally pass { delay: number } for stagger timing.
 */
export function reveal(node: HTMLElement, options?: { delay?: number; threshold?: number }) {
	if (window.matchMedia('(pointer: coarse)').matches) {
		node.classList.add('visible');
		return { destroy() {} };
	}

	const delay = options?.delay ?? 0;
	const threshold = options?.threshold ?? 0.15;

	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold },
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		},
	};
}
