import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';

class App extends Component {
	state = {
		todos: []
	};

	addTodo = (content) => {
		const newTodo = {
			id: uuidv4(),
			title:content,
			isDone:false
		};
		return this.setState({ todos: [ ...this.state.todos, newTodo ] });
	};

	toggleDone = (id) => {
		this.setState({
			todos: this.state.todos.filter(todo=>{
				if(todo.id===id){
					todo.isDone=!todo.isDone
				}
				return todo
			})
		})
	}

	delTodo = (id) => {
		this.setState({
			todos:[...this.state.todos.filter(todo=>todo.id!==id)]
		})
	}

	render() {
		return (
			<div className="todo ui container">
				<h1 className="ui huge header">Todo List</h1>
				<TodoList delTodo={this.delTodo} checkDone={this.toggleDone} todoItems={this.state.todos} addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
