import "./App.css";
import Weather from "./Weather";
import AppFooter from "./AppFooter";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
