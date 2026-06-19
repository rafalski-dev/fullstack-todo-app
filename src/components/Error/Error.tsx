import styles from './Error.module.css';
import { IconAlertSquare } from '@tabler/icons-react';

type ErrorProps = {
	children: React.ReactNode;
};

export function Error({ children }: ErrorProps) {
	return (
		<div className={styles.error}>
			<IconAlertSquare strokeWidth={1.5} />
			{children}
		</div>
	);
}
