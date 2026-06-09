import styles from './Auth.module.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Input } from '../Input/Input';

export function Auth() {
	return (
		<div className={styles.auth}>
			<AuthHeader />
			<form className={styles.form}>
				<Input name='email' placeholder='name@example.com' type='email' />
				<Input name='password' placeholder='********' type='password' />
			</form>
		</div>
	);
}
