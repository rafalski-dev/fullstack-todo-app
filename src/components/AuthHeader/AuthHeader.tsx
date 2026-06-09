import { IconListDetails } from '@tabler/icons-react';
import styles from './AuthHeader.module.css';

export function AuthHeader() {
	return (
		<div className={styles.authHeader}>
			<div className={styles.logo}>
				<div className={styles.icon}>
					<IconListDetails size={19} color='#0A0A0B' />
				</div>
				<h1>To Do</h1>
			</div>
			<p>Sign in to manage your tasks</p>
		</div>
	);
}
