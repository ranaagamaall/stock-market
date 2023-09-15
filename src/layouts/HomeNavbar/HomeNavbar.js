import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/investor/NavData";
import brand from "../../assets/icons/brand.svg";
import Dailog from "../../components/Dailog";

function HomeNavbar(props) {
  const pic = "https://source.unsplash.com/random/200x200";
  const addFundsRef = useRef(null);

  return (
    <div className="pb-4 shadow-lg bg-primary px-14 font-main ">
      <div className="flex w-full ">
        <div className="flex items-center justify-between w-full ">
          <NavLink to="/">
            <h2 className=" font-bold text-[1.5rem] leading-8 flex gap-3 items-center ">
              <img src={brand} alt="brand" className="w-[2rem]" />
              Stocker
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

          <div className="flex items-center gap-4 text-primary">
            <button onClick={() => addFundsRef.current.showModal()}
              className="px-3 text-lg font-medium capitalize bg-accent rounded-3xl">
              + Add funds
            </button>
            <h4 className="px-3 text-lg font-medium bg-success rounded-3xl ">
              $ {props.user.currentBalance}
            </h4>
            <img
              src={pic}
              alt="profilepic"
              className="rounded-full w-[2.5rem] border-2 border-success "
            />
          </div>
        </div>
      </div>
      <Dailog ref={addFundsRef} name="Recharge your wallet" className="mt-[10%] w-1/2" onSubmit={() => console.log("as")} submitText="Recharge">
        <input type="number" className="w-full p-2 border-2 rounded-lg outline-none border-primary text-primary" placeholder="Enter amount" />

      </Dailog>

    </div>
  );
}

export default HomeNavbar;
