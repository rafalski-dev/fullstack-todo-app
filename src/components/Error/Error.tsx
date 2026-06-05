import styles from './Error.module.css';

type ErrorProps = {
	children: React.ReactNode;
};

export function Error({ children }: ErrorProps) {
	return <div className={styles.error}>{children}</div>;
}
