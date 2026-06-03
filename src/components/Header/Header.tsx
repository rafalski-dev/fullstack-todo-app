import { formattedDate } from '../../utils/Date';
import styles from './Header.module.css';
import { IconListDetails } from '@tabler/icons-react';


export function Header() {
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
					1<span> / 3</span>
				</span>
				<span className={styles.completed}>Completed</span>
			</div>
		</header>
	);
}
