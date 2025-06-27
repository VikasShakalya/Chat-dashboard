import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 2,
        mt: 5,
        backgroundColor: '#f1f1f1',
        borderTop: '1px solid #ddd',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2025 Interview Chat Assistant. Built by Vikas Shakalya.
      </Typography>
    </Box>
  );
}

export default Footer;
