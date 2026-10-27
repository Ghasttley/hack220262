import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          {/* Ruta principal por defecto */}
          <Route path="/" element={<Register />} />
          
          {/* Ruta para el formulario de registro */}
          <Route path="/register" element={<Register />} />
          
          <Route
            path="*"
            element={<h1 className="text-2xl p-6 text-red-600 font-bold">404 - Not Found</h1>}
          />
        </Routes>
    </BrowserRouter>
  );
}