import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

const validIds = ["a", "b"]; // TODO: export valid id's

function ProtectedConfirmation() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");

  const isValid = id && validIds.includes(id);

  return isValid ? <FormPage id={id} /> : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmation" element={<ProtectedConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
