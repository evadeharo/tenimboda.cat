import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmation" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
