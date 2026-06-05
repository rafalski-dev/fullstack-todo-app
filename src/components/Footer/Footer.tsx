import styles from './Footer.module.css';

type FooterProps = {
	clearCompletedTasks: () => void;
	tobedoneNumberOfTasks: number;
};

export function Footer({ clearCompletedTasks, tobedoneNumberOfTasks }: FooterProps) {
	return (
		<footer className={styles.footer}>
			<span>{tobedoneNumberOfTasks} tasks left</span>
			<button onClick={clearCompletedTasks}>Clear completed</button>
		</footer>
	);
}
