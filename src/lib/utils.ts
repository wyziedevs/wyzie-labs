export function formatDate(iso: string, style: 'short' | 'long' = 'long') {
	const date = new Date(iso);
	return style === 'short'
		? date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
		: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
