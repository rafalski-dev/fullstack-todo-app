import styles from './RegisterSuccess.module.css';
import { Button } from '../Button/Button';
import { IconCircleCheck } from '@tabler/icons-react';

export function RegisterSuccess() {
	return (
		<section className={styles.box}>
			<div className={styles.card}>
				<IconCircleCheck size={60} color='#f5b544' strokeWidth={1.3} />
				<h1>Account created!</h1>
				<p>Check your email to confirm your account, then sign in.</p>
				<Button variant='primary' path='/auth' textBlack>
					Go to Sign In
				</Button>
			</div>
		</section>
	);
}
