import * as React from 'react';
import { Box, Stack, Grid , Typography} from '@mui/material';
import HeroSectionImg from '../assets/heroSectionImg.png' ;
import HeroTextcomp from './heroTextcomp';

export default function HeroSectioncomp() {

  return (
    <>
      <Stack direction='row' spacing={2} sx={{backgroundColor: "#fff"}}>
        <Box
          sx={{
            height: '600px',
            flex: 3,
            padding: '16px',
            textAlign: 'left',
          }}
        >
          <HeroText />
        </Box>

        <Box
          sx={{
            height: '600px',
            flex: 2,
            padding: '16px',
          }}
        >
          <img src={HeroSectionImg} alt="Description" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Stack>
    </>
  );
}
