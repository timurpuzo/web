import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';

function Contact() {
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name) tempErrors.name = 'Name is required';
    if (!formValues.email) tempErrors.email = 'Email is required';
    if (!formValues.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSnackbarOpen(true);
      // Handle form submission, such as sending the data to a server
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Page</Typography>
      <Box 
        sx={{
          width: '100%',
          maxWidth: '500px',
          p: 4,
          backgroundColor: 'rgba(210, 180, 140, 0.5)', // Light brown color with transparency
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            margin="normal"
            multiline
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
        </form>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Form has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
