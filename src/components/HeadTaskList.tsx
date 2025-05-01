import styles from './HeadTaskList.module.css';

interface HeadTaskListProps {
  totalTasks: number;
  completedTasks: number;
}

export function HeadTaskList({ totalTasks, completedTasks }: HeadTaskListProps) {
  return (
    <div className={styles.headTaskList}>
      <span className={styles.phrase1}>
        Tarefas criadas
        <span className={styles.counter}>{totalTasks}</span>
      </span>
      <span className={styles.phrase2}>
        Concluídas
        <span className={styles.counter}>{completedTasks} de {totalTasks}</span>
      </span>
    </div>
  );
}
