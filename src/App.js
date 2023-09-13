import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/AdminPage";
import Investor from "./pages/investor/InvestorPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin/>} />
        <Route path="/home/*" element={<Investor/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
