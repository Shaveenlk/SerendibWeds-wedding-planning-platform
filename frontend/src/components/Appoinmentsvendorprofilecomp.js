import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Appoinmentsvendorprofilecomp = () => {
  const [appointments, setAppointments] = useState([]);
  const { id } = useParams(); // MongoDB Object ID of the vendor

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/vendors/${id}/appointments`);
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [id]);

  const handleDelete = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:8000/api/vendors/${id}/appointments/${appointmentId}`);
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
            <Typography variant="body1">Date: {new Date(appointment.bookingDate.$date).toLocaleDateString()}</Typography>
            <Typography variant="body2">Time: {appointment.bookingTime}</Typography>
          </CardContent>
          <Button color="error" onClick={() => handleDelete(appointment._id.$oid)}>Cancel Appointment</Button>
        </Card>
      ))}
    </div>
  );
}

export default Appoinmentsvendorprofilecomp;
