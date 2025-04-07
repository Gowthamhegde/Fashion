import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  styled,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as CartIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000',
  boxShadow: 'none',
  height: '64px',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 1.5rem',
  height: '100%',
  maxWidth: '1920px',
  margin: '0 auto',
  width: '100%',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});

const Logo = styled('img')({
  height: '24px',
  width: 'auto',
});

const SideContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const StyledIconButton = styled(IconButton)({
  color: '#fff',
  padding: '8px',
  '&:hover': {
    color: '#ccc',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
  },
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Products', path: '/products' },
    { text: 'Categories', path: '/categories' },
    { text: 'About', path: '/about' },
  ];

  return (
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          <SideContainer>
            <StyledIconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </StyledIconButton>
            <StyledIconButton sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <SearchIcon />
            </StyledIconButton>
          </SideContainer>

          <LogoContainer 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none',
              transform: isMobile ? 'translateX(-30%)' : 'translateX(-50%)',
            }}
          >
            <Logo src="/wtf-logo.svg" alt="WTF" />
          </LogoContainer>

          <SideContainer>
            <StyledIconButton 
              component={Link} 
              to="/profile"
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <PersonIcon />
            </StyledIconButton>
            <StyledIconButton component={Link} to="/cart">
              <CartIcon />
            </StyledIconButton>
          </SideContainer>
        </StyledToolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
      >
        <Box sx={{ mt: 8 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.text} 
                component={Link} 
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;