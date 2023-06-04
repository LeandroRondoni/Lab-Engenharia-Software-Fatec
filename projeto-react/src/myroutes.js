import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home"
import Atv01 from "./Atv01"
import Atv02 from "./Atv02"
import Atv03 from "./Atv03"
import Atv04 from "./Atv04"
import Layout from "./Layout";
import Atv05 from "./Atv05"
import Atv06 from "./Atv06"
import Atv07 from "./Atv07"
// import Atv08 from "./Atv08"

export default function MyRoutes(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/Atv01" element={<Atv01/>} />
                <Route path="/Atv02" element={<Atv02/>} />
                <Route path="/Atv03" element={<Atv03/>} />
                <Route path="/Atv04" element={<Atv04/>} />
                <Route path="/Atv05" element={<Atv05/>} />
                <Route path="/Atv06" element={<Atv06/>} />
                <Route path="/Atv07" element={<Atv07/>} />                
            </Route>
        </Routes>
        </BrowserRouter>
    )
}