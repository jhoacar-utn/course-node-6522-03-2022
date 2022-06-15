import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import style from './index.module.css'
import { Link } from 'react-router-dom';
import { AuthorizationContext } from '../../context/authorization';
import { saveToken } from '../../services/authentication';

export default function Navbar() {

  const { isloggedIn, setIsloggedInd } = useContext(AuthorizationContext)


  const handleLogout = () => {
    setIsloggedInd(false)
    saveToken("")
  }

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
            <Link className={style['navbar-link']} to="/">  My App</Link>
          </Typography>

          {
            !isloggedIn && <>
              <Button color="inherit">
                <Link className={style['navbar-link']} to="/login"> Login </Link>
              </Button>

              <Button color="inherit">
                <Link className={style['navbar-link']} to="/register">  Register</Link>
              </Button>
            </>}

          {
            isloggedIn && <>
              <Button color="inherit">
                <Link className={style['navbar-link']} to="/Dashboard">  Dashboard </Link>
              </Button>
              <Button onClick={handleLogout} color='inherit'>Logout</Button>
            </>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
}