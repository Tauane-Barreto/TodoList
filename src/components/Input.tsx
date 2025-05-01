import { useState, ChangeEvent } from 'react';
import styles from './Input.module.css';
import adicionar from './image/adicionar.png';

interface InputProps {
  addTask: (task: string) => void;
}

export function Input({ addTask }: InputProps) {
  const [text, setText] = useState<string>('');

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  function handleAddTask() {
    const trimmedText = text.trim();

    if (trimmedText) {
      addTask(trimmedText);
      setText('');
    }
  }

  return (
    <div className={styles.container}>
      <textarea
        className={styles.Input}
        placeholder="Adicione uma tarefa"
        value={text}
        onChange={handleInputChange}
      />
      <button
        className={styles.addButton}
        onClick={handleAddTask}
      >
        Criar
        <img src={adicionar} alt="Adicionar" />
      </button>
    </div>
  );
}
