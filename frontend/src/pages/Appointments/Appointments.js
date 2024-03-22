import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const Appointments = ({ firebaseUserId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      console.log('Fetching appointments for user:', firebaseUserId);
      try {
        const response = await axios.get(`http://localhost:8000/api/users/${firebaseUserId}/bookings`);
        console.log('Appointments fetched:', response.data);

        const formattedAppointments = response.data.map(appointment => {
          let parsedDate = null;
          try {
            parsedDate = new Date(appointment.bookingDate.$date || appointment.bookingDate);
          } catch (e) {
            console.error("Error parsing date", e);
          }
          return { ...appointment, parsedDate: parsedDate ? parsedDate.toLocaleDateString() : 'N/A' };
        });

        setAppointments(formattedAppointments);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [firebaseUserId]);


  return (
    <div>
      {appointments.map((appointment) => (
        <Card key={appointment._id.$oid} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{appointment.vendorname}</Typography>
            <Typography color="text.secondary">Date: {appointment.parsedDate}</Typography>
            <Typography color="text.secondary">Time: {appointment.bookingTime}</Typography>
            <Typography color="text.secondary">Vendor Email: {appointment.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Appointments;