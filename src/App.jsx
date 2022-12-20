import MyButton from "./button";
import "../Styles/App.css";

function App() {
  return (
      <div className="App">
        <h1>Hola!</h1>
        <h2>
          Espero que que te guste el regalo, para saber quien soy despliega las
          pistas.
        </h2>
        <br />
        <div>
          <MyButton />
        </div>
      </div>
  );
}

export default App;
