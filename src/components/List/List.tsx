import styles from './List.module.css';
import { Filters } from '../Filters/Filters';
import { TodoItem } from '../TodoItem/TodoItem';

type ListProps = {
	todoData: { id: number; content: string; done: boolean; editing: boolean }[];
	completeTodo: (val: number) => void;
	undoTodo: (val: number) => void;
	deleteTodo: (val: number) => void;
	switchOnEditing: (val: number) => void;
	switchOffEditing: () => void;
	updateTodo: (val: string, val2: number) => void;
};

export function List({
	todoData,
	completeTodo,
	undoTodo,
	deleteTodo,
	switchOnEditing,
	switchOffEditing,
	updateTodo
}: ListProps) {
	return (
		<div className={styles.list}>
			
			<ul>
				{todoData.map(({ id, content, done, editing }) => {
					return (
						<TodoItem
							key={id}
							id={id}
							content={content}
							done={done}
							editing={editing}
							completeTodo={completeTodo}
							undoTodo={undoTodo}
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
