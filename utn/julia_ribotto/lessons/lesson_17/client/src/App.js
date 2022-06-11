

import RickCharacter from "./components/Characters";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from "./components/Layout";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
