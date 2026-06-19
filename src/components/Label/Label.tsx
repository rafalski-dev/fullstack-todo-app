import styles from './Label.module.css';

type LabelProps = { children: string };

export function Label({ children }: LabelProps) {
	return <div className={styles.label}>{children}</div>;
}
