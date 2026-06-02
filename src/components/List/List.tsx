import styles from './List.module.css';
import { Filters } from '../Filters/Filters';
import { TodoItem } from '../TodoItem/TodoItem';

type ListProps = {
	todoData: { id: number; content: string; done: boolean; editing: boolean }[];
};

export function List({ todoData }: ListProps) {
	return (
		<div className={styles.list}>
			<Filters />
			<ul>
				{todoData.map(({ id, content, done, editing }) => {
					return <TodoItem key={id} id={id} content={content} done={done} />;
				})}
			</ul>
		</div>
	);
}
