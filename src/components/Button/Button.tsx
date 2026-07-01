import { Link } from 'react-router-dom';
import styles from './Button.module.css';

type ButtonProps = {
	children: string;
	variant: 'primary' | 'secondary';
	type?: 'submit' | 'button';
	onClick?: () => void;
	disabled?: boolean;
	path?: string;
	textBlack?: boolean;
};

export function Button({ children, variant, type = 'button', onClick, disabled, path, textBlack }: ButtonProps) {
	const className = `${variant === 'primary' ? styles.primary : styles.secondary} ${styles.btn}`;

	return (
		<>
			{path ? (
				<Link className={`${className} ${textBlack ? styles.textBlack : ''}`} to={path}>
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
