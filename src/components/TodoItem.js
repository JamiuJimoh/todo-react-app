import React from 'react'

const TodoItem = (props) => {

    const onHandleCheckClick=(todoItem)=>{
		props.checkDone(todoItem.id)
    }
    
    const onHandleDeleteClick=(todoItem)=>{
        props.delTodo(todoItem.id);
    }

    const checkedStyle=(todoItem)=>{
		return {
            textDecoration:todoItem.isDone===true && 'line-through',
            fontSize:'18px',
            color:'rgb(240, 240, 240)'
        }
    }

    const listBlockStyle=(todoItem)=>{
        return {
            backgroundColor:todoItem.isDone===false ?  "rgb(0, 128, 128)": 'rgba(0, 128, 128, 0.3)'
        }
    }

    const renderList=()=> {
		return props.todoItems.map((todoItem) => {
			if(todoItem.title!==''){
				return (
				<div 
                    className='ui raised segment' 
                    style={listBlockStyle(todoItem)}
					key={todoItem.id}>
					 <div className="ui checkbox">
                        <input className="check-box" onClick={()=>onHandleCheckClick(todoItem)} type="checkbox"/>
                        <label style={checkedStyle(todoItem)}>{todoItem.title}</label>
                    </div>
                    <div className="delete-button" onClick={()=>onHandleDeleteClick(todoItem)}><i className="trash alternate icon" /></div>
				</div>
			)
			} else{
				return null
			}
        })
	}

    return (
        <React.Fragment>
            {renderList()}
        </React.Fragment>
    )
}

export default TodoItem
