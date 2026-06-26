import styles from './Button.module.css';

type ButtonProps = {
	children: string;
	variant: 'primary' | 'secondary';
	type: 'submit' | 'button';
	onClick?: () => void;
	disabled?: boolean;
};

export function Button({ children, variant, type, onClick, disabled }: ButtonProps) {
	return (
		<button
			className={`${variant === 'primary' ? styles.primary : styles.secondary} ${styles.btn}`}
			type={type}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	);
}
