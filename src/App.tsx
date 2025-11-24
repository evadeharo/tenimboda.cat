import { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import { UserProvider, useUser } from "./context/UserContext";
import { invites } from "./lib/constants";
import { FormProvider } from "./context/useFormContext";

function ProtectedConfirmation() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("userId");
  const { user, setUser } = useUser();

  const guest = invites.find((c) => c.userId === id);

  useEffect(() => {
    if (guest) {
      setUser(guest);
    }
  }, [guest, setUser]);

  if (!guest) {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    return <div>Cargando...</div>;
  }

  return <FormPage />;
}

export default function App() {
  return (
    <UserProvider>
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/confirmation" element={<ProtectedConfirmation />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </UserProvider>
  );
}
