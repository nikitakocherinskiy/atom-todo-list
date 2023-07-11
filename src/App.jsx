import TodoList from './components/TodoList/TodoList'
import styles from './styles/App.module.css'

const App = () => {
	return (
		<div className={styles.container}>
			<TodoList />
		</div>
	)
}

export default App
