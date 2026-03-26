/**
 * Enables disabled checkboxes inside a container rendered from markdown.
 * Marked outputs `<input type="checkbox" disabled>` for `- [ ]` items.
 * This action removes `disabled` so they become toggleable and adds
 * accessible labels derived from the parent list-item text.
 */
export function enableCheckboxes(node: HTMLElement) {
	const checkboxes = node.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
	for (const cb of checkboxes) {
		cb.removeAttribute('disabled');
		if (!cb.getAttribute('aria-label')) {
			const li = cb.closest('li');
			if (li) {
				const text = li.textContent?.trim();
				if (text) cb.setAttribute('aria-label', text);
			}
		}
	}
}
