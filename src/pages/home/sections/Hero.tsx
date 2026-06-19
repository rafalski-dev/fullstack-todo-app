import { Label } from '../../../components/Label/Label';
import { PrimaryCTA } from '../../../components/PrimaryCTA/PrimaryCTA';
import { IconArrowNarrowRight, IconLock, IconCheck } from '@tabler/icons-react';
import styles from './Hero.module.css';
import { SecondaryCTA } from '../../../components/SecondaryCTA/SecondaryCTA';

export function Hero() {
	const previewTasks = [
		{ id: 1, content: 'Morning workout', done: true },
		{ id: 2, content: 'Finish hero section', done: false },
		{ id: 2, content: 'Finish hero section', done: false }
	];

	const completedCount = previewTasks.filter(task => task.done).length;

	return (
		<section className={styles.hero}>
			<div className={styles.mainContent}>
				<Label>Stay on top of your day</Label>
				<h1>
					Get things done, <br /> one task at a time.
				</h1>
				<h2>
					A simple, focused to-do app to capture tasks, track progress and clear your mind — nothing more,
					nothing less.
				</h2>
				<div className={styles.buttonsBox}>
					<PrimaryCTA path='/auth'>
						Get started <IconArrowNarrowRight strokeWidth={1.3} />
					</PrimaryCTA>
					<SecondaryCTA path={'/auth'} variant='large'>
						Sign in
					</SecondaryCTA>
				</div>
				<p>
					{' '}
					<IconLock size={17} color='#f5b544' />
					Free to use. Tasks stays private.
				</p>
			</div>
			<div className={styles.preview}>
				<div className={styles.previewHeader}>
					<span className={styles.previewTitle}>Today</span>
					<span className={styles.previewCount}>
						{completedCount} / {previewTasks.length} done
					</span>
				</div>
				<ul className={styles.previewList}>
					{previewTasks.map(task => (
						<li key={task.id} className={styles.previewItem}>
							<span className={`${styles.checkbox} ${task.done ? styles.done : ''}`}>
								<IconCheck />
							</span>
							<p>{task.content}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
