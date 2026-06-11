import styles from './Input.module.css';

type InputProps = {
	name: string;
	placeholder: string;
	type: string;
	value: string;
	autoComplete: 'new-password' | 'email';
	handleInput: (val: string) => void;
};

export function Input({ name, placeholder, type, value, handleInput, autoComplete }: InputProps) {
	return (
		<div className={styles.input}>
			<label htmlFor='name'>{name}</label>
			<input
				id='name'
				placeholder={placeholder}
				type={type}
				autoComplete={autoComplete}
				value={value}
				onChange={e => handleInput(e.target.value)}
			/>
		</div>
	);
}
