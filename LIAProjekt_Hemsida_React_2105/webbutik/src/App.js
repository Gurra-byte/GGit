// import React from 'react' Om du ska använda en klass; importera React.
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Groceries',
        date : 'May 27 at 19:00',
        reminder : true, 
  
    },
    { 
        id : 2,
        text : 'Vacation',
        date : 'August 12 at 12:00',
        reminder : true,
    },
    { 
        id : 3,
        text : 'Doctor',
        date : 'June 31 at 19:00',
        reminder : true, 
    },
  
  ])

  //Add Task
  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }

  //Toogle Reminder
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} 
    : 
      task))
  }

  return (
    <div className="container">
      <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? 
        (<Tasks tasks = {tasks} deleteTask = {deleteTask} 
          onToggle = {toggleReminder}/>) 
      :  
       ('No tasks to show.')}
       
    </div>
  );
}

export default App;

// class App extends React.Component {
//   render () {
//     return <h1>Hello from a class</h1>
//   }
// }


