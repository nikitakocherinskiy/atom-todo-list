import { observer } from 'mobx-react-lite'
import TodoStore from '../../store/TodoStore'
import TodoItem from '../TodoItem/TodoItem'
import { useState } from 'react'
import styles from './TodoList.module.css'
import Button from '../Button/Button'

const TodoList = observer(() => {
	const {
		todos,
		addTodoItem,
		removeTodoItem,
		completeTodoItem,
		highlightEven,
		highlightOdd,
		removeFirstTodoItem,
		removeLastTodoItem,
	} = TodoStore

	const [newTodoText, setNewTodoText] = useState('')
	const handleToggleComplete = (id) => {
		completeTodoItem(id)
	}

	const handleRemove = (id) => {
		removeTodoItem(id)
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Todo List</h1>
			<div className={styles['input-container']}>
				<input
					type='text'
					value={newTodoText}
					onChange={(event) => setNewTodoText(event.target.value)}
					className={styles.input}
				/>
				<Button
					text={'Добавить'}
					onClick={() => {
						addTodoItem(newTodoText)
						setNewTodoText('')
					}}
					styles={styles.button}
				/>
			</div>
			<div>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggleComplete={handleToggleComplete}
						onRemove={handleRemove}
					/>
				))}
			</div>
			<div className={styles['button-container']}>
				<Button
					text={'Выделить нечётные элементы'}
					onClick={highlightEven}
					styles={styles.button}
				/>
				<Button
					text={'Выделить чётные элементы'}
					onClick={highlightOdd}
					styles={styles.button}
				/>
				<Button
					text={'Удалить первый элемент'}
					onClick={removeFirstTodoItem}
					styles={styles.button}
				/>
				<Button
					text={'Удалить последний элемент'}
					onClick={removeLastTodoItem}
					styles={styles.button}
				/>
			</div>
		</div>
	)
})

export default TodoList
