import { Box, Tab } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import React, { useState } from 'react';
import ToDoList from '../pages/todolist/TodoList';
import Savedweddings from '../pages/savedweddings/Savedweddings';
import Navbarcomp from './Navbarcomp';
import Profilecomp from './Profilecomp';
import Footercomp from './Footercomp';


const Tabcomp = ({firebaseUserId}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className='tab'>
      <Navbarcomp/>
      <Profilecomp firebaseUserId={firebaseUserId}/>
      <Box  sx={{ width: '100%' }} >
      <TabContext value={value}  >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="Tabs example" onChange={handleChange} centered   >
            <Tab label="To do list" value="1" />
            <Tab label="Saved Weddings" value="2"  />
            <Tab label="Appoinments" value="3"  />
          </TabList>
        </Box>
        <TabPanel value="1"> <ToDoList firebaseUserId={firebaseUserId}/> </TabPanel>
        <TabPanel value="2"> <Savedweddings firebaseUserId={firebaseUserId}/>   </TabPanel>
        <TabPanel value="3">panel 3</TabPanel>
      </TabContext>
    </Box>
    <Footercomp/>
    </div>
  )
}

export default Tabcomp
