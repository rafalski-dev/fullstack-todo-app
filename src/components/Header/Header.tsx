import styles from './Header.module.css';
import { IconListDetails, IconLogout } from '@tabler/icons-react';
import { Wrapper } from '../Wrapper/Wrapper';
import { useEffect, useRef, useState } from 'react';
import { supabase } from '../../lib/supabase';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			console.log(e.target);
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setIsMenuOpen(false);
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => document.removeEventListener('click', handleClickOutside);
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
						<button className={styles.avatar} onClick={() => setIsMenuOpen(prev => !prev)}>
							JR
						</button>
						{isMenuOpen && (
							<div className={styles.userMenu}>
								<div className={styles.userData}>
									<span className={styles.fullname}>Jakub Rafalski</span>
									<span className={styles.email}>jakubrafalski96@gmail.com</span>
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
