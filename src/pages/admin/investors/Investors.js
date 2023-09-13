import React, { useState, useRef } from "react";
import data from '../../../assets/data/admin/adminInvestors.js';
import Table from "../../../components/Table.js";


function Investors() {

  const [users, setUsers] = useState(data.users);
  const [userToInspect, setUserToInspect] = useState({});
  const dialog = useRef(null);

  function openInvestmentsModal(userId) {
    setUserToInspect(data.users.find(user => user.id === userId))
    dialog.current.showModal()
  }

  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-0 break-words border-0 border-transparent border-solid shadow-xl bg-secondary rounded-2xl bg-clip-border">
        <div className="relative flex flex-wrap items-stretch w-1/2 mx-auto mt-2">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-text bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-text outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-text focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
            placeholder="Search"
            onChange={(e) => { setUsers(data.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))) }}
          />

        </div>
        <div className="flex-auto h-full px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto h-[80vh]">
            <Table columns={data.columns} rows={users.map((user) => {
              return (
                <>
                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <div className="flex px-2 py-1">
                      <div>
                        <img src={user.pic} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-main">{user.name}</h6>
                        <p className="mb-0 text-xs leading-tight text-slate-400 font-main" >{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-">
                    <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{user.numberOfTransactions}</p>
                  </td>
                  <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{user.totalInvestment}</p>
                  </td>
                  <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{user.currentBalance}</p>
                  </td>
                  <td className="p-2 align-middle border-b whitespace-nowrap shadow-transparent">
                    <button onClick={() => openInvestmentsModal(user.id)}
                      className="px-4 py-2 font-semibold leading-tight rounded-lg text-s bg-success text-primary font-main">view</button>

                  </td>
                </>
              )
            })} />
          </div>
        </div>
      </div>
      <dialog ref={dialog} className="w-full h-full ml-[10%] my-auto bg-transparent text-text ">
        <div className="w-3/5 m-auto bg-primary rounded-2xl">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <div className="flex px-2 py-1">
              <div>
                <img src={userToInspect.pic} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user" />
              </div>
              <div className="flex flex-col justify-center">
                <h6 className="mb-0 text-sm leading-normal font-main">{userToInspect.name}</h6>
                <p className="mb-0 text-xs leading-tight text-slate-400 font-main" >{userToInspect.email}</p>
              </div>
            </div>
            <button onClick={() => dialog.current.close()}
              className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" >
              X
            </button>
          </div>
          <div className="flex flex-col p-6">
            {
              userToInspect.investments &&
              <Table columns={['Stock', 'Amount', 'Price', 'Date']} rows={userToInspect.investments.map((investment) => {
                return (
                  <>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{investment.stock}</p>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{investment.amount}</p>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{investment.price}</p>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 font-medium leading-tight text-center text-s font-main opacity-80">{investment.date}</p>
                    </td>
                  </>
                )
              })} />
            }
          </div>
          <div className="flex items-center justify-end p-6 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => dialog.current.close()}
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Return
            </button>
          </div>
        </div>
      </dialog>

    </>
  );
}

export default Investors;
