// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import HomeNavbar from "../../layouts/HomeNavbar/HomeNavbar";

function Investor() {
  return (
    <div className="bg-primary min-w-[80vw] min-h-[100vh] text-text flex">
      <div className="w-full">
      <HomeNavbar/>
        <main className="w-[80%] flex flex-col justify-evenly p-8 gap-4">
          <Routes>

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Investor;
