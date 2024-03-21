import { Box, Tab } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import React, { useState,useEffect } from 'react';
import ToDoList from '../pages/todolist/TodoList';
import Savedweddings from '../pages/savedweddings/Savedweddings';
import Navbarcomp from './Navbarcomp';
import Profilecomp from './Profilecomp';
import Footercomp from './Footercomp';
import Loader from './Loader';
import Appointments from '../pages/Appointments/Appointments'


const Tabcomp = ({firebaseUserId}) => {
  const [value, setValue] = useState('1');
  const [isLoading, setIsLoading] = useState(true);

  


  useEffect(() => {
    // simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader loadingdesc="Loading..."/>;
  }
  

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
        <TabPanel value="3"><Appointments firebaseUserId={firebaseUserId}/></TabPanel>
      </TabContext>
    </Box>
    <Footercomp/>
    </div>
  )
}

export default Tabcomp
