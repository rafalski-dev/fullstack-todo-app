import styles from './Register.module.css';
import { AuthHeading } from '../AuthHeading/AuthHeading';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { signUpSchema, type SignUpFormType } from '../../validation/signUpSchema';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Error } from '../Error/Error';
import { useNavigate } from 'react-router-dom';

export function Register() {
	const [authError, setAuthError] = useState('');
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<SignUpFormType>({
		resolver: zodResolver(signUpSchema) as unknown as Resolver<SignUpFormType>,
		defaultValues: {
			email: '',
			password: '',
			name: '',
			surname: ''
		}
	});

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
		reset();
		navigate('/auth/register-success');
	}

	function onSubmit(data: SignUpFormType) {
		handleCreateAccount(data);
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
						key={'password-signup'}
						register={register('password')}
						name='password'
						placeholder='********'
						type='password'
						autoComplete={'new-password'}
						error={errors.password?.message}
					/>
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

					<div className={styles.buttonBox}>
						<Button variant='primary' type='submit'>
							Sign Up
						</Button>
						<Button variant='secondary' path='/auth' type='button'>
							Back to Sign In
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
