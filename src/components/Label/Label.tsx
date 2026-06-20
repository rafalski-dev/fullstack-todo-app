import styles from './Label.module.css';

type LabelProps = { children: React.ReactNode };

export function Label({ children }: LabelProps) {
	return <div className={styles.label}>{children}</div>;
}
