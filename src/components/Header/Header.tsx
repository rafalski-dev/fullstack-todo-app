import styles from './Header.module.css';
import { IconListDetails, IconLogout } from '@tabler/icons-react';
import { Wrapper } from '../Wrapper/Wrapper';
import { supabase } from '../../lib/supabase';
import { useEffect, useRef, useState } from 'react';

export function Header({ session }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function clickOutsideMenu(e: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsMenuOpen(false);
			}
		}

		document.addEventListener('click', clickOutsideMenu);

		return () => document.removeEventListener('click', clickOutsideMenu);
	}, []);

	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.headerContent}>
					<div className={styles.logo}>
						<div className={styles.icon}>
							<IconListDetails size={19} color='#0A0A0B' />
						</div>
						<span>To Do</span>
					</div>
					<div className={styles.box} ref={menuRef}>
						<button className={styles.avatar} onClick={() => setIsMenuOpen(prevMenu => !prevMenu)}>
							{`${session.user.user_metadata.name.at(0)}${session.user.user_metadata.surname.at(0)}`}
						</button>
						{isMenuOpen && (
							<div className={styles.userMenu}>
								<div className={styles.userData}>
									<span
										className={
											styles.fullname
										}>{`${session.user.user_metadata.name} ${session.user.user_metadata.surname}`}</span>
									<span className={styles.email}>{session.user.user_metadata.email}</span>
								</div>
								<button className={styles.btn} onClick={() => supabase.auth.signOut()}>
									<IconLogout size={20} strokeWidth={1.8} />
									Sign out
								</button>
							</div>
						)}
					</div>
				</div>
			</Wrapper>
		</header>
	);
}
