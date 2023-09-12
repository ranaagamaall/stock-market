import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./pages/admin/AdminPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<Admin/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
