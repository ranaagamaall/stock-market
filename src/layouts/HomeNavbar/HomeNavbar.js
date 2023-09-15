import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/investor/NavData";
import brand from "../../assets/icons/brand.svg";
import Dailog from "../../components/Dailog";

function HomeNavbar(props) {
  const pic = "https://source.unsplash.com/random/200x200";
  const addFundsRef = useRef(null);
  const rechargeMoneyRef = useRef(null);

  function handleAddFunds() {
    if (rechargeMoneyRef.current.value === "" || parseInt(rechargeMoneyRef.current.value) <= 0) {
      return;
    }
    props.user.currentBalance += parseInt(rechargeMoneyRef.current.value);
    rechargeMoneyRef.current.value = "";
    addFundsRef.current.close();
    props.setReload((reload) => !reload);
  }

  return (
    <div className="px-4 pb-4 shadow-lg bg-primary md:px-14 font-main ">
      <div className="flex w-full ">
        <div className="flex items-center justify-between w-full ">
          <NavLink to="/">
            <h2 className=" font-bold text-[1.5rem] leading-8 flex gap-3 items-center ">
              <img src={brand} alt="brand" className="w-[2rem]" />
              <span className="hidden md:block">Stocker</span>
            </h2>
          </NavLink>
          <ul className="flex items-center gap-4">
            {data.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    [
                      "text-[1rem]  relative cursor-pointer flex gap-4 items-center my-6 capitalize hover:text-accent hover:ease-in ",
                      isActive
                        ? "font-bold text-accent translate-y-[-2px]"
                        : "",
                    ].join(" ")
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="grid items-center gap-4 py-4 md:py-0 md:flex text-primary">
            <button onClick={() => addFundsRef.current.showModal()}
              className="px-3 text-lg font-medium capitalize bg-accent rounded-3xl">
              + Add funds
            </button>
            <h4 className="px-3 text-lg font-medium text-center bg-success rounded-3xl ">
              $ {props.user.currentBalance}
            </h4>
            <img
              src={pic}
              alt="profilepic"
              className="hidden md:block rounded-full w-[2.5rem] border-2 border-success "
            />
          </div>
        </div>
      </div>
      <Dailog ref={addFundsRef} name="Recharge your wallet" className="mt-[10%] w-[90%] md:w-1/2" onSubmit={handleAddFunds} submitText="Recharge">
        <input type="number" pattern="[0-9]" ref={rechargeMoneyRef} onKeyUp={(e) => { if (e.code === 'Enter') handleAddFunds() }} className="w-full p-2 border-2 rounded-lg outline-none border-primary text-primary invalid:border-fail " placeholder="Enter amount" />
        {/* {error ? <p className="font-semibold text-fail">{error}</p> : ""} */}
      </Dailog>
    </div>
  );
}

export default HomeNavbar;
