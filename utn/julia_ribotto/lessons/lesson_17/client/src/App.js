
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { AuthorizationContext } from "./context/authorization";
import AuthMiddleware from "./middleware/Auth";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthorizationContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Toaster position="bottom-right" reverseOrder={false}></Toaster>
        <Layout>
          <Routes>
            <Route exact="" path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<AuthMiddleware>
              <Dashboard />
              </AuthMiddleware>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
    </AuthorizationContext.Provider>
  );
}
