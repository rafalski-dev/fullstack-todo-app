import styles from './TodoItem.module.css';
import { IconPencil, IconTrash, IconCheck } from '@tabler/icons-react';

type TodoItem = {
	id: number;
	content: string;
	done: boolean;
};

export function TodoItem({ id, content, done }: TodoItem) {
	return (
		<li className={styles.item}>
			<div className={styles.leftBox}>
				<button className={`${styles.checkbox} ${done ? styles.done : ''}`}>
					<IconCheck />
				</button>
				<p>{content}</p>
			</div>
			<div className={styles.rightBox}>
				<button className={styles.edit}>
					<IconPencil size={19} strokeWidth={2} />
				</button>
				<button className={styles.delete}>
					<IconTrash size={19} strokeWidth={2} />
				</button>
			</div>
		</li>
	);
}
