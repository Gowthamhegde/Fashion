import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  ShoppingCart as CartIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  // Mock wishlist data - replace with actual API call
  const wishlistItems = [
    {
      id: 1,
      name: 'Summer T-Shirt',
      price: 29.99,
      image: 'https://via.placeholder.com/300x400',
    },
    {
      id: 2,
      name: 'Winter Jacket',
      price: 129.99,
      image: 'https://via.placeholder.com/300x400',
    },
  ];

  const handleRemoveItem = (id) => {
    // Implement remove from wishlist logic
    console.log('Removed item:', id);
  };

  const handleAddToCart = (id) => {
    // Implement add to cart logic
    console.log('Added to cart:', id);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My Wishlist
      </Typography>

      {wishlistItems.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 8,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Your wishlist is empty
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/products"
            sx={{ mt: 2 }}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {wishlistItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <CardMedia
                  component="img"
                  height="400"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<CartIcon />}
                      onClick={() => handleAddToCart(item.id)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Wishlist; 