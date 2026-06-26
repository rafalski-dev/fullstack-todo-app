import { IconCheck } from '@tabler/icons-react';
import styles from './Preview.module.css';
const PREVIEW_TASKS = [
	{ id: 1, content: 'Morning workout', done: true },
	{ id: 2, content: 'Finish hero section', done: false },
	{ id: 3, content: 'Collect parcel', done: false }
];
export function Preview() {
	const completedCount = PREVIEW_TASKS.filter(task => task.done).length;
	return (
		<div className={styles.preview}>
			<div className={styles.previewHeader}>
				<span className={styles.previewTitle}>Today</span>
				<span className={styles.previewCount}>
					{completedCount} / {PREVIEW_TASKS.length} done
				</span>
			</div>
			<ul className={styles.previewList}>
				{PREVIEW_TASKS.map(task => (
					<li key={task.id} className={styles.previewItem}>
						<span className={`${styles.checkbox} ${task.done ? styles.done : ''}`}>
							<IconCheck />
						</span>
						<p>{task.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
