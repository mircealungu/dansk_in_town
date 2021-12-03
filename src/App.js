import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import MyRoutes from "./routing/Routes";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavigationBar />
        <MyRoutes />
      </Router>
    </div>
  );
}

export default App;
