import styles from './Footer.module.css';

type FooterProps = {
	clearCompletedTasks: () => void;
	tasksCounter: (val: string) => string;
};

export function Footer({ clearCompletedTasks, tasksCounter }: FooterProps) {
	return (
		<footer className={styles.footer}>
			<span>{tasksCounter('left')} tasks left</span>
			<button onClick={clearCompletedTasks}>Clear completed</button>
		</footer>
	);
}
