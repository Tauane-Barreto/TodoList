import styles from './Header.module.css';
import logoTodoList from './image/logo.svg';

console.log(logoTodoList)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoTodoList} alt='Logotipo Todo' />
        </header>
    )
}