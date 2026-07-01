import type { UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.css';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

type InputProps = {
	register: UseFormRegisterReturn;
	name: string;
	placeholder: string;
	type: string;
	error: string | undefined;
	autoComplete?: 'new-password' | 'current-password' | 'email' | 'name' | 'surname';
	isPasswordShown?: boolean;
	onEyeButtonClick?: () => void;
};

const iconSize = 20;

export function Input({
	register,
	name,
	placeholder,
	type,
	autoComplete,
	error,
	isPasswordShown,
	onEyeButtonClick
}: InputProps) {
	return (
		<div className={styles.container}>
			<label htmlFor={name}>{name}</label>
			<div className={styles.inputBox}>
				<input
					className={`${error ? styles.inputError : styles.input}`}
					{...register}
					id={name}
					placeholder={placeholder}
					type={type}
					autoComplete={autoComplete}
				/>
				{name === 'newPassword' && (
					<button onClick={onEyeButtonClick} className={styles.eyeBtn} type='button'>
						{isPasswordShown ? <IconEyeOff size={iconSize} /> : <IconEye size={iconSize} />}
					</button>
				)}
				{name === 'password' && (
					<button onClick={onEyeButtonClick} className={styles.eyeBtn} type='button'>
						{isPasswordShown ? <IconEyeOff size={iconSize} /> : <IconEye size={iconSize} />}
					</button>
				)}
			</div>

			<div className={styles.error}>{error}</div>
		</div>
	);
}
