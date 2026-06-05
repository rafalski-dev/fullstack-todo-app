import { useState } from 'react';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import styles from './Form.module.css';
import { IconPlus } from '@tabler/icons-react';

type FormProps = {
	addTodo: (val: string) => void;
};

export function Form({ addTodo }: FormProps) {
	const [inputValue, setInputValue] = useState('');

	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const newTodoValue = inputValue;
		addTodo(newTodoValue);
		setInputValue('');
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<input
				autoComplete='off'
				name='todo'
				id='todo'
				placeholder='What needs doing?'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>

			<PrimaryButton disabled={inputValue === ''} type='submit'>
				<IconPlus size={20} strokeWidth={3} />
			</PrimaryButton>
		</form>
	);
}
