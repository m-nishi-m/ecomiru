'use client';

import { Box } from '@mui/material';
import React from 'react';

export const Footer = (): React.JSX.Element => (
  <Box
    component="footer"
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 48,
      bgcolor: 'background.paper',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'center',
      px: 4,
      zIndex: 9999,
    }}
  >
  </Box>
);
