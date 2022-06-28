import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Main from "./pages/Main/Main";
import Info from "./pages/Info/Info";
import Error from "./pages/Error/Error";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main items={items} setItems={setItems} />} />
        <Route path="info" element={<Info items={items} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
