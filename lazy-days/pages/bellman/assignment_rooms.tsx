import DefaultLayout from "@/layouts/DefaultLayout";
import { BellmanAssignmentRoom, BookingGet } from "@/types/UserType";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RowTableAssignmentRoom from "@/components/RowTableAssignmentRoom";
import { useQuery } from "react-query";
type Props = {};

const RoomAssignmentManagement = (props: Props) => {
   const [check, setCheck] = useState(false);

   const refreshApi = () => {
      setCheck(() => !check);
   };

   const roomAssignmentQuery = useQuery<BellmanAssignmentRoom[]>(
      ["assignment-rooms", check],
      async () =>
         (
            await axios.get(
               process.env.NEXT_PUBLIC_API + "Bellman/assignment_rooms"
            )
         ).data
   );

   return (
      <DefaultLayout>
         <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
               <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                  <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                     <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                        <button
                           type="button"
                           className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        >
                           <svg
                              className="h-3.5 w-3.5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                           >
                              <path
                                 clip-rule="evenodd"
                                 fill-rule="evenodd"
                                 d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              />
                           </svg>
                           Add new product
                        </button>
                        <button
                           type="button"
                           className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                           <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                           >
                              <path
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                              />
                           </svg>
                           Refresh
                        </button>
                     </div>
                  </div>
                  <div className="overflow-x-auto">
                     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                           <tr>
                              <th scope="col" className="p-4">
                                 <div className="flex items-center">
                                    <input
                                       id="checkbox-all"
                                       type="checkbox"
                                       className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                       htmlFor="checkbox-all"
                                       className="sr-only"
                                    >
                                       checkbox
                                    </label>
                                 </div>
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Customer Name
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Phone
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Room Name
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Check-in Date
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 State
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Options
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {roomAssignmentQuery.isSuccess &&
                              roomAssignmentQuery.data.map((item, index) => {
                                 return (
                                    <RowTableAssignmentRoom
                                       refreshFunc={refreshApi}
                                       item={item}
                                       key={index}
                                    />
                                 );
                              })}
                        </tbody>
                     </table>
                  </div>
                  <nav
                     className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                     aria-label="Table navigation"
                  >
                     <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span className="font-semibold text-gray-900 dark:text-white">
                           1-10
                        </span>
                        of
                        <span className="font-semibold text-gray-900 dark:text-white">
                           1000
                        </span>
                     </span>
                     <ul className="inline-flex items-stretch -space-x-px">
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              <span className="sr-only">Previous</span>
                              <svg
                                 className="w-5 h-5"
                                 aria-hidden="true"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                 />
                              </svg>
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              1
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              2
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              aria-current="page"
                              className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                           >
                              3
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              ...
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              100
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              <span className="sr-only">Next</span>
                              <svg
                                 className="w-5 h-5"
                                 aria-hidden="true"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                 />
                              </svg>
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </section>
      </DefaultLayout>
   );
};

export default RoomAssignmentManagement;
