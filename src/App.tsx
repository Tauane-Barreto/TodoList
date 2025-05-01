import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Input } from './components/Input'; 
import { HeadTaskList } from './components/HeadTaskList';
import { BodyTask } from './components/BodyTask';
import { useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState<string[]>([
    'Estudar React e TSX',
    'Ler documentação do TypeScript',
    'Fazer exercícios de lógica'
  ]);

  const [completed, setCompleted] = useState<boolean[]>([
    false,
    true,
    false
  ]);

  function handleAddTask(newTask: string) {
    setTasks(prev => [...prev, newTask]);
    setCompleted(prev => [...prev, false]); // nova tarefa começa como não concluída
  }

  function toggleTask(index: number) {
    const updated = [...completed];
    updated[index] = !updated[index];
    setCompleted(updated);
  }

  function deleteTask(index: number) {
    const updatedTasks = [...tasks];
    const updatedCompleted = [...completed];
    updatedTasks.splice(index, 1);
    updatedCompleted.splice(index, 1);
    setTasks(updatedTasks);
    setCompleted(updatedCompleted);
  }

  return (
    <>
      <Header />
      <Input addTask={handleAddTask} />
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <HeadTaskList 
            totalTasks={tasks.length} 
            completedTasks={tasks.filter((_, i) => completed[i]).length}
          />
          <BodyTask 
            tasks={tasks} 
            completed={completed}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
}
