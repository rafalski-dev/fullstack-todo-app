import styles from './Button.module.css';

type ButtonProps = {
	children: string;
	variant: string;
	type: 'submit' | 'button';
};

export function Button({ children, variant, type }: ButtonProps) {
	return (
		<button className={`${variant === 'primary' ? styles.primary : styles.secondary}`} type={type}>
			{children}
		</button>
	);
}
