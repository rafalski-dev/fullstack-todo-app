import styles from './AddButton.module.css';
import type { ReactNode } from 'react';

type PrimaryButtonProps = {
	children: ReactNode;
	disabled: boolean;
	type: 'submit' | 'button';
};

export function AddButton({ children, disabled, type }: PrimaryButtonProps) {
	return (
		<button className={styles.btn} disabled={disabled} type={type}>
			{children}
		</button>
	);
}
