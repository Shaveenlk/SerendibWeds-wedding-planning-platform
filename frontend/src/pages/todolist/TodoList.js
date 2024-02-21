import React, { useEffect, useState } from 'react';
import '../todolist/TodoList.css';
import { Checkbox, FormControlLabel, Snackbar,Alert } from '@mui/material';
import axios from 'axios';




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
    }
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

 
  return (
    <div className='task-list'>
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
          </li>
        ))}
      </ul>

      <Snackbar open={successMessage} autoHideDuration={3000} onClose={() => setSuccessMessage(false)}>
        <Alert severity="success">Task completed successfully!</Alert>
      </Snackbar>
    </div>
  );
};

export default ToDoList;
