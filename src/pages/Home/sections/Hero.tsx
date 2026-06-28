import { Label } from '../../../components/Label/Label';
import { PrimaryCTA } from '../../../components/PrimaryCTA/PrimaryCTA';
import { IconArrowNarrowRight, IconLock, IconSparkles } from '@tabler/icons-react';
import styles from './Hero.module.css';
import { SecondaryCTA } from '../../../components/SecondaryCTA/SecondaryCTA';
import { Wrapper } from '../../../components/Wrapper/Wrapper';
import { Preview } from '../../../components/Preview/Preview';
import { Background } from '../../../components/Background/Background';

export function Hero() {
	return (
		<section className={styles.hero}>
			<Background />
			<Wrapper>
				<div className={styles.container}>
					<div className={styles.mainContent}>
						<Label>
							{' '}
							<IconSparkles size={16} />
							Stay on top of your day
						</Label>
						<h1>
							Get things done, <br /> one task at a time.
						</h1>
						<h2>
							A simple, focused to-do app to capture tasks, <br className={styles.break} /> track progress
							and clear your mind — nothing more, nothing less.
						</h2>
						<div className={styles.buttonsBox}>
							<PrimaryCTA path='/auth/register'>
								Get started <IconArrowNarrowRight strokeWidth={1.3} />
							</PrimaryCTA>
							<SecondaryCTA path={'/auth'} variant='large'>
								Sign in
							</SecondaryCTA>
						</div>
						<p>
							{' '}
							<IconLock size={17} color='#f5b544' />
							Free to use. Tasks stay private.
						</p>
					</div>
					<Preview />
				</div>
			</Wrapper>
		</section>
	);
}
