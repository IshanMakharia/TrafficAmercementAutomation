import Home from "./pages/Home";
import Users from "./pages/Users";
import Fine from "./pages/Fine";
import Rules from "./pages/Rules";
import MySearch from "./pages/Mysearch";
import { BrowserRouter, Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/fine" element={<Fine/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/mysearch" element={<MySearch/>}/>

    </Routes>
    </BrowserRouter>
  );
}

