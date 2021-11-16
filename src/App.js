import { useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([])
  //Add Task
  const addTask = (task)=>{
    const id=Math.floor(Math.random()*10000) + 1;
    const newTask = {id, ...task};    
    //console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  //Delete a task
  const deleteTask = id =>{
    setTasks(tasks.filter(task => task.id !== id));
  }

  //Task toggle
  const toggleTask = id =>{
    setTasks(tasks.map(task =>
      task.id === id ? {...task, reminder: !task.reminder} : task
      
    ))
  }

  //Toggle add task form
  const onClick = ()=>setAddTask(!showAddTask)

  return (
    <div className='container'>
      <Header addTaskForm={onClick} formOn={showAddTask}/>
      {showAddTask && <AddTask onTask = {addTask} />}
      {tasks.length>0? <Tasks 
        tasks={tasks} 
        deleteTask = {deleteTask} 
        onToggle={toggleTask}/>:'No tasks to show'}
    </div>
  );
}

export default App;
