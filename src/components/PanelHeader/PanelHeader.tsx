import { formattedDate } from '../../utils/Date';
import styles from './PanelHeader.module.css';
import { IconCheckbox } from '@tabler/icons-react';

type HeaderProps = {
	totalNumberOfTasks: number;
	completedNumberOfTasks: number;
};

export function PanelHeader({ totalNumberOfTasks, completedNumberOfTasks }: HeaderProps) {
	return (
		<div className={styles.header}>
			<div className={styles.leftContainer}>
				<div className={styles.logo}>
					<div className={styles.icon}>
						<IconCheckbox size={19} color='#0A0A0B' />
					</div>
					<h1>Tasks</h1>
				</div>
				<span>{formattedDate()}</span>
			</div>
			<div className={styles.rightContainer}>
				<span className={styles.numberOfTasks}>
					{completedNumberOfTasks}
					<span> / {totalNumberOfTasks}</span>
				</span>
				<span className={styles.completed}>Completed</span>
			</div>
		</div>
	);
}
