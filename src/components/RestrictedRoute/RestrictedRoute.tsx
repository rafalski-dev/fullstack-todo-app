import { useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';
import { Navigate } from 'react-router-dom';
import { Spinner } from '../Spinner/Spinner';

export function RestrictedRoute({ children }: { children: React.ReactNode }) {
	const { session, isChecking } = useContext(SessionContext);
	if (isChecking) return <Spinner />;
	if (!session) return <Navigate to='/auth' />;
	return children;
}
