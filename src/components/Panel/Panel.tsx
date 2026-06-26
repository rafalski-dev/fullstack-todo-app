import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Form } from '../Form/Form';
import { List } from '../List/List';
import styles from './Panel.module.css';
import { supabase } from '../../lib/supabase';
import { PanelHeader } from '../PanelHeader/PanelHeader';
import type { Session } from '@supabase/supabase-js';
import type { AppError, Category, TodoData } from '../../types/types';

type PanelProps = {
	onError: (val: string, val2: AppError) => void;
	session: Session;
};

export function Panel({ onError, session }: PanelProps) {
	const [todoData, setTodoData] = useState<TodoData[]>([]);
	const [isLoadingShown, setIsLoadingShown] = useState(true);
	const [activeCategory, setActiveCategory] = useState<Category>('All');

	const totalNumberOfTasks: number = todoData.length;
	const completedNumberOfTasks: number = todoData.filter(todo => todo.done).length;
	const tobedoneNumberOfTasks: number = todoData.filter(todo => !todo.done).length;

	useEffect(() => {
		async function fetchTodos() {
			const { data, error } = await supabase.from('todos').select().order('created_at', { ascending: true });

			if (error) {
				onError('Error fetching data, error code', error);
				setIsLoadingShown(false);
				return;
			}
			setTodoData(data.map(todo => ({ ...todo, editing: false })));
			setIsLoadingShown(false);
		}

		fetchTodos();
	}, [onError]);

	async function addTodo(newTodo: string) {
		const { data, error } = await supabase
			.from('todos')
			.insert([{ content: newTodo, user_id: session.user.id }])
			.select();

		if (error) {
			onError('Error adding data, error code', error);
			return;
		} else {
			setTodoData(prevTodo => [...prevTodo, { ...data[0], editing: false }]);
		}
	}

	async function deleteTodo(id: number) {
		const { error } = await supabase.from('todos').delete().eq('id', id);
		if (error) {
			onError('Error deleting data, error code', error);
			return;
		} else {
			setTodoData(prevTodo => prevTodo.filter(todo => todo.id !== id));
		}
	}

	async function toggleTodo(id: number, done: boolean) {
		const { error } = await supabase.from('todos').update({ done: !done }).eq('id', id);

		if (error) {
			onError('Error patching data, error code', error);
			return;
		} else {
			setTodoData(prevTodos =>
				prevTodos.map(todo => {
					if (todo.id === id) {
						return { ...todo, done: !done };
					}
					return todo;
				})
			);
		}
	}

	async function updateTodo(updatedContent: string, id: number) {
		const { error } = await supabase.from('todos').update({ content: updatedContent }).eq('id', id);

		if (error) {
			onError('Error patching data, error code', error);
		} else {
			setTodoData(prevTodo =>
				prevTodo.map(todo => {
					if (todo.id === id) {
						return { ...todo, content: updatedContent };
					}
					return todo;
				})
			);
		}
	}

	async function clearCompletedTasks() {
		const { error } = await supabase.from('todos').delete().eq('done', true);

		if (error) {
			onError('Error cleaning list, error code', error);
		} else {
			setTodoData(prevTodo => prevTodo.filter(todo => todo.done !== true));
		}
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

	function changeCategory(category: Category) {
		setActiveCategory(category);
	}

	return (
		<div className={styles.panel}>
			<PanelHeader totalNumberOfTasks={totalNumberOfTasks} completedNumberOfTasks={completedNumberOfTasks} />
			<Form addTodo={addTodo} />
			<List
				isLoadingShown={isLoadingShown}
				todoData={todoData}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
				switchOnEditing={switchOnEditing}
				switchOffEditing={switchOffEditing}
				updateTodo={updateTodo}
				changeCategory={changeCategory}
				activeCategory={activeCategory}
			/>
			<Footer clearCompletedTasks={clearCompletedTasks} tobedoneNumberOfTasks={tobedoneNumberOfTasks} />
		</div>
	);
}
