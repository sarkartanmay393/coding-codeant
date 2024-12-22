import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RepositoryListing from "./pages/Dashboard";
import SignInPage from "./pages/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<RepositoryListing />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
