import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Layout from "./components/Layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound";
import { useReducer } from 'react';
import AuthMiddleware from './middlewares';
import { StoreContext } from './context/store';
import { globalReducer } from './reducers/global';



export default function App() {
  const [globalState, setGloblState] = useReducer(globalReducer, {
    isloggeIn: false,
    isDarckMode: true
  })

  const { isDarckMode } = globalState
  const value = {
    globalState,
    setGloblState
  }
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  //const [isDarckMode,setIsDarckMode]=useState(true)//

  const theme = createTheme({
    palette: {
      mode: isDarckMode ? 'dark' : 'light', // 'dark' or 'light'
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<AuthMiddleware><Dashboard /></AuthMiddleware>} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </StoreContext.Provider>

  );
}