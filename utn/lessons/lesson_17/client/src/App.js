import { ThemeProvider, createTheme } from '@mui/material/styles';
import MiClaseComponente from "./components/MiClaseComponente";
import MiComponente from "./components/MiComponente";
import MiFuncionComponente from "./components/MiFuncionComponente";
import RickCharacter from "./components/RickCharacters";
import NavBar from "./components/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
      <NavBar></NavBar>
        Hola Mundo!
        <hr></hr>
        <MiComponente></MiComponente>
        <hr></hr>
        <MiClaseComponente></MiClaseComponente>
        <hr></hr>
        <MiFuncionComponente></MiFuncionComponente>
        <hr></hr>
        <RickCharacter></RickCharacter>
    </div>
    </ThemeProvider>
  );
}

export default App;