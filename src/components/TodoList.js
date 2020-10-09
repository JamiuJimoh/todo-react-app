import React, { Component } from 'react';
import InputField from './InputField';
import TodoItem from './TodoItem';

class TodoList extends Component {
	state = {
		content: ''
	};

	onHandleChange = (e) => {
		this.setState({ content: e.target.value });
	};

	onHandleClick = () => {
		this.props.addTodo(this.state.content);
		this.setState({ content: '' });
	};

	render() {
		return (
			<div className="todo-list">
				<InputField onHandleClick={this.onHandleClick} content={this.state.content} onHandleChange={this.onHandleChange} />
				<TodoItem delTodo={this.props.delTodo} checkDone={this.props.checkDone} todoItems={this.props.todoItems} />
			</div>
		);
	}
}

export default TodoList;
