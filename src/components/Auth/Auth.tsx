import styles from './Auth.module.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export function Auth() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handleEmail(inputValue: string) {
		setEmail(inputValue);
	}

	function handlePassword(inputValue: string) {
		setPassword(inputValue);
	}

	async function handleSigningIn(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const signInValues = {
			email,
			password
		};
		const { data, error } = await supabase.auth.signInWithPassword(signInValues);
	}

	async function handleCreateAccount() {
		const signUpValues = {
			email,
			password
		};

		const { data, error } = await supabase.auth.signUp(signUpValues);
	}

	return (
		<div className={styles.auth}>
			<AuthHeader />
			<form className={styles.form} onSubmit={handleSigningIn}>
				<Input
					name='email'
					placeholder='name@example.com'
					type='email'
					autoComplete='email'
					value={email}
					handleInput={handleEmail}
				/>
				<Input
					name='password'
					placeholder='********'
					type='password'
					autoComplete='new-password'
					value={password}
					handleInput={handlePassword}
				/>
				<div className={styles.buttonBox}>
					<Button variant='primary' type='submit'>
						Sign In
					</Button>
					<Button variant='secondary' type='button' onClick={handleCreateAccount}>
						Create Account
					</Button>
				</div>
			</form>
		</div>
	);
}
