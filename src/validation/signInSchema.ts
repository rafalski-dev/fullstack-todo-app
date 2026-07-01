import { z } from 'zod';

export const signInSchema = z.object({
	email: z.string().min(1, 'Provide email address').email('Provide correct address email'),
	password: z.string().min(1, 'Provide password').max(36, 'Password to long')
});

export type SignInFormType = z.infer<typeof signInSchema>;
