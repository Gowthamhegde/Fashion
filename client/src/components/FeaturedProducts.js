import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.02)',
    transition: 'transform 0.3s ease-in-out',
  },
  [theme.breakpoints.down('sm')]: {
    '&:hover': {
      transform: 'none',
    },
  },
}));

const DiscountBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 10,
  left: 10,
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '4px 8px',
  borderRadius: '4px',
  zIndex: 1,
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StrikethroughPrice = styled('span')(({ theme }) => ({
  textDecoration: 'line-through',
  color: theme.palette.text.secondary,
}));

const ProductImage = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // 1:1 Aspect ratio
  '& .MuiCardMedia-root': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const SeeMoreButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  textTransform: 'none',
  borderRadius: '0',
  backgroundColor: '#000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#333',
  },
}));

const featuredProducts = [
  {
    id: 1,
    name: 'Too Fast Heavyweight T-shirt',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    originalPrice: 1499.00,
    discountedPrice: 1199.00,
    discount: 20,
  },
  {
    id: 2,
    name: 'New World Energy Oversized T-Shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    originalPrice: 1199.00,
    discountedPrice: 899.00,
    discount: 25,
  },
  {
    id: 3,
    name: 'Bleed Flex White Heavyweight T-shirt',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    originalPrice: 1499.00,
    discountedPrice: 1199.00,
    discount: 20,
  },
  {
    id: 4,
    name: 'Dark Hours Oversized T-Shirt',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    originalPrice: 1199.00,
    discountedPrice: 899.00,
    discount: 25,
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          Featured Products
        </Typography>
        <SeeMoreButton
          component={Link}
          to="/products"
          variant="contained"
        >
          See More
        </SeeMoreButton>
      </Box>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {featuredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <StyledCard>
              <DiscountBadge>-{product.discount}%</DiscountBadge>
              <ProductImage>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                />
              </ProductImage>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography gutterBottom variant="h6" component="h3">
                    {product.name}
                  </Typography>
                  <PriceTypography variant="body1">
                    <StrikethroughPrice>₹{product.originalPrice.toFixed(2)}</StrikethroughPrice>
                    <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                      ₹{product.discountedPrice.toFixed(2)}
                    </Box>
                  </PriceTypography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 'auto' }}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;