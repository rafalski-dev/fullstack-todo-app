import styles from './Input.module.css';

type InputProps = {
	name: string;
	placeholder: string;
	type: string;
};

export function Input({ name, placeholder, type }: InputProps) {
	return (
		<div className={styles.input}>
			<label htmlFor='name'>{name}</label>
			<input id='name' placeholder={placeholder} type={type} />
		</div>
	);
}
