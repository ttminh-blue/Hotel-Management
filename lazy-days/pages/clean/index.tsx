import DefaultLayout from "@/layouts/DefaultLayout";
import {
   fa1,
   faCheckCircle,
   faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

type Props = {};

const CleaningManage = (props: Props) => {
   const [refresh, setRefresh] = useState(false);
   const cleanningRequests = useQuery(
      ["cleanning_requests", refresh],
      async () =>
         (await axios.get(process.env.NEXT_PUBLIC_API + "Cleanning")).data
   );

   const handleAcceptRequest = (id: string) => {
      if (cleanningRequests.isSuccess) {
         axios
            .put(process.env.NEXT_PUBLIC_API + "Cleanning/accept_request", {
               maPcdvs: id,
               maNvvs: "NV004",
            })
            .then(() => {
               toast("Accept request successfully.", {
                  theme: "dark",
                  type: "success",
               });
               setRefresh(() => !refresh);
            })
            .catch((ex) => {
               toast(ex, {
                  theme: "dark",
                  type: "error",
               });
            });
      }
   };

   return (
      <DefaultLayout>
         <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
               <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                     <div className="flex-1 flex items-center space-x-2">
                        <h5>
                           <span className="text-gray-500">All Requests:</span>
                           <span className="dark:text-white">
                              {cleanningRequests.isSuccess &&
                                 cleanningRequests.data.length}
                           </span>
                        </h5>

                        <button
                           type="button"
                           className="group"
                           data-tooltip-target="results-tooltip"
                        >
                           <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                           >
                              <path
                                 fill-rule="evenodd"
                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                 clip-rule="evenodd"
                              />
                           </svg>
                           <span className="sr-only">More info</span>
                        </button>
                        <div
                           id="results-tooltip"
                           role="tooltip"
                           className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                        >
                           Showing 1 - 100 of 1 results
                           <div
                              className="tooltip-arrow"
                              data-popper-arrow=""
                           ></div>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
                     <div className="w-full md:w-1/2">
                        <form className="flex items-center">
                           <label htmlFor="simple-search" className="sr-only">
                              Search
                           </label>
                           <div className="relative w-full">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                 <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       clip-rule="evenodd"
                                       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    />
                                 </svg>
                              </div>
                              <input
                                 type="text"
                                 id="simple-search"
                                 placeholder="Search..."
                                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              />
                           </div>
                        </form>
                     </div>
                     <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <div
                           id="filterDropdown"
                           className="z-10 hidden px-3 pt-1 bg-white rounded-lg shadow w-80 dark:bg-gray-700 right-0"
                        >
                           <div className="flex items-center justify-between pt-2">
                              <h6 className="text-sm font-medium text-black dark:text-white">
                                 Filters
                              </h6>
                              <div className="flex items-center space-x-3">
                                 <a
                                    href="#"
                                    className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                 >
                                    Save view
                                 </a>
                                 <a
                                    href="#"
                                    className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                 >
                                    Clear all
                                 </a>
                              </div>
                           </div>
                           <div className="pt-3 pb-2">
                              <label
                                 htmlFor="input-group-search"
                                 className="sr-only"
                              >
                                 Search
                              </label>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg
                                       className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                       aria-hidden="true"
                                       fill="currentColor"
                                       viewBox="0 0 20 20"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"
                                       />
                                    </svg>
                                 </div>
                                 <input
                                    type="text"
                                    id="input-group-search"
                                    className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Search keywords..."
                                 />
                              </div>
                           </div>
                        </div>
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
                                       className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                       htmlFor="checkbox-all"
                                       className="sr-only"
                                    >
                                       checkbox
                                    </label>
                                 </div>
                              </th>
                              <th scope="col" className="p-4">
                                 Bellman
                              </th>
                              <th scope="col" className="p-4">
                                 Cleanner
                              </th>
                              <th scope="col" className="p-4">
                                 Room
                              </th>
                              <th scope="col" className="p-4">
                                 Location
                              </th>

                              <th scope="col" className="p-4">
                                 Created Date
                              </th>

                              <th scope="col" className="p-4">
                                 Ended Date
                              </th>
                              <th scope="col" className="p-4">
                                 Options
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {cleanningRequests.isSuccess &&
                              cleanningRequests.data.map((val: any) => {
                                 return (
                                    <>
                                       <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                          <td className="p-4 w-4">
                                             <div className="flex items-center">
                                                <input
                                                   id="checkbox-table-search-1"
                                                   type="checkbox"
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                />
                                                <label
                                                   htmlFor="checkbox-table-search-1"
                                                   className="sr-only"
                                                >
                                                   checkbox
                                                </label>
                                             </div>
                                          </td>

                                          <th
                                             scope="row"
                                             className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                             <div className="flex items-center mr-3">
                                                {val.MA_NVBELLMAN}
                                             </div>
                                          </th>
                                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                             {val.MA_NVVS}
                                          </td>
                                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                             {val.TEN_PHONG}
                                          </td>
                                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                             <div className="flex items-center">
                                                {val.DIADIEM}
                                             </div>
                                          </td>
                                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                             <div className="flex items-center">
                                                {new Date(
                                                   val.THOIGIANBD
                                                ).toLocaleString("en")}
                                             </div>
                                          </td>
                                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                             <div className="flex items-center">
                                                {val.THOIGIANKT &&
                                                   new Date(
                                                      val.THOIGIANKT
                                                   ).toLocaleString("en")}
                                             </div>
                                          </td>
                                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                             <div className="flex items-center space-x-4">
                                                <button
                                                   type="button"
                                                   onClick={() =>
                                                      handleAcceptRequest(
                                                         val.MA_PCDVS
                                                      )
                                                   }
                                                   disabled={
                                                      val.THOIGIANKT
                                                         ? true
                                                         : false
                                                   }
                                                   data-drawer-target="drawer-update-product"
                                                   data-drawer-show="drawer-update-product"
                                                   aria-controls="drawer-update-product"
                                                   className={`py-2 px-3 flex ${
                                                      val.THOIGIANKT
                                                         ? "bg-gray-600"
                                                         : "bg-blue-600"
                                                   } text-white ${
                                                      !val.THOIGIANKT &&
                                                      "hover:bg-blue-800"
                                                   } 
                                                    items-center text-sm font-medium text-center text-black bg-primary-700 
                                                    rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
                                                    dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                                                >
                                                   <FontAwesomeIcon
                                                      className="w-4 h-4 mr-2"
                                                      icon={faCheckCircle}
                                                   />
                                                   Accept
                                                </button>
                                             </div>
                                          </td>
                                       </tr>
                                    </>
                                 );
                              })}
                        </tbody>
                     </table>
                  </div>
                  <nav
                     className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                     aria-label="Table navigation"
                  >
                     <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Showing
                        <span className="font-semibold ml-1 mr-1 text-gray-900 dark:text-white">
                           1 - 10
                        </span>
                        of
                        <span className="font-semibold ml-1 text-gray-900 dark:text-white">
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
                              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              1
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              2
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              aria-current="page"
                              className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                           >
                              3
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                           >
                              ...
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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

export default CleaningManage;
