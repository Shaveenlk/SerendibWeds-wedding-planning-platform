import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
// import { useState } from 'react';
import VendorInfocomp from '../../components/VendorInfocomp';
import Navbarcomp from '../../components/Navbarcomp';

export default function ServicesPage() {
  const [value, setValue] = useState("1");
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Navbarcomp/>
        <Box sx={{ width: '100%', typography: 'body1', margin: '20px'}}>
            <TabContext value={value}>
            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
                sx={{ backgroundColor: '#E5E4E4', color: '#5C4033'}}
                indicatorColor= "#F5DEB3"
                textColor="inherit"
            >
                <Tab label="Photography / Videography" value="1"/>
                <Tab label="Venue / Hotels" value="2" />
                <Tab label="Music Bands / DJ" value="3"/>
                <Tab label="Decorations" value="4"/>
                <Tab label="Wedding Attire" value="5"/>
            </Tabs>
            </Box>

            <TabPanel value="1"><VendorInfocomp category="1"/></TabPanel>
            <TabPanel value="2"><VendorInfocomp category="2"/></TabPanel>
            <TabPanel value="3"><VendorInfocomp category="3"/></TabPanel>
            <TabPanel value="4"><VendorInfocomp category="4"/></TabPanel>
            <TabPanel value="5"><VendorInfocomp category="5"/></TabPanel>
            </TabContext>
        </Box>
    </div>
  );
}

// end