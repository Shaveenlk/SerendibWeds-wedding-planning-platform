import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import backendUrl from '../config/backendUrl';

const AppointmentsVendorProfileComp = () => {
  const [appointments, setAppointments] = useState([]);
  const { id } = useParams(); // MongoDB Object ID of the vendor

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/vendors/${id}/appointments`);
        const formattedAppointments = response.data.map(appointment => {
          // Parse the bookingDate here, similar to the fix in Appointments.js
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
  }, [id]);

  const handleDelete = async (appointmentId) => {
    try {
      await axios.delete(`${backendUrl}/api/vendors/${id}/appointments/${appointmentId}`);
      setAppointments(appointments.filter(appointment => appointment._id.$oid !== appointmentId));
      console.log('Appointment deleted successfully');
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div>
      {appointments.map(appointment => (
        <Card key={appointment._id.$oid} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">Appointment with: {appointment.name}</Typography>
            <Typography variant="body1">Date: {appointment.parsedDate}</Typography>
            <Typography variant="body2">Time: {appointment.bookingTime}</Typography>
          </CardContent>
          <Button color="error" onClick={() => handleDelete(appointment._id.$oid)}>Cancel Appointment</Button>
        </Card>
      ))}
    </div>
  );
}

export default AppointmentsVendorProfileComp;
