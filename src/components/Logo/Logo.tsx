import { IconListDetails } from '@tabler/icons-react';
import styles from './Logo.module.css';

export function Logo() {
	return (
		<div className={styles.logo}>
			<div className={styles.icon}>
				<IconListDetails size={19} color='#0A0A0B' />
			</div>
			<span>To Do</span>
		</div>
	);
}
