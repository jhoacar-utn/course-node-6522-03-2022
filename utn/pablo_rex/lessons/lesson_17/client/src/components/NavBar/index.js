import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className={styles['navbar-link']} to="/login">My App</Link>
          </Typography>
          <Button color="inherit">
            <Link className={styles['navbar-link']} to="/login">Login</Link>
          </Button>
          <Button color="inherit">
            <Link className={styles['navbar-link']} to="/register">Register</Link>
          </Button>
          <Button color="inherit">
            <Link className={styles['navbar-link']} to="/dashboard">Dashboard</Link>
          </Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
