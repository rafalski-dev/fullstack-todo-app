import { useCallback, useState } from 'react';
import { Panel } from './components/Panel/Panel';
import { Error } from './components/Error/Error';

function App() {
	const [error, setError] = useState('');

	type AppError = {
		code: string | number;
	};

	const handleError = useCallback((msg: string, err: AppError) => {
		setError(`${msg} ${err.code}`);
		setTimeout(() => setError(''), 3000);
		console.error(`${msg} ${err.code}`);
	}, []);

	return (
		<main>
			{error && <Error>{error}</Error>}
			<Panel onError={handleError} />
		</main>
	);
}

export default App;
