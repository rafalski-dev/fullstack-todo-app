import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import styles from './Form.module.css';
import { IconPlus } from '@tabler/icons-react';

export function Form() {
	function onSubmit(e) {
		e.preventDefault();
	}
	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<input name='todo' id='todo' placeholder='What needs doing?' />

			<PrimaryButton disabled={false} type='submit'>
				<IconPlus size={20} strokeWidth={3} />
			</PrimaryButton>
		</form>
	);
}
