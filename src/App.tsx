import styles from './App.module.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Panel } from './components/Panel/Panel';
import { Error } from './components/Error/Error';
import { Auth } from './components/Auth/Auth';
import { supabase } from './lib/supabase';
import { Header } from './components/Header/Header';

function App() {
	const [error, setError] = useState('');
	const [session, setSession] = useState<Session | null>(null);

	type AppError = {
		code: string | number;
	};

	const handleError = useCallback((msg: string, err: AppError) => {
		setError(`${msg} ${err.code}`);
		setTimeout(() => setError(''), 3000);
		console.error(`${msg} ${err.code}`);
	}, []);

	useEffect(() => {
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			console.log(data.session);
		});

		const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
			console.log(session);
			setSession(session);
		});

		return () => listener.subscription.unsubscribe();
	}, []);

	return (
		<main className={styles.container} >
			{session && <Header />}
			{error && <Error>{error}</Error>}
			{session ? <Panel onError={handleError} /> : <Auth />}
		</main>
	);
}

export default App;
