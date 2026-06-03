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

type TodoData = {
	id: number;
	content: string;
	done: boolean;
	editing: boolean;
};

export function Panel() {
	const [todoData, setTodoData] = useState<TodoData[]>(initialData);

	function addTodo(newTodo: string) {
		setTodoData(prevTodos => {
			return [
				...prevTodos,
				{
					id: prevTodos.length === 0 ? 0 : prevTodos.at(-1).id + 1,
					content: newTodo,
					done: false,
					editing: false
				}
			];
		});
	}

	return (
		<div className={styles.panel}>
			<Header />
			<Form addTodo={addTodo} />
			<List todoData={todoData} />
			<Footer />
		</div>
	);
}
