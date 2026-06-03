import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { List } from '../List/List';
import styles from './Panel.module.css';

const initialData = [
	{ id: 1, content: 'Do the shopping', done: false, editing: false },
	{ id: 2, content: 'Clean my room', done: true, editing: false },
	{ id: 3, content: 'Do the laundry', done: false, editing: false }
];

export function Panel() {
	const [todoData, setTodoData] = useState(initialData);

	
	
	return (
		<div className={styles.panel}>
			<Header />
			<Form />
			<List todoData={todoData} />
			<Footer />
		</div>
	);
}
