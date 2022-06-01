import MiClaseComponente from "./components/MiClaseComponente";
import MiComponente from "./components/MiComponente";
import MiFuncionComponente from "./components/MiFuncionComponente";
import RickCharacter from "./components/RickCharacters";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
