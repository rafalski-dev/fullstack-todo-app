import styles from './Filters.module.css';
import { CategoryButton } from '../CategoryButton/CategoryButton';

const FILTER_BUTTONS = [
	{ id: 1, label: 'All' },
	{ id: 2, label: 'Active' },
	{ id: 3, label: 'Done' }
];

export function Filters() {
	return (
		<div className={styles.filters}>
			{FILTER_BUTTONS.map(({ id, label }) => {
				return <CategoryButton key={id}>{label}</CategoryButton>;
			})}
		</div>
	);
}
