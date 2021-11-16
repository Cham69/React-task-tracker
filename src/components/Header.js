import Button from "./Button";

const Header = ({title, addTaskForm, formOn}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='black' title={formOn ? 'close': 'Add'} addTaskForm={addTaskForm}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;
