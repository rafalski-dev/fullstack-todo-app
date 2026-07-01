import { IconListDetails } from '@tabler/icons-react';
import styles from './AuthHeader.module.css';
import { useLocation } from 'react-router-dom';

export function AuthHeading() {
	const path = useLocation();
	const choseTitle = path.pathname === '/auth' ? 'Sign in to manage your tasks' : 'Sign up to manage your tasks';
	return (
		<div className={styles.authHeader}>
			<div className={styles.logo}>
				<div className={styles.icon}>
					<IconListDetails size={19} color='#0A0A0B' />
				</div>
				<h1>To Do</h1>
			</div>
			<p>{choseTitle}</p>
		</div>
	);
}
