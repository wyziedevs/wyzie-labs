/**
 * Enables disabled checkboxes inside a container rendered from markdown.
 * Marked outputs `<input type="checkbox" disabled>` for `- [ ]` items.
 * This action removes `disabled` so they become toggleable.
 */
export function enableCheckboxes(node: HTMLElement) {
	const checkboxes = node.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
	for (const cb of checkboxes) {
		cb.removeAttribute('disabled');
	}
}
