import { useEffect, useRef, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { SecondaryCTA } from '../SecondaryCTA/SecondaryCTA';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Header.module.css';
import { supabase } from '../../lib/supabase';
import { IconLogout } from '@tabler/icons-react';
import type { Session } from '@supabase/supabase-js';
import { useLocation, Link } from 'react-router-dom';

export function Header({ session }: { session: Session | null }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const firstCharName = session?.user.user_metadata.name.at(0);
	const firstCharSurname = session?.user.user_metadata.surname.at(0);
	const menuRef = useRef<HTMLDivElement>(null);
	const { pathname } = useLocation();
	const redirectRoute = pathname === '/app' ? '/app' : '/';
	useEffect(() => {
		function onOutsideMenuClick(e: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsMenuOpen(false);
			}
		}

		window.addEventListener('click', onOutsideMenuClick);

		return () => window.removeEventListener('click', onOutsideMenuClick);
	}, []);

	const avatar = (
		<div className={styles.box} ref={menuRef}>
			<button
				className={styles.avatar}
				onClick={() => setIsMenuOpen(prev => !prev)}>{`${firstCharName}${firstCharSurname}`}</button>
			{isMenuOpen && (
				<div className={styles.userMenu}>
					<div className={styles.userData}>
						<span
							className={
								styles.fullname
							}>{`${session?.user.user_metadata.name} ${session?.user.user_metadata.surname}`}</span>
						<span className={styles.email}>{session?.user.email}</span>
					</div>
					<button
						className={styles.btn}
						onClick={() => {
							supabase.auth.signOut();
							setIsMenuOpen(false);
						}}>
						<IconLogout size={20} strokeWidth={1.8} />
						Sign out
					</button>
				</div>
			)}
		</div>
	);

	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.container}>
					<Link to={redirectRoute}>
						<Logo />
					</Link>
					{session ? (
						avatar
					) : pathname.startsWith('/auth') ? (
						<SecondaryCTA path='/'>Home</SecondaryCTA>
					) : (
						<SecondaryCTA path='/auth'>Sign in</SecondaryCTA>
					)}
				</div>
			</Wrapper>
		</header>
	);
}
