import styles from './Filters.module.css';
import { CategoryButton } from '../CategoryButton/CategoryButton';

type FiltersType = {
	changeCategory: (val: string) => void;
	activeCategory: string;
};

const FILTER_BUTTONS = [
	{ id: 1, label: 'All' },
	{ id: 2, label: 'Active' },
	{ id: 3, label: 'Done' }
];

export function Filters({ changeCategory, activeCategory }: FiltersType) {
	return (
		<div className={styles.filters}>
			{FILTER_BUTTONS.map(({ id, label }) => {
				return (
					<CategoryButton key={id} changeCategory={changeCategory} activeCategory={activeCategory}>
						{label}
					</CategoryButton>
				);
			})}
		</div>
	);
}
