import React, { useState } from 'react'

const InputField = (props) => {
    const [hideButton, setHideButton]=useState(true)

    const onHandleInputClick=()=>{
        setHideButton(false)
    }
    
    const addButtonStyle=(bool)=>{
        return {display: bool===true && 'none' }
    }

    return (
        <div className="ui icon input">
            <input
                className="input-input"
                value={props.content}
                onChange={props.onHandleChange}
                onClick={onHandleInputClick}
                type="text"
                placeholder="What to do !?!"
            />
            <div style={addButtonStyle(hideButton)} onClick={props.onHandleClick}><i className="plus circle big icon" /></div>
        </div>
    )
}

export default InputField
