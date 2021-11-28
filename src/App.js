import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import MyRoutes from "./routing/Routes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <NavigationBar />
        <MyRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
