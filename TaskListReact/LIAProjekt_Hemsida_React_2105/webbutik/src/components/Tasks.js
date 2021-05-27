import PropTypes from 'prop-types';
import Task from './Task'
//const Tasks = ({tasks}) => {} kan dekonstuktera objektet "props" som kommer in. 
const Tasks = ({tasks, deleteTask, onToggle}) => {
    return (
        <>
          {
              tasks.map((task) =>(
              <Task 
              key = {task.id} 
              task = {task}
              deleteTask = {deleteTask}
              onToggle = {onToggle}
              />))
          }  
        </>
    )
}



Tasks.propTypes = {
    id: PropTypes.number,
    text : PropTypes.string,
    date : PropTypes.string,
    reminder: PropTypes.bool,
}

export default Tasks
