import { useCallback, useEffect, useState } from 'react';
import { Panel } from '../../components/Panel/Panel';
import { Error } from '../../components/Error/Error';
import { Auth } from '../../components/Auth/Auth';
import { supabase } from '../../lib/supabase';
import { TodoHeader } from '../../components/TodoHeader/TodoHeader';
import { type Session } from '@supabase/supabase-js';
import styles from './TodoApp.module.css';
import { Spinner } from '../../components/Spinner/Spinner';
import type { AppError } from '../../types/types';

export function TodoApp() {
	const [error, setError] = useState('');
	const [session, setSession] = useState<Session | null>(null);
	const [isChecking, setIsChecking] = useState(true);

	const handleError = useCallback((msg: string, err: AppError) => {
		setError(`${msg} ${err.code}`);
		setTimeout(() => setError(''), 6000);
		console.error(`${msg} ${err.code}`);
	}, []);

	useEffect(() => {
		async function checkSession() {
			const { data, error } = await supabase.auth.getSession();
			if (error) {
				console.error(error);
			} else {
				setSession(data.session);
			}
			setIsChecking(false);
		}
		checkSession();

		const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => listener.subscription.unsubscribe();
	}, []);
	return (
		<section className={styles.todoApp}>
			<div className={`${styles.orb} ${styles.orb1}`} />
			<div className={`${styles.orb} ${styles.orb2}`} />
			<div className={`${styles.orb} ${styles.orb3}`} />
			{!isChecking && <TodoHeader session={session} />}
			{error && <Error>{error}</Error>}
			{isChecking ? <Spinner /> : session ? <Panel onError={handleError} session={session} /> : <Auth />}
		</section>
	);
}
