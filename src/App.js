import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./NavigationBar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { Exercises } from "./Exercises";
import { Upload } from "./Upload";
import { MyImages } from "./MyImages";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <NavigationBar />

        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="upload" element={<Upload />} />
          <Route path="myimages" element={<MyImages />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
