import { useEffect, useRef, useState } from 'react';
import styles from './TodoItem.module.css';
import { IconPencil, IconTrash, IconCheck } from '@tabler/icons-react';

type TodoItem = {
	id: number;
	content: string;
	done: boolean;
	editing: boolean;
	toggleTodo: (val: number) => void;
	deleteTodo: (val: number) => void;
	switchOnEditing: (val: number) => void;
	switchOffEditing: () => void;
	updateTodo: (val: string, val2: number) => void;
};

export function TodoItem({
	id,
	content,
	done,
	editing,
	toggleTodo,
	deleteTodo,
	switchOnEditing,
	switchOffEditing,
	updateTodo
}: TodoItem) {
	const [valueToEdit, setValueToEdit] = useState(content);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (editing && inputRef.current) {
			inputRef.current.focus();
		}
	}, [editing]);

	return (
		<li className={styles.item}>
			<div className={styles.leftBox}>
				<button
					onClick={() => {
						toggleTodo(id);
					}}
					className={`${styles.checkbox} ${done ? styles.done : ''}`}>
					<IconCheck />
				</button>
				{editing ? (
					<input
						ref={inputRef}
						value={valueToEdit}
						onBlur={() => {
							updateTodo(valueToEdit, id);
							switchOffEditing();
						}}
						onChange={e => setValueToEdit(e.target.value)}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								updateTodo(valueToEdit, id);
								switchOffEditing();
							}
							if (e.key === 'Escape') {
								setValueToEdit(content);
								switchOffEditing();
							}
						}}
					/>
				) : (
					<p>{content}</p>
				)}
			</div>
			<div className={styles.rightBox}>
				{!editing && (
					<button
						className={styles.edit}
						onClick={() => {
							switchOnEditing(id);
						}}>
						<IconPencil size={19} strokeWidth={2} />
					</button>
				)}
				<button className={styles.delete} onClick={() => deleteTodo(id)}>
					<IconTrash size={19} strokeWidth={2} />
				</button>
			</div>
		</li>
	);
}
