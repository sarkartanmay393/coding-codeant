import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import RepositoryListing from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<RepositoryListing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
