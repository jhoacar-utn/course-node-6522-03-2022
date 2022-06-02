import { ThemeProvider, createTheme } from '@mui/material/styles';
import RickCharacter from "./components/Characters";
import Layout from './components/Layout';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 'dark' or 'light'
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout>
        <RickCharacter></RickCharacter>
      </Layout>
    </ThemeProvider>
  );
}