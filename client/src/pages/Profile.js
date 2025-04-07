import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement profile update logic
    console.log('Profile updated:', formData);
  };

  // Mock order history
  const orders = [
    {
      id: 'ORD-001',
      date: '2023-01-15',
      total: 159.98,
      status: 'Delivered',
      items: [
        { name: 'Summer T-Shirt', quantity: 1, price: 29.99 },
        { name: 'Winter Jacket', quantity: 1, price: 129.99 },
      ],
    },
    // Add more mock orders as needed
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Account
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Profile Information" />
          <Tab label="Order History" />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <Card>
          <CardContent>
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Update Profile
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      )}

      {tabValue === 1 && (
        <Box>
          {orders.map((order) => (
            <Card key={order.id} sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Order #{order.id}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Date: {order.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Status: {order.status}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" align="right">
                      Total: ${order.total.toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <List>
                  {order.items.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem>
                        <ListItemText
                          primary={item.name}
                          secondary={`Quantity: ${item.quantity} - $${item.price.toFixed(2)}`}
                        />
                      </ListItem>
                      {index < order.items.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Profile; 