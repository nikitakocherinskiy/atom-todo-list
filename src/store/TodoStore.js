import { makeAutoObservable } from 'mobx'

class TodoStore {
	todos = []

	constructor() {
		makeAutoObservable(this)
	}

	addTodoItem = (newTodoText) => {
		if (newTodoText.trim() !== '') {
			this.todos.push({
				id: Date.now(),
				text: newTodoText,
				completed: false,
				highlighted: false,
			})
		}
	}

	removeTodoItem = (id) => {
		this.todos = this.todos.filter((todo) => todo.id !== id)
	}

	completeTodoItem = (id) => {
		const index = this.todos.findIndex((todo) => todo.id === id)
		if (index !== -1) {
			if (this.todos[index].completed === false) {
				this.todos[index].completed = true
				const element = this.todos.splice(index, 1)[0]
				this.todos.push(element)
			} else {
				this.todos[index].completed = false
				const element = this.todos.splice(index, 1)[0]
				this.todos.unshift(element)
			}
		}
	}

	highlightEven = () => {
		this.todos.forEach((todo, index) => {
			if (index % 2 === 1) {
				todo.highlighted = true
			} else {
				todo.highlighted = false
			}
		})
	}

	highlightOdd = () => {
		this.todos.forEach((todo, index) => {
			if (index % 2 === 0) {
				todo.highlighted = true
			} else {
				todo.highlighted = false
			}
		})
	}

	removeFirstTodoItem = () => {
		if (this.todos.length > 0) {
			this.todos.shift()
		}
	}

	removeLastTodoItem = () => {
		if (this.todos.length > 0) {
			this.todos.pop()
		}
	}
}

export default new TodoStore()
