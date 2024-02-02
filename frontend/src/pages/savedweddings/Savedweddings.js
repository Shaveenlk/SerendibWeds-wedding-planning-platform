import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const Savedweddings = () => {
  return (
    <div className='saved-weddings'>
      <Grid container spacing={5} rowGap={3}>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((item) => (
        <Grid item key={item} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ maxWidth: 245,height: '100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3PuBLzidgn1VMZTgQFmDlMkmJZV3uKI7ww&usqp=CAU"
                alt="Event Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  GEORGE & TINA
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Date: 12/12/2022
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Venue: Hilton Colombo
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                  Theme: Nature
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  )
}

export default Savedweddings
