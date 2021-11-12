import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { Exercises } from "./Exercises";
import { Upload } from "./Upload";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
