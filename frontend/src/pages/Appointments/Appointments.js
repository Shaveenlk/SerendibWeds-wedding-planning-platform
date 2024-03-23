import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import backendUrl from '../../config/backendUrl';

const Appointments = ({ firebaseUserId }) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      console.log('Fetching appointments for user:', firebaseUserId);
      try {
        const response = await axios.get(`${backendUrl}/api/users/${firebaseUserId}/bookings`);
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

  const handleDelete = async (appointmentId) => {
    // SweetAlert2 confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      console.log(`Attempting to delete appointment with ID: ${appointmentId}`);
      if (appointmentId) {
        try {
          await axios.delete(`${backendUrl}/api/bookings/${firebaseUserId}/${appointmentId}`);
          setAppointments(appointments.filter(appointment => appointment.appointmentId !== appointmentId));
          // SweetAlert2 success message
          Swal.fire(
            'Deleted!',
            'Your appointment has been deleted.',
            'success'
          );
        } catch (error) {
          console.error(`Error deleting appointment with ID: ${appointmentId}:`, error);
        }
      } else {
        console.log("No appointment selected for deletion");
      }
    }
  };

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
          <CardActions>
            <Button size="small" color="error" onClick={() => handleDelete(appointment.appointmentId)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Appointments;
  