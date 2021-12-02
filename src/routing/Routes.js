import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Exercises } from "../pages/Exercises";
import { Upload } from "../pages/upload/Upload";
import { MyImages } from "../pages/MyImages";
import AboutPage from "../pages/AboutPage";
import RequireAuth from "./RequireAuth";
import { Translation } from "../pages/Translation";
import { Navigate } from "react-router";

export default function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />

        <Route element={<RequireAuth />}>
          <Route path="/exercise" element={<Exercises />} />
          <Route path="/translation/:translationId" element={<Translation />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/myimages" element={<MyImages />} />
        </Route>

        <Route path="/" element={<Navigate to="/exercise" />} />
      </Routes>
    </>
  );
}
