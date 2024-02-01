import React from 'react';
import '../../css/task.css';
import { Checkbox, FormControlLabel } from '@mui/material';

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

  
 
  return (
    <div className='task-list'>
     <ul>
      {TaskList.map((task) => (
        <li key={task.id}>
          <label className='task-title'>{task.title}</label>
          <FormControlLabel
            labelPlacement='start'
            control={
              <Checkbox labelPlacement='end'
              />
            }
          />
        </li>
      ))}
     </ul>
    </div>
  );
};

export default ToDoList;
