import styles from './Auth.module.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export function Auth() {
	const [isRegistering, setIsRegistering] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

	function handleEmail(inputValue: string) {
		setEmail(inputValue);
	}

	function handlePassword(inputValue: string) {
		setPassword(inputValue);
	}

	function handleName(inputValue: string) {
		setName(inputValue);
	}

	function handleSurname(inputValue: string) {
		setSurname(inputValue);
	}

	async function handleSigningIn(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const signInValues = {
			email,
			password
		};
		const { data, error } = await supabase.auth.signInWithPassword(signInValues);
	}

	async function handleCreateAccount(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const signUpValues = {
			email,
			password,
			options: {
				data: {
					name,
					surname
				}
			}
		};

		const { data, error } = await supabase.auth.signUp(signUpValues);

		if (!error) setIsRegistering(false);
	}

	return (
		<div className={styles.auth}>
			<AuthHeader />
			<form className={styles.form} onSubmit={isRegistering ? handleCreateAccount : handleSigningIn}>
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
				{isRegistering && (
					<>
						<Input
							name='name'
							placeholder='name'
							type='text'
							autoComplete='name'
							value={name}
							handleInput={handleName}
						/>
						<Input
							name='surname'
							placeholder='surname'
							autoComplete='surname'
							type='text'
							value={surname}
							handleInput={handleSurname}
						/>
					</>
				)}
				<div className={styles.buttonBox}>
					{isRegistering ? (
						<>
							<Button variant='primary' type='submit'>
								Sign Up
							</Button>
							<Button variant='secondary' type='button' onClick={() => setIsRegistering(false)}>
								Back to Sign In
							</Button>
						</>
					) : (
						<>
							<Button variant='primary' type='submit'>
								Sign In
							</Button>
							<Button variant='secondary' type='button' onClick={() => setIsRegistering(true)}>
								Create Account
							</Button>
						</>
					)}
				</div>
			</form>
		</div>
	);
}
