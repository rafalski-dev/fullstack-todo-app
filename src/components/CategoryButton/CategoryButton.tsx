import styles from './CategoryButton.module.css';

type CategoryButtonProps = {
	children: string;
	changeCategory: (val: string) => void;
	activeCategory: string;
};

export function CategoryButton({ children, changeCategory, activeCategory }: CategoryButtonProps) {
	return (
		<button
			onClick={() => changeCategory(children)}
			className={`${styles.btn} ${activeCategory === children ? styles.active : ''}`}>
			{children}
		</button>
	);
}
