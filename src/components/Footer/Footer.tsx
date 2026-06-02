import styles from './Footer.module.css';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<span>2 tasks left</span>
			<button>Clear completed</button>
		</footer>
	);
}
