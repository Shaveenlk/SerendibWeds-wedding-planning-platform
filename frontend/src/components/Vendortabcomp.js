import { Box, Tab } from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import React, { useState } from 'react';
import Navbarcomp from './Navbarcomp';
import Footercomp from './Footercomp';
import Serviceprofilecomp from './Serviceprofilecomp';
import Appoinmentsvendorprofilecomp from './Appoinmentsvendorprofilecomp';
import Vendorcomp from './Vendorcomp';


const Vendortabcomp = ({vendorId}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className='tab'>
      {/* <Navbarcomp/> */}
      <Vendorcomp vendorId={vendorId}/>
      <Box  sx={{ width: '100%' }} >
      <TabContext value={value}  >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="Tabs example" onChange={handleChange} centered   >
            <Tab label="Services" value="1" />
            <Tab label="Appoinements" value="2"  />
          </TabList>
        </Box>
        <TabPanel value="1"> <Serviceprofilecomp vendorId={vendorId}/> </TabPanel>
        <TabPanel value="2"> <Appoinmentsvendorprofilecomp vendorId={vendorId}/>   </TabPanel>
      </TabContext>
    </Box>
    <Footercomp/>
    </div>
  )
}

export default Vendortabcomp
