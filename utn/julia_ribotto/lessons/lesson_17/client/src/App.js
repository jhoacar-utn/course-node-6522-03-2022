
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Toaster } from 'react-hot-toast';
import { useReducer, useState } from "react";
import { AuthorizationContext } from "./context/authorization";
import AuthMiddleware from "./middleware/Auth";
import { ThemeContext } from "./context/theme";
import { StoreContext } from "./context/store";
import { globalReducer } from "./reducers/global";



export default function App() {

  const [globalState, setGlobalState] = useReducer(globalReducer, {
    isLoggedIn: false,
    isDarkMode: true
  });

  const { isDarkMode } = globalState;

  const value = {
    globalState,
    setGlobalState
  }

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light'
    },
  });

  return (
    <StoreContext.Provider value={value}>
      <ThemeProvider theme={theme}>
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
    </StoreContext.Provider>
  );
}
