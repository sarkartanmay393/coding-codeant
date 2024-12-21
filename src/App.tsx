import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import styled from "@emotion/styled";
import Dashboard from "./components/Dashboard";

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
