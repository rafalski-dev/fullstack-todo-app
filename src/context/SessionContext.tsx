import type { Session } from '@supabase/supabase-js';
import { createContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type SessionContextValue = {
	session: Session | null;
	isChecking: boolean;
};

export const SessionContext = createContext<SessionContextValue>({ session: null, isChecking: true });

export function SessionProvider({ children }: { children: React.ReactNode }) {
	const [session, setSession] = useState<Session | null>(null);
	const [isChecking, setIsChecking] = useState(true);

	useEffect(() => {
		async function checkSession() {
			const { data, error } = await supabase.auth.getSession();
			if (error) {
				console.error(error);
			} else {
				setSession(data.session);
			}
			setIsChecking(false);
		}
		checkSession();

		const { data } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => data.subscription.unsubscribe();
	}, []);

	return <SessionContext.Provider value={{ session, isChecking }}>{children}</SessionContext.Provider>;
}
