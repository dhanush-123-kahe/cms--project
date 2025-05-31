import { Route, Routes } from "react-router-dom";
import About from "../Pages/About.jsx";
import { SignIn } from "../Pages/SignIn.jsx";
import { SignUp } from "../Pages/SignUp.jsx";
import { Developers } from "../Pages/Developers.jsx";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Dashboard.jsx";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
