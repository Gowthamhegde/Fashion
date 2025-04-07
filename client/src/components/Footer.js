import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Shop: ['New Arrivals', 'Men', 'Women', 'Kids', 'Accessories'],
    Help: ['Customer Service', 'Track Order', 'Returns', 'Shipping Info'],
    About: ['Our Story', 'Careers', 'Privacy Policy', 'Terms & Conditions'],
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Social Media */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              FASHION STORE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your one-stop destination for the latest fashion trends and styles.
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="Pinterest">
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={12} sm={4} md={2} key={category}>
              <Typography variant="h6" gutterBottom>
                {category}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {links.map((link) => (
                  <Box component="li" key={link} sx={{ mb: 1 }}>
                    <MuiLink
                      component={Link}
                      to={`/${category.toLowerCase()}/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      color="inherit"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link}
                    </MuiLink>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to our newsletter for the latest updates and offers.
            </Typography>
            <Box
              component="form"
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '8px',
                  border: 'none',
                  borderRadius: '4px',
                  flex: 1,
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'white',
                  color: 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            mt: 4,
            pt: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Fashion Store. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 