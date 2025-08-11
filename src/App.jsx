import "react-photo-view/dist/react-photo-view.css";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <>
      <BrowserRouter basename="/undangandigital">
        <Routes>
          <Route path="" element={<Wrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
