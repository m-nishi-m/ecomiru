'use client';

import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Box, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export const Header = (): React.JSX.Element => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'#fff'}}>
            えこみる
          </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#fff', fontSize: 8, letterSpacing: 5 }}
            >
              -ecomiru-
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" variant="outlined" sx={{ color: '#fff', borderColor: '#fff'}}>
              ログイン
            </Button>
            <Button color="inherit" variant="outlined" sx={{ color: '#fff', borderColor: '#fff'}}>
              新規登録
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
