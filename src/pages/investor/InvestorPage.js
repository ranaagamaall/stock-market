// import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomeNavbar from "../../layouts/HomeNavbar/HomeNavbar";
import Home from "./home/Home";
import Company from "./company/Company";
import Stocks from "./stocks/Stocks";
import user from "../../assets/data/investor/user";
import Transactions from "./transactions/Transactions";
import { useState } from "react";

function Investor() {

  const [reload, setReload] = useState(false);

  return (
    <div className="bg-secondary inset-x-0 min-h-[100vh] text-text flex">
      <div className="w-full">
        <HomeNavbar user={user} setReload={setReload} />
        <main className="flex flex-col w-full gap-4 justify-evenly">
          <Routes>
            <Route path="" element={<Home user={user} />} />
            <Route path="/company/:id" element={<Company user={user} setReload={setReload} />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/stocks" element={<Stocks user={user} setReload={setReload} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Investor;
