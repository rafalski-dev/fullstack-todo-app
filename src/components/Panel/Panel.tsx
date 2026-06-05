import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Form } from '../Form/Form';
import { Header } from '../Header/Header';
import { List } from '../List/List';
import styles from './Panel.module.css';
import { supabase } from '../../lib/supabase';

type TodoData = {
	id: number;
	content: string;
	done: boolean;
	editing: boolean;
};

export function Panel() {
	const [todoData, setTodoData] = useState<TodoData[]>([]);
	const [isLoadingShown, setIsLoadingShown] = useState(true);

	const totalNumberOfTasks: number = todoData.length;
	const completedNumberOfTasks: number = todoData.filter(todo => todo.done).length;
	const tobedoneNumberOfTasks: number = todoData.filter(todo => !todo.done).length;

	useEffect(() => {
		async function fetchTodos() {
			const { data, error } = await supabase.from('todos').select();

			if (error) {
				console.error(`Błąd podczas pobierania danych, numer błędu: ${error.code}`);
				setIsLoadingShown(false);
				return;
			}
			setTodoData(data.map(todo => ({ ...todo, editing: false })));
			setIsLoadingShown(false);
		}

		fetchTodos();
	}, []);

	async function addTodo(newTodo: string) {
		const { data, error } = await supabase
			.from('todos')
			.insert([{ content: newTodo }])
			.select();

		if (error) {
			console.error(`Błąd podczas dodawania danych, numer błędu: ${error.code}`);
			return;
		} else {
			setTodoData(prevTodo => [...prevTodo, { ...data[0], editing: false }]);
		}
	}

	async function deleteTodo(id: number) {
		const { error } = await supabase.from('todos').delete().eq('id', id);
		if (error) {
			console.error(`Błąd podczas usuwania danych, numer błędu: ${error.code}`);
			return;
		} else {
			setTodoData(prevTodo => prevTodo.filter(todo => todo.id !== id));
		}
	}

	function toggleTodo(id: number) {
		setTodoData(prevTodos =>
			prevTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, done: !todo.done };
				}
				return todo;
			})
		);
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
			<Header totalNumberOfTasks={totalNumberOfTasks} completedNumberOfTasks={completedNumberOfTasks} />
			<Form addTodo={addTodo} />
			<List
				isLoadingShown={isLoadingShown}
				todoData={todoData}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
				switchOnEditing={switchOnEditing}
				switchOffEditing={switchOffEditing}
				updateTodo={updateTodo}
			/>
			<Footer clearCompletedTasks={clearCompletedTasks} tobedoneNumberOfTasks={tobedoneNumberOfTasks} />
		</div>
	);
}
