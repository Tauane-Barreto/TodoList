import styles from './TaskArea.module.css';

interface TaskAreaProps {
  tarefas: string[]; 
}

export function TaskList({ tarefas }: TaskAreaProps) {
  return (
    <div className={styles.lista}>
      {tarefas.length === 0 ? (
        <p>Você ainda não tem tarefas cadastradas</p>
      ) : (
        tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))
      )}
    </div>
  );
}