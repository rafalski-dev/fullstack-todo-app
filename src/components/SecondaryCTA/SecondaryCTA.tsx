import { Link } from 'react-router-dom';
import styles from './SecondaryCTA.module.css';
type SecondaryCTAProps = {
	children: string;
	path: string;
	variant?: 'large' | 'small';
};

export function SecondaryCTA({ children, path, variant = 'small' }: SecondaryCTAProps) {
	return (
		<Link className={`${variant === 'large' ? styles.large : styles.small}`} to={path}>
			{children}
		</Link>
	);
}
