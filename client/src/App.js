import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import MarqueeBanner from './components/MarqueeBanner';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Box sx={{ 
            bgcolor: '#fff',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Navbar />
            <Box sx={{ mt: '64px' }}>
              <MarqueeBanner />
            </Box>
            <Box component="main" sx={{ 
              flex: 1,
              mt: 0 // Remove top padding since MarqueeBanner handles the spacing
            }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;