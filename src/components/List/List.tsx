import styles from './List.module.css';

import { TodoItem } from '../TodoItem/TodoItem';
import { Spinner } from '../Spinner/Spinner';
import { Filters } from '../Filters/Filters';

type ListProps = {
	todoData: { id: number; content: string; done: boolean; editing: boolean }[];
	toggleTodo: (val: number, val2: boolean) => void;
	deleteTodo: (val: number) => void;
	switchOnEditing: (val: number) => void;
	switchOffEditing: () => void;
	updateTodo: (val: string, val2: number) => void;
	isLoadingShown: boolean;
	changeCategory: (val: string) => void;
	activeCategory: string;
};

export function List({
	todoData,
	toggleTodo,
	switchOnEditing,
	switchOffEditing,
	updateTodo,
	deleteTodo,
	isLoadingShown,
	changeCategory,
	activeCategory
}: ListProps) {
	const filteredTodos = todoData.filter(todo => {
		if (activeCategory === 'Active') return todo.done === false;
		if (activeCategory === 'Done') return todo.done === true;
		return true;
	});

	if (isLoadingShown) return <Spinner />;

	return (
		<div className={styles.list}>
			<Filters changeCategory={changeCategory} activeCategory={activeCategory} />
			<ul>
				{filteredTodos.map(({ id, content, done, editing }) => {
					return (
						<TodoItem
							key={id}
							id={id}
							content={content}
							done={done}
							editing={editing}
							toggleTodo={toggleTodo}
							deleteTodo={deleteTodo}
							switchOnEditing={switchOnEditing}
							switchOffEditing={switchOffEditing}
							updateTodo={updateTodo}
						/>
					);
				})}
			</ul>
		</div>
	);
}
