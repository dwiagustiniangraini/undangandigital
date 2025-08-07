import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Wrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
