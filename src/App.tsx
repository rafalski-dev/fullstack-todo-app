import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<main className={styles.container}>
			<Header />
			<Outlet />
		</main>
	);
}

export default App;
