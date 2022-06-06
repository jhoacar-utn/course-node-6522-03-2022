import { ThemeProvider, createTheme } from '@mui/material/styles';
import RickCharacter from "./components/Characters/index";
import Layout from './components/Layout/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import CompLogin from './components/Login';
import Footer from './components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 'dark' or 'light'
  },
});

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <Routes>
            <Route path="/login" element={<CompLogin />} />
            <Route path="/" element={<RickCharacter />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

        </Layout>
      </ThemeProvider>
    </Router>

  );
}