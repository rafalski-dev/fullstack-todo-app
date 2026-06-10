import styles from './Auth.module.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function Auth() {
	function onSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className={styles.auth}>
			<AuthHeader />
			<form className={styles.form} onSubmit={onSubmit}>
				<Input name='email' placeholder='name@example.com' type='email' />
				<Input name='password' placeholder='********' type='password' />
				<div className={styles.buttonBox}>
					<Button variant='primary' type='submit'>
						Sign In
					</Button>
					<Button variant='secondary' type='submit'>
						Create Account
					</Button>
				</div>
			</form>
		</div>
	);
}
