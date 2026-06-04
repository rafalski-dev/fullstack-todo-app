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

	function tasksCounter(chooseValue: string) {
		const numberOfTasks = todoData;
		if (chooseValue === 'total') return numberOfTasks.length;
		if (chooseValue === 'completed') return numberOfTasks.filter(todo => todo.done).length;
		if (chooseValue === 'left') return numberOfTasks.filter(todo => !todo.done).length;
	}

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

	function completeTodo(id: number) {
		setTodoData(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, done: true };
				}
				return todo;
			})
		);
		console.log(id);
	}

	function undoTodo(id: number) {
		setTodoData(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, done: false };
				}
				return todo;
			})
		);
		console.log(id);
	}

	function deleteTodo(id: number) {
		setTodoData(prevTodos => prevTodos.filter(todo => todo.id !== id));
	}

	function switchOnEditing(id: number) {
		setTodoData(prevTodo =>
			prevTodo.map(todo => {
				if (todo.id === id) {
					return { ...todo, editing: true };
				}
				return { ...todo, editing: false }; // Just single todo editable
			})
		);
	}

	function switchOffEditing() {
		setTodoData(prevTodo => prevTodo.map(todo => ({ ...todo, editing: false })));
	}

	function updateTodo(updatedContent: string, id: number) {
		setTodoData(prevTodo =>
			prevTodo.map(todo => {
				if (todo.id === id) {
					return { ...todo, content: updatedContent };
				}
				return todo;
			})
		);
	}

	function clearCompletedTasks() {
		setTodoData(prevTodo => prevTodo.filter(todo => todo.done !== true));
	}

	return (
		<div className={styles.panel}>
			<Header tasksCounter={tasksCounter} />
			<Form addTodo={addTodo} />
			<List
				todoData={todoData}
				completeTodo={completeTodo}
				undoTodo={undoTodo}
				deleteTodo={deleteTodo}
				switchOnEditing={switchOnEditing}
				switchOffEditing={switchOffEditing}
				updateTodo={updateTodo}
			/>
			<Footer clearCompletedTasks={clearCompletedTasks} tasksCounter={tasksCounter} />
		</div>
	);
}
