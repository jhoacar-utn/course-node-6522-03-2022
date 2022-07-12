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
import { ThemeContext } from '../../context/theme'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { StoreContext } from '../../context/store';
import { CHANGE_LOGGED_IN, CHANGE_DARK_MODE } from '../../reducers/action';


export default function Navbar() {

  const { globalState, setGlobalState } = useContext(StoreContext)
  const { isloggedIn, isDarksMode } = globalState


  const handleLogout = () => {
    /*     setIsloggedInd(false) */
    setGlobalState({
      type: CHANGE_LOGGED_IN,
      payload: false
    })
    saveToken("")
  }

  const handleChangeClick = () => {
    /*  setIsDarkMode(!isDarksMode) */
    setGlobalState({
      type: CHANGE_DARK_MODE,
      payload: !globalState.isDarksMode
    })
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
            <Link className={style['navbar-link']} to="/"> App</Link>
          </Typography>

          <Button onClick={handleChangeClick} sx={{ color: 'unset' }}>
            {
              isDarksMode &&
              <LightModeIcon />
            }
            {
              !isDarksMode &&
              <DarkModeIcon />
            }
          </Button>

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
    </Box >
  );
}