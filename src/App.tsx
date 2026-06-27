import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { SessionContext } from './context/SessionContext';
import { useContext } from 'react';

function App() {
	const { session } = useContext(SessionContext);
	return (
		<main className={styles.container}>
			<Header session={session} />
			<Outlet />
		</main>
	);
}

export default App;
