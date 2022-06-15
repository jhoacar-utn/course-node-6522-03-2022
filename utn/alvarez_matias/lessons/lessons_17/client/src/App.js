import React, { useState } from "react";
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
import AuthMiddleware from "./Auth";




const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [isloggedIn, setIsloggedInd] = useState(false)

  return (
    <AuthorizationContext.Provider value={{ isloggedIn, setIsloggedInd }}>
      <ThemeProvider theme={darkTheme}>
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
    </AuthorizationContext.Provider>
  );
}

export default App;





