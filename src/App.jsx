import "./App.css";

// Routes and Route
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Teachers from "./pages/Teachers/Teachers";
import  TeacherDetailPage from  "./pages/Teachers/TeacherDetail" // 👈 import detail page

// Layout
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Teachers Page With Teacher Details page */}
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/:id" element={<TeacherDetailPage />} />

          {/* Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
