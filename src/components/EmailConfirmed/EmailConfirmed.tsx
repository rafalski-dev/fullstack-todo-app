import styles from './EmailConfirmed.module.css';
import { Button } from '../Button/Button';
import { IconMailCheck } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Spinner } from '../Spinner/Spinner';

export function EmailConfirmed() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
			if (session) {
				await supabase.auth.signOut({ scope: 'local' });
				setReady(true);
			}
		});

		supabase.auth.getSession().then(async ({ data }) => {
			if (data.session) await supabase.auth.signOut({ scope: 'local' });
			setReady(true);
		});

		return () => data.subscription.unsubscribe();
	}, []);

	if (!ready) return <Spinner />;
	return (
		<section className={styles.box}>
			<div className={styles.card}>
				<IconMailCheck size={60} color='#f5b544' strokeWidth={1.3} />
				<h1>Email confirmed!</h1>
				<p>Go to your authentication page and sign in.</p>
				<Button variant='primary' path='/auth' textBlack>
					Go to Sign In
				</Button>
			</div>
		</section>
	);
}
