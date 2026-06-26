import { z } from 'zod';

export const signUpSchema = z.object({
	email: z.string().min(1, 'Provide email address').email('Provide correct address email'),
	password: z
		.string()
		.min(8, 'Password must be at least 8 characters')
		.max(16, 'Password must be at most 16 characters')
		.regex(
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/,
			'Password must contain at least one uppercase letter, one digit and one special character'
		),
	name: z.string().min(1, 'Provide name'),
	surname: z.string().min(1, 'Provide surname')
});

export type SignUpFormType = z.infer<typeof signUpSchema>;
