import styles from './Filters.module.css';
import { CategoryButton } from '../CategoryButton/CategoryButton';
import type { Category } from '../Panel/Panel';

type FiltersType = {
	changeCategory: (val: Category) => void;
	activeCategory: Category;
};

const FILTER_BUTTONS: { id: number; label: Category }[] = [
	{ id: 1, label: 'All' },
	{ id: 2, label: 'Active' },
	{ id: 3, label: 'Done' }
];

export function Filters({ changeCategory, activeCategory }: FiltersType) {
	return (
		<div className={styles.filters}>
			{FILTER_BUTTONS.map(({ id, label }) => {
				return (
					<CategoryButton
						key={id}
						value={label}
						changeCategory={changeCategory}
						activeCategory={activeCategory}>
						{label}
					</CategoryButton>
				);
			})}
		</div>
	);
}
