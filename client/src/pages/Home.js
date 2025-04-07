import React from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import FeaturedProducts from '../components/FeaturedProducts';

const NeonSign = styled('div')({
  width: '100%',
  textAlign: 'center',
  marginBottom: '0',
  '& img': {
    maxWidth: '400px',
    width: '90%',
    height: 'auto',
  },
});

const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 64px)',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const ShopButton = styled(Button)({
  position: 'absolute',
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#fff',
  color: '#000',
  padding: '10px 40px',
  fontSize: '1rem',
  fontWeight: 400,
  textTransform: 'none',
  borderRadius: '0',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const CategoryCard = styled(Link)({
  position: 'relative',
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
  '&:hover .category-title': {
    color: '#666',
  },
});

const CategoryTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 0',
  transition: 'color 0.3s ease',
});

const categories = [
  {
    title: 'Oversized Tshirts',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3',
    link: '/products/oversized-tshirts',
  },
  {
    title: 'The Bottom Trends',
    image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3',
    link: '/products/bottom-trends',
  },
  {
    title: 'Bowling Shirts',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3',
    link: '/products/bowling-shirts',
  },
  {
    title: 'Denims By WTF',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3',
    link: '/products/denims',
  },
  {
    title: 'Winter Essentials',
    image: 'https://images.unsplash.com/photo-1579572331145-5e53b299c64e?ixlib=rb-4.0.3',
    link: '/products/winter-essentials',
  },
];

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#fff' }}>
      <Container maxWidth="xl" disableGutters>
        <NeonSign>
          <img src="/neon-sign.svg" alt="What The Hex" />
        </NeonSign>
        
        <ImageContainer>
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Clothing Collection"
            style={{
              filter: 'brightness(1.02)',
            }}
          />
          <ShopButton
            component={Link}
            to="/products"
            variant="contained"
            disableElevation
          >
            Shop All
          </ShopButton>
        </ImageContainer>

        <Container maxWidth="xl" sx={{ py: 8 }}>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={category.title}>
                <CategoryCard to={category.link}>
                  <Box sx={{ overflow: 'hidden' }}>
                    <img src={category.image} alt={category.title} />
                  </Box>
                  <CategoryTitle className="category-title">
                    <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                      {category.title}
                    </Typography>
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </CategoryTitle>
                </CategoryCard>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container maxWidth="xl">
          <FeaturedProducts />
        </Container>
      </Container>
    </Box>
  );
};

export default Home; 