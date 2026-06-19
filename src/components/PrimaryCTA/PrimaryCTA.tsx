import { Link } from 'react-router-dom';
import styles from './PrimaryCTA.module.css';

type PrimaryCTAProps = {
	children: React.ReactNode;
	path: string;
};

export function PrimaryCTA({ children, path }: PrimaryCTAProps) {
	return (
		<Link className={styles.btn} to={path}>
			{children}
		</Link>
	);
}
