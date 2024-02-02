import React, { useState } from 'react';
import '../../css/task.css';
import { Checkbox, FormControlLabel, Snackbar,Alert } from '@mui/material';

const ToDoList = () => {
  const TaskList = [
    { id: 1, title: 'Research photographs in my area' },
    { id: 2, title: 'Wedding Dress Shopping' },
    { id: 3, title: 'Book Hair and Makeup Artists' },
    { id: 4, title: 'Arrange djs' },
    { id: 5, title: 'Confirm Honeymoon Details' },
    { id: 6, title: 'Research photographs in my area1' },
    { id: 7, title: 'Wedding Dress Shopping2' },
    { id: 8, title: 'Book Hair and Makeup Artists3' },
    { id: 9, title: 'Arrange djs4' },
    { id: 10, title: 'Confirm Honeymoon Details5' },
  ];
 
  const [tasks, setTasks] = useState(TaskList);
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
                <Checkbox labelPlacement='end'
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
