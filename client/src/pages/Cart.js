import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from '@mui/icons-material';

const Cart = () => {
  // Mock cart data - replace with actual cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Summer T-Shirt',
      price: 29.99,
      image: 'https://via.placeholder.com/100x100',
      quantity: 1,
      size: 'M',
    },
    {
      id: 2,
      name: 'Winter Jacket',
      price: 129.99,
      image: 'https://via.placeholder.com/100x100',
      quantity: 1,
      size: 'L',
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ mb: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3} sm={2}>
                    <CardMedia
                      component="img"
                      height="100"
                      image={item.image}
                      alt={item.name}
                    />
                  </Grid>
                  <Grid item xs={9} sm={4}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Size: {item.size}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, -1)}
                        size="small"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                      <IconButton
                        onClick={() => handleQuantityChange(item.id, 1)}
                        size="small"
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <Typography variant="h6">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={1}>
                    <IconButton
                      onClick={() => handleRemoveItem(item.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography>Subtotal</Typography>
                  <Typography>${calculateTotal().toFixed(2)}</Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1,
                  }}
                >
                  <Typography>Shipping</Typography>
                  <Typography>Free</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 2,
                  }}
                >
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">
                    ${calculateTotal().toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component="a"
                  href="/checkout"
                >
                  Proceed to Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart; 