import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/investor/NavData";
import brand from "../../assets/icons/brand.svg";

function HomeNavbar(props) {
  const pic = "https://source.unsplash.com/random/200x200";

  return (
    <div className="shadow-lg bg-primary px-14 pb-4 font-main ">
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
            <button className="px-3 text-lg font-medium capitalize bg-accent rounded-3xl">
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
      
    </div>
  );
}

export default HomeNavbar;
