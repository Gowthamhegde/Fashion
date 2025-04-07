import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [sortBy, setSortBy] = useState('price');
  const [filter, setFilter] = useState('all');

  // Mock data - replace with actual API call
  const products = [
    {
      id: 1,
      name: 'Summer T-Shirt',
      price: 29.99,
      image: 'https://via.placeholder.com/300x400',
      category: 'men',
    },
    {
      id: 2,
      name: 'Winter Jacket',
      price: 129.99,
      image: 'https://via.placeholder.com/300x400',
      category: 'women',
    },
    // Add more mock products as needed
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" component="h1">
          Products
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={filter}
              label="Category"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="kids">Kids</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              label="Sort By"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card
              component={Link}
              to={`/product/${product.id}`}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList; 