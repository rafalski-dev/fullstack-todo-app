import styles from './Auth.module.css';
import { AuthHeading } from '../AuthHeading/AuthHeading';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { signInSchema, type SignInFormType } from '../../validation/signInSchema';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Error } from '../Error/Error';

export function Auth() {
	const [authError, setAuthError] = useState('');
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<SignInFormType>({
		resolver: zodResolver(signInSchema) as unknown as Resolver<SignInFormType>,
		defaultValues: {
			email: '',
			password: ''
		}
	});

	async function handleSigningIn(signInData: { email: string; password: string }) {
		const { email, password } = signInData;
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			setAuthError(error.message);
			setTimeout(() => setAuthError(''), 8000);
		}
	}

	function onSubmit(data: SignInFormType) {
		handleSigningIn(data);
	}

	return (
		<section className={styles.box}>
			{authError && <Error>{authError}</Error>}
			<div className={styles.auth}>
				<AuthHeading />
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
						key='password-signin'
						register={register('password')}
						name={'password'}
						placeholder='********'
						type={isPasswordShown ? 'text' : 'password'}
						autoComplete='current-password'
						error={errors.password?.message}
						isPasswordShown={isPasswordShown}
						onEyeButtonClick={() => setIsPasswordShown(prev => !prev)}
					/>
					<div className={styles.buttonBox}>
						<Button variant='primary' type='submit'>
							Sign in
						</Button>
						<Button
							variant='secondary'
							type='button'
							path='/auth/register'
							onClick={() => {
								reset();
							}}>
							Create Account
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
