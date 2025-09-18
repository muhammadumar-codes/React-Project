import "./App.css";

// Routes and Route
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Teachers from "./pages/Teachers/Teachers";
import TeacherDetailPage from "./pages/Teachers/TeacherDetail"; 
import PrivateRoutes from "./pages/Roots/PrivateRoutes";
import LoginPage from "./pages/Login/Login";
import RedirectedIFAtunticated from "./pages/Roots/RedirectedIFAtunticated" 

// Layout
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        {/* Protected Routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Teachers & Teacher Detail */}
            <Route path="teachers" element={<Teachers />} />
            <Route path="teachers/:id" element={<TeacherDetailPage />} />
          </Route>
        </Route>

        {/* Redirect if Authenticated */}
        <Route element={<RedirectedIFAtunticated />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
