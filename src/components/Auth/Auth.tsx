import styles from './Auth.module.css';
import { AuthHeader } from '../AuthHeader/AuthHeader';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { signInSchema } from '../../validation/signInSchema';
import { signUpSchema, type SignUpFormType } from '../../validation/signUpSchema';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Error } from '../Error/Error';

export function Auth() {
	const [isRegistering, setIsRegistering] = useState(false);
	const [authError, setAuthError] = useState('');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm<SignUpFormType>({
		resolver: zodResolver(isRegistering ? signUpSchema : signInSchema) as unknown as Resolver<SignUpFormType>
	});

	async function handleSigningIn(signInData: { email: string; password: string }) {
		const { email, password } = signInData;
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			setAuthError(error.message);
			setTimeout(() => setAuthError(''), 8000);
		}
	}

	async function handleCreateAccount(signUpData: SignUpFormType) {
		const { email, password, name, surname } = signUpData;
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: { name, surname }
			}
		});

		if (error) {
			setAuthError(error.message);
			setTimeout(() => setAuthError(''), 8000);
			return;
		}

		setIsRegistering(false);
		reset();
	}

	function onSubmit(data: SignUpFormType) {
		if (isRegistering) {
			handleCreateAccount(data);
		} else {
			handleSigningIn(data);
		}
	}

	return (
		<>
			{authError && <Error>{authError}</Error>}
			<div className={styles.auth}>
				<AuthHeader />
				<form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
					<Input
						register={register('email')}
						name='email'
						placeholder='name@example.com'
						type='email'
						autoComplete='email'
						error={errors.email?.message}
					/>
					<Input
						key={isRegistering ? 'password-signup' : 'password-signin'}
						register={register('password')}
						name='password'
						placeholder='********'
						type='password'
						autoComplete={isRegistering ? 'new-password' : 'current-password'}
						error={errors.password?.message}
					/>
					{isRegistering && (
						<>
							<Input
								register={register('name')}
								name='name'
								placeholder='name'
								type='text'
								autoComplete='name'
								error={errors.name?.message}
							/>
							<Input
								register={register('surname')}
								name='surname'
								placeholder='surname'
								type='text'
								autoComplete='surname'
								error={errors.surname?.message}
							/>
						</>
					)}
					<div className={styles.buttonBox}>
						{isRegistering ? (
							<>
								<Button variant='primary' type='submit'>
									Sign Up
								</Button>
								<Button
									variant='secondary'
									type='button'
									onClick={() => {
										setIsRegistering(false);
										reset();
									}}>
									Back to Sign In
								</Button>
							</>
						) : (
							<>
								<Button variant='primary' type='submit' disabled={isSubmitting}>
									{isSubmitting ? 'Signing In' : 'Sign In'}
								</Button>
								<Button
									variant='secondary'
									type='button'
									onClick={() => {
										setIsRegistering(true);
										reset();
									}}>
									Create Account
								</Button>
							</>
						)}
					</div>
				</form>
			</div>
		</>
	);
}
