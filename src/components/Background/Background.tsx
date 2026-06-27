import styles from './Background.module.css';

export function Background() {
	return (
		<div className={styles.background} aria-hidden='true'>
			<div className={`${styles.orb} ${styles.orb1}`} />
			<div className={`${styles.orb} ${styles.orb2}`} />
			<div className={`${styles.orb} ${styles.orb3}`} />
		</div>
	);
}
