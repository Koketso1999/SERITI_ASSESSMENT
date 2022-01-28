import {Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import NotFound from "./Pages/404";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <GlobalStyle />

      {/* Navigation To Call all Screens Across the website */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
