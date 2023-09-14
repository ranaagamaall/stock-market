import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Admin from "./pages/admin/AdminPage";
import Investor from "./pages/investor/InvestorPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>

          <Route path="/admin/*" element={<Admin />} />
          <Route path="/home/*" element={<Investor />} />
          <Route path="*" element={<Navigate to="/home" replace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
