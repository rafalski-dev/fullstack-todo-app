import { useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';
import { Spinner } from '../Spinner/Spinner';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ children }: { children: React.ReactNode }) {
	const { session, isChecking } = useContext(SessionContext);
	if (isChecking) return <Spinner />;
	if (session) return <Navigate to='/app' />;

	return children;
}
