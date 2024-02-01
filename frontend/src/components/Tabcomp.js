import { Box, Tab } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import React, { useState } from 'react';

const Tabcomp = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className='tab'>
      <Box  sx={{ width: '100%' }} >
      <TabContext value={value}  >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="Tabs example" onChange={handleChange} centered   >
            <Tab label="To do list" value="1" />
            <Tab label="Saved Weddings" value="2"  />
            <Tab label="Appoinments" value="3"  />
          </TabList>
        </Box>
        <TabPanel value="1"> panel1 </TabPanel>
        <TabPanel value="2"> panel2   </TabPanel>
        <TabPanel value="3">panel 3</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default Tabcomp
