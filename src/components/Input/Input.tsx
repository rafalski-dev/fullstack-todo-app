import type { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.css';

type InputProps = {
	register: UseFormRegisterReturn;
	name: string;
	placeholder: string;
	type: string;
	error: string | undefined;
	autoComplete: 'new-password' | 'current-password' | 'email' | 'name' | 'surname';
};

export function Input({ register, name, placeholder, type, autoComplete, error }: InputProps) {
	return (
		<div className={styles.container}>
			<label htmlFor={name}>{name}</label>
			<input
				className={`${error ? styles.inputError : styles.input}`}
				{...register}
				id={name}
				placeholder={placeholder}
				type={type}
				autoComplete={autoComplete}
			/>
			<div className={styles.error}>{error}</div>
		</div>
	);
}
