
import "./App.css"

// Routes and Route
import {Routes ,Route} from "react-router-dom"


// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFOund from "./pages/NotFound/NotFound"

// Layout

import Layout from "./Layout/Layout"







export default function App() {

return (
    <>
<Routes>

<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}></Route>
<Route path="/About" element={<About/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="*" element={<NotFOund/>}></Route>
</Route>
</Routes>
    
    </>
)


}
