import { useCallback, useContext, useState } from 'react';
import { Panel } from '../../components/Panel/Panel';
import { Error } from '../../components/Error/Error';
import type { AppError } from '../../types/types';
import { SessionContext } from '../../context/SessionContext';
import { Background } from '../../components/Background/Background';
import styles from './TodoAppPage.module.css';

export function TodoAppPage() {
	const [error, setError] = useState('');
	const { session } = useContext(SessionContext);

	const handleError = useCallback((msg: string, err: AppError) => {
		setError(`${msg} ${err.code}`);
		setTimeout(() => setError(''), 6000);
		console.error(`${msg} ${err.code}`);
	}, []);

	return (
		<section className={styles.todoApp}>
			<Background />
			{error && <Error>{error}</Error>}
			<Panel onError={handleError} session={session} />
		</section>
	);
}
