import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonProps = {
	children: string;
	variant: 'primary' | 'secondary';
	type: 'submit' | 'button';
	onClick?: () => void;
	disabled?: boolean;
	path?: string;
};

export function Button({ children, variant, type, onClick, disabled, path }: ButtonProps) {
	const className = `${variant === 'primary' ? styles.primary : styles.secondary} ${styles.btn}`;

	return (
		<>
			{path ? (
				<Link className={className} to={path}>
					{children}
				</Link>
			) : (
				<button className={className} type={type} onClick={onClick} disabled={disabled}>
					{children}
				</button>
			)}
		</>
	);
}
