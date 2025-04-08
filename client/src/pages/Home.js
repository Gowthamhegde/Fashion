import React from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
  Grid,
  styled,
  Card,
  CardMedia,
  CardContent,
  Link as MuiLink
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import FeaturedProducts from '../components/FeaturedProducts';

const NeonSign = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: '0',
  '& img': {
    maxWidth: '400px',
    width: '90%',
    height: 'auto',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 64px)',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const ShopButton = styled(Button)(({ theme }) => ({
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
}));

const CategoryCard = styled(Link)(({ theme }) => ({
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
}));

const CategoryTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 0',
  transition: 'color 0.3s ease',
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

const blogPosts = [
  {
    id: 1,
    title: 'Ultimate Guide for Styling a Varsity Jacket!',
    date: 'NOVEMBER 9, 2023',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3',
    excerpt: 'In this ultimate guide, we explore how to style the iconic varsity jacket across different looks, from retro to minimalist, and casual to bold...',
  },
  {
    id: 2,
    title: 'How to Perfectly Style a Streetwear Outfit',
    date: 'NOVEMBER 11, 2023',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3',
    excerpt: 'In this guide, we break down the essentials of styling the perfect streetwear outfit, whether you\'re new to the game or a seasoned streetwear enthusiast...',
  },
  {
    id: 3,
    title: 'Best Oversized T-shirts for Women',
    date: 'DECEMBER 13, 2023',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3',
    excerpt: 'Bonjour Flexicons!! there\'s one fashion item that effortlessly marries comfort with style, it\'s the oversized T-shirt. From a casual look to a semi-formal look...',
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold' }}>
              Categories
            </Typography>
            <SeeMoreButton
              component={Link}
              to="/products"
              variant="contained"
            >
              See More
            </SeeMoreButton>
          </Box>
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

        {/* Hot of the Streets Section */}
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#f5f5f5',
            py: 8,
            mt: 8,
            backgroundImage: 'url(https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', color: '#fff', maxWidth: '800px', mx: 'auto' }}>
              <Typography variant="h2" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
                Hot of the Streets
              </Typography>

              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                Wardrobe essentials from the Flex Club hits the shelves again! Revive your aesthetics with our Latest Collection
              </Typography>

              <Button
                component={Link}
                to="/products"
                variant="contained"
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: '0',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  }
                }}
              >
                EXPLORE NOW
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Social Media Videos Section */}
        <Container maxWidth="xl" sx={{ py: 8, mt: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
            Shop our Instagram
          </Typography>
          <Grid container spacing={2}>
            {[
              { id: 1, views: '41.5K', url: 'https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3' },
              { id: 2, views: '732K', url: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3' },
              { id: 3, views: '45.6K', url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3' },
              { id: 4, views: '26.7K', url: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3' },
              { id: 5, views: '18.6K', url: 'https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?ixlib=rb-4.0.3' }
            ].map((video) => (
              <Grid item xs={12} sm={6} md={2.4} key={video.id}>
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '177.77%',
                    perspective: '1000px',
                    '&:hover > div': {
                      transform: 'rotateY(10deg) scale(1.02)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${video.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        zIndex: 2,
                      }}
                    >
                      {video.views}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Bowling Shirts Section */}
        <Container maxWidth="xl" sx={{ py: 8, mt: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
            Bowling Shirts
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#4CAF50', color: 'white', px: 1, py: 0.5, borderRadius: 1, zIndex: 1 }}>-20%</Box>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images.unsplash.com/photo-1576566588028-4147f3842f27"
                  alt="The Higher Desire Bowling Shirt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">The Higher Desire Bowling Shirt</Typography>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>₹1,499.00</Typography>
                    <Typography variant="h6" color="primary">₹1,199.00</Typography>
                  </Box>
                  <Button variant="contained" fullWidth>Add to Cart</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#4CAF50', color: 'white', px: 1, py: 0.5, borderRadius: 1, zIndex: 1 }}>-20%</Box>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
                  alt="Poisoned Youth Bowling Shirt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">Poisoned Youth Bowling Shirt</Typography>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>₹1,499.00</Typography>
                    <Typography variant="h6" color="primary">₹1,199.00</Typography>
                  </Box>
                  <Button variant="contained" fullWidth>Add to Cart</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#4CAF50', color: 'white', px: 1, py: 0.5, borderRadius: 1, zIndex: 1 }}>-20%</Box>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
                  alt="Youth Culture Bowling Shirt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">Youth Culture Bowling Shirt</Typography>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>₹1,499.00</Typography>
                    <Typography variant="h6" color="primary">₹1,199.00</Typography>
                  </Box>
                  <Button variant="contained" fullWidth>Add to Cart</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#4CAF50', color: 'white', px: 1, py: 0.5, borderRadius: 1, zIndex: 1 }}>-20%</Box>
                <CardMedia
                  component="img"
                  height="400"
                  image="https://images.unsplash.com/photo-1596755094514-f87e34085b2c"
                  alt="Massacre Bowling Shirt"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">Massacre Bowling Shirt</Typography>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>₹1,499.00</Typography>
                    <Typography variant="h6" color="primary">₹1,199.00</Typography>
                  </Box>
                  <Button variant="contained" fullWidth>Add to Cart</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Blog Posts Section */}
        <Container maxWidth="xl" sx={{ py: 8, mt: 8 }}>
          <Typography variant="h2" component="h2" sx={{ mb: 4, fontWeight: 600 }}>
            Latest from Blog
          </Typography>
          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      {post.date}
                    </Typography>

                    <Typography variant="h6" component="h3" sx={{ my: 1 }}>
                      {post.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {post.excerpt}
                    </Typography>

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Box sx={{ bgcolor: '#000', color: '#fff', mt: 8, pt: 8, pb: 4 }}>
          <Container maxWidth="xl">
            <Grid container spacing={4}>
              {/* Navigation Links */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Quick Links
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Home', 'Products', 'Categories', 'About Us', 'Contact'].map((link) => (
                    <MuiLink
                      key={link}
                      component={Link}
                      to={`/${link.toLowerCase().replace(' ', '-')}`}
                      sx={{ 
                        color: '#fff', 
                        textDecoration: 'none',
                        '&:hover': { color: '#ccc' }
                      }}
                    >
                      {link}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              {/* Categories */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Categories
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Oversized T-shirts', 'Bottom Trends', 'Bowling Shirts', 'Denims', 'Winter Essentials'].map((category) => (
                    <MuiLink
                      key={category}
                      component={Link}
                      to={`/products/${category.toLowerCase().replace(' ', '-')}`}
                      sx={{ 
                        color: '#fff', 
                        textDecoration: 'none',
                        '&:hover': { color: '#ccc' }
                      }}
                    >
                      {category}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              {/* Newsletter Signup */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Newsletter
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #333',
                      backgroundColor: '#111',
                      color: '#fff',
                      width: '100%',
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: '#fff',
                      color: '#000',
                      '&:hover': { bgcolor: '#f5f5f5' },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Grid>

              {/* Contact Info */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Contact Us
                </Typography>

                <Typography variant="body2" sx={{ mb: 1 }}>
                  Email: support@whattheflex.com
                </Typography>

                <Typography variant="body2" sx={{ mb: 1 }}>
                  Phone: +1 234 567 8900
                </Typography>

                <Typography variant="body2">
                  Address: 123 Fashion Street, Style City, FL 12345
                </Typography>

              </Grid>
            </Grid>

            {/* Copyright */}
            <Box sx={{ borderTop: '1px solid #333', mt: 4, pt: 4, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} What The Flex. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;