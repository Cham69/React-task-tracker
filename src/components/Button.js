const Button = ({ color, title, addTaskForm}) => {

    return (
        <button 
            onClick={addTaskForm} 
            style={{backgroundColor: color }} className='btn'>{title}</button>
    )
}

export default Button
