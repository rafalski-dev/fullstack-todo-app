import type { Category } from '../../types/types';
import styles from './CategoryButton.module.css';

type CategoryButtonProps = {
	children: string;
	value: Category;
	changeCategory: (val: Category) => void;
	activeCategory: Category;
};

export function CategoryButton({ children, value, changeCategory, activeCategory }: CategoryButtonProps) {
	return (
		<button
			onClick={() => changeCategory(value)}
			className={`${styles.btn} ${activeCategory === value ? styles.active : ''}`}>
			{children}
		</button>
	);
}
