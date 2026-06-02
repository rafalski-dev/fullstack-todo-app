import styles from './CategoryButton.module.css';
import type { ReactNode } from 'react';

type CategoryButtonProps = {
	children: ReactNode;
};

export function CategoryButton({ children }: CategoryButtonProps) {
	return <button className={styles.btn}>{children}</button>;
}
