import styles from './AuthPage.module.css';
import { Background } from '../../components/Background/Background';
import { Outlet } from 'react-router-dom';

export function AuthPage() {
	return (
		<section className={styles.authPage}>
			<Background />
			<Outlet />
		</section>
	);
}
