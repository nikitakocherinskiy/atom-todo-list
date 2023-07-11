import { observer } from 'mobx-react-lite'
import styles from './TodoItem.module.css'

const TodoItem = observer(({ todo, onToggleComplete, onRemove }) => {
	const { id, text, completed, highlighted } = todo

	return (
		<div
			style={{
				backgroundColor: highlighted
					? completed
						? '#19573F'
						: '#B2337F'
					: 'transparent',
				textDecoration: completed ? 'line-through' : 'none',
			}}
			className={styles.container}
		>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => onToggleComplete(id)}
			/>
			<span
				style={{ textDecoration: completed ? 'line-through' : 'none' }}
				className={styles.text}
			>
				{text}
			</span>
			<button onClick={() => onRemove(id)} className={styles.button}>
				Удалить
			</button>
		</div>
	)
})

export default TodoItem
