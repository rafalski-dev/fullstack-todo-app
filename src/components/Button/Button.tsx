import styles from './Button.module.css';

type ButtonProps = {
	children: string;
	variant: string;
	type: 'submit' | 'button';
	onClick?: () => void;
};

export function Button({ children, variant, type, onClick }: ButtonProps) {
	return (
		<button
			className={`${variant === 'primary' ? styles.primary : styles.secondary} ${styles.btn}`}
			type={type}
			onClick={onClick}>
			{children}
		</button>
	);
}
