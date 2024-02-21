import React, { useEffect, useState } from 'react';
import '../todolist/TodoList.css';
import { Checkbox, FormControlLabel, Snackbar,Alert,IconButton,Button } from '@mui/material';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';



const ToDoList = ({firebaseUserId}) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
     // Replace 'YOUR_BACKEND_BASE_URL' with the actual URL of your backend
     axios.get(`http://localhost:8000/api/todo/${firebaseUserId}`)
     .then(response => {
       console.log('API response:', response);
       setUserData(response.data);
       setTasks(response.data.todolist.map((task, index) => ({ id: index, title: task })));
       console.log(tasks)
     })
     .catch(error => {
       console.error('Error fetching user data:', error);
       // Handle the error or set appropriate state to indicate the error
     });
 }, [firebaseUserId]);


  const [tasks, setTasks] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  
  const handleCheckboxChange = (taskId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [taskId]: !prevCheckedItems[taskId],
    }));

    // If the task is selected, display success message and remove the task from the list
    if (!checkedItems[taskId]) {
      handleSuccessMessage(taskId);
      handleDeleteTask(taskId);
    }
  };

  const handleDeleteTask = (taskId) => {
    axios.delete(`http://localhost:8000/api/todo/${firebaseUserId}/${taskId}`)
      .then(response => {
        console.log('Task deleted successfully:', response);
        // Update the tasks state to reflect the changes
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setSuccessMessage(true);
      })
      .catch(error => {
        console.error('Error deleting task:', error);
        // Handle the error or set appropriate state to indicate the error
      });
  };

  const handleSuccessMessage = (taskId) => {
    // Display success message 
    setSuccessMessage(true);

    // Remove the task from the list after 3 seconds
    setTimeout(() => {
      setSuccessMessage(false);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }, 1000);
  };


  const handleUpdateTask = (taskId) => {
    
  }

  const handleAddTodoList = () => {
    
  }

 
  return (
    <div className='task-list'>
    <Button size='small' variant="contained" onClick={handleAddTodoList} className="add-todo-list-button" startIcon={<AddIcon />} sx={{borderRadius:'8px'}}> Add to do</Button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label className='lol'>{task.title}</label>
            <FormControlLabel
              labelPlacement='start'
              control={
                <Checkbox 
                  checked={checkedItems[task.id] || false}
                  onChange={() => handleCheckboxChange(task.id)}
                />
              }
            />
             <IconButton onClick={() => handleUpdateTask(task.id)}>
              <EditIcon />
            </IconButton>
          </li>
        ))}
      </ul>

      <Snackbar open={successMessage} autoHideDuration={4000} onClose={() => setSuccessMessage(false)}>
        <Alert severity="success">Task completed successfully!</Alert>
      </Snackbar>
    </div>
  );
};

export default ToDoList;
