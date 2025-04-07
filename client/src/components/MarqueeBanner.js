import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MarqueeBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Generate a random coupon code
  const generateCouponCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  };

  // Array of promotional messages
  const promotionalMessages = [
    `🎉 NEW ARRIVALS! Get 20% off on all new collections with code: ${generateCouponCode()} ★`,
    '🔥 Flash Sale! Up to 50% off on selected items - Limited time only! ★',
    `🎁 Special Weekend Offer! Use code ${generateCouponCode()} for extra 15% off ★`,
    '📦 Free Shipping on orders over $50 - Shop Now! ★',
    `💫 Members Only! Use code ${generateCouponCode()} for exclusive 25% discount ★`
  ];

  // Update message every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === promotionalMessages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [promotionalMessages.length]);

  const message = `${promotionalMessages[currentMessageIndex]} ${promotionalMessages[currentMessageIndex]} ${promotionalMessages[currentMessageIndex]}`;

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
        marginTop: '63px',
        '&:hover': {
          '& > div': {
            animationPlayState: 'paused'
          }
        }
      }}
    >
      <Typography
        component="div"
        sx={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 20s linear infinite',
          color: '#000',
          fontSize: '0.9rem',
          fontWeight: 500,
          letterSpacing: '0.5px',
          '@keyframes marquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default MarqueeBanner;