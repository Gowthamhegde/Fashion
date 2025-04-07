import React, { useState } from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardMedia,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock data - replace with actual API call
  const product = {
    id: 1,
    name: 'Summer T-Shirt',
    price: 29.99,
    description: 'A comfortable and stylish summer t-shirt made from 100% cotton.',
    images: [
      'https://via.placeholder.com/600x800',
      'https://via.placeholder.com/600x800',
      'https://via.placeholder.com/600x800',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue'],
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    console.log('Added to cart:', { id, size, quantity });
  };

  return (
    <Container sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              sx={{
                height: { xs: 300, sm: 400, md: 500, lg: 600 },
                objectFit: 'cover'
              }}
              image={product.images[0]}
              alt={product.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              {product.name}
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              ${product.price.toFixed(2)}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }}
            >
              {product.description}
            </Typography>
          </Box>

          <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'stretch' } }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Size</InputLabel>
              <Select
                value={size}
                label="Size"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.sizes.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Quantity</InputLabel>
              <Select
                value={quantity}
                label="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <MenuItem key={q} value={q}>
                    {q}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                width: { xs: '80%', md: '100%' },
                height: 48,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500
              }}
              onClick={handleAddToCart}
              disabled={!size}
            >
              Add to Cart
            </Button>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Product Details
            </Typography>
            <Typography variant="body2" paragraph>
              • 100% Cotton
              <br />
              • Machine washable
              <br />
              • Imported
              <br />
              • Model is 6'2" and wearing size Large
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;