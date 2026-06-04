import { formattedDate } from '../../utils/Date';
import styles from './Header.module.css';
import { IconListDetails } from '@tabler/icons-react';

type HeaderProps = {
	tasksCounter: (val: string) => string;
};

export function Header({ tasksCounter }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.leftContainer}>
				<div className={styles.logo}>
					<div className={styles.icon}>
						<IconListDetails size={19} color='#0A0A0B' />
					</div>
					<h1>To Do</h1>
				</div>
				<span>{formattedDate()}</span>
			</div>
			<div className={styles.rightContainer}>
				<span className={styles.numberOfTasks}>
					{tasksCounter('completed')}
					<span> / {tasksCounter('total')}</span>
				</span>
				<span className={styles.completed}>Completed</span>
			</div>
		</header>
	);
}
