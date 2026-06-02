import styles from './PrimaryButton.module.css';
import type { ReactNode } from 'react';

type PrimaryButtonProps = {
	children: ReactNode;
	disabled: boolean;
	type: 'submit' | 'button';
};

export function PrimaryButton({ children, disabled, type }: PrimaryButtonProps) {
	return (
		<button className={styles.btn} disabled={disabled} type={type}>
			{children}
		</button>
	);
}
