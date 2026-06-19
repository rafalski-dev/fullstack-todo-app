import { Logo } from '../Logo/Logo';
import { SecondaryCTA } from '../SecondaryCTA/SecondaryCTA';
import { Wrapper } from '../Wrapper/Wrapper';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<Wrapper>
				<div className={styles.container}>
					<Logo />
					<SecondaryCTA path='/auth'>Sign in</SecondaryCTA>
				</div>
			</Wrapper>
		</header>
	);
}
