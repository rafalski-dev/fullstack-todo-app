export function formattedDate() {
		const date = new Date();
		const weekDay = date.toLocaleDateString('en-US', { weekday: 'long' });
		const day = date.toLocaleDateString('en-US', { day: 'numeric' });
		const month = date.toLocaleDateString('en-US', { month: 'long' });
		return `${weekDay}, ${day} ${month}`;
	}