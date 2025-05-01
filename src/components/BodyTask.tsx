import Clipboard from './image/Clipboard.svg';
import styles from './BodyTask.module.css';
import { Trash } from 'phosphor-react';

interface TaskListProps {
  tasks: string[];
  completed: boolean[];
  toggleTask: (index: number) => void;
  deleteTask: (index: number) => void;
}

export function BodyTask({ tasks, completed, toggleTask, deleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className={styles.bodyTask}>
        <img src={Clipboard} alt="Imagem de tarefas" />
        <p>
          <span>Você ainda não tem tarefas cadastradas</span>
          <br />
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    );
  }

  return (
    <div className={styles.taskList}>
      {tasks.map((task, index) => (
        <div key={index} className={styles.taskItem}>
          <input
            type="checkbox"
            id={`task-${index}`}
            className={styles.checkbox}
            checked={completed[index]}
            onChange={() => toggleTask(index)}
          />
          <label htmlFor={`task-${index}`} className={styles.customCheckbox}></label>
          <span className={completed[index] ? styles.completed : ''}>{task}</span>
          <button className={styles.deleteButton} onClick={() => deleteTask(index)}>
            <Trash size={24} />
          </button>
        </div>
      ))}
    </div>
  );
}
