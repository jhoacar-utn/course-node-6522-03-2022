import React, { useReducer, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import NotFoundt from './pages/NotFound'
import { Toaster } from 'react-hot-toast'
import { AuthorizationContext } from "./context/authorization";
import AuthMiddleware from "./middlewares/Auth"
import { ThemeContext } from "./context/theme";
import { StoreContext } from "./context/store";
import { globalReducer } from "./reducers/global";




function App() {

  const [globalState, setGlobalState] = useReducer(globalReducer, {
    isloggedIn: false,
    isDarksMode: true
  })

  const { isDarksMode } = globalState

  const value = {
    globalState,
    setGlobalState
  }

  /*   const [isloggedIn, setIsloggedInd] = useState(false)
    const [isDarksMode, setIsDarkMode] = useState(true) */


  const theme = createTheme({
    palette: {
      mode: isDarksMode ? 'dark' : 'light',
    },
  });

  return (
    <StoreContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Login" element={<Login />} />
              <Route path="Register" element={<Register />} />
              <Route path="Dashboard" element={
                <AuthMiddleware>
                  <Dashboard />
                </AuthMiddleware>} />
              <Route path="*" element={<NotFoundt />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

export default App;





