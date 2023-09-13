import React, { useState } from "react";
import data from '../../../assets/data/admin/adminInvestors.js';


function Investors() {

  const [users, setUsers] = useState(data.users);

  return (
    <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
      <div class="relative mt-2 w-1/2 mx-auto flex  flex-wrap items-stretch">
        <input
          type="search"
          class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          onChange={(e) => { setUsers(data.users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()))) }}
        />

      </div>
      <div className="flex-auto h-full px-0 pt-0 pb-2">
        <div className="p-0 overflow-x-auto h-[80vh]">
          <table className="items-center w-full mb-0 align-top border-gray-200 pb text-slate-500">
            <thead className="align-bottom">
              <tr>
                {
                  data.columns.map((column, index) =>

                    <th key={index} className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                      {column}
                    </th>
                  )
                }
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) =>

                <tr key={index}>

                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <div className="flex px-2 py-1">
                      <div>
                        <img src={user.pic} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal">{user.name}</h6>
                        <p className="mb-0 text-xs leading-tight text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs font-semibold leading-tight text-center">{user.numberOfTransactions}</p>
                  </td>
                  <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs font-semibold leading-tight text-center">{user.totalInvestment}</p>
                  </td>
                  <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs font-semibold leading-tight text-center">{user.currentBalance}</p>
                  </td>
                  <td className="p-2 align-middle border-b whitespace-nowrap shadow-transparent">
                    <a className="px-4 py-2 text-xs font-semibold leading-tight rounded-lg bg-success text-slate-400">view</a>
                  </td>


                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default Investors;
