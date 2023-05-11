import RowTableRoom from "@/components/RowTableRoom";
import DefaultLayout from "@/layouts/DefaultLayout";
import { BookingGet, RoomType } from "@/types/UserType";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {};

const RoomManage = (props: Props) => {
   const [room, setRoom] = useState<RoomType[]>([]);
   const [check, setCheck] = useState<boolean>(true);
   const updateCheck = () => {
      setCheck(() => !check);
   };
   const [search, setSearch] = useState<string>("");
   const url = process.env.NEXT_PUBLIC_API;
   const getData = async () => {
      await axios
         .get(`${url}Phong`)
         .then((response) => {
            setRoom(() => response.data);
            console.log(response.data);
         })
         .then((json) => console.log(json));
   };
   const getDataCMND = async (CMND: string) => {
      if (CMND === "") {
         setCheck(() => !check);
         return;
      }

      await axios
         .get(`${url}Phong/CMND?cmnd=${CMND}`)
         .then((response) => {
            setRoom(() => response.data);
            console.log(response.data);
         })
         .then((json) => console.log(json));
   };
   const SearchCMND = async (event: any) => {
      setSearch(() => event.target.value);
      await getDataCMND(event.target.value);
   };
   useEffect(() => {
      getData();
   }, [check]);
   return (
      <DefaultLayout>
         <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 ">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12  ">
               <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                  <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                     <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3 ">
                        <div>Enter CMND: </div>
                        <input
                           type="input"
                           title="Enter CMND"
                           className="border-solid border-2 border-sky-500 flex items-center justify-center px-4 py-2 text-sm font-medium text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                           value={search}
                           onChange={SearchCMND}
                        ></input>
                     </div>
                  </div>
                  <div className="overflow-x-auto h-screen">
                     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                           <tr>
                              <th scope="col" className="px-4 py-3">
                                 Room ID
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Room
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Type
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Occupancy
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Status
                              </th>
                              <th
                                 scope="col"
                                 className="px-4 py-3 flex justify-center"
                              >
                                 Activities
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {room.map((item, index) => {
                              return (
                                 <RowTableRoom
                                    item={item}
                                    key={index}
                                    updateCheck={updateCheck}
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

export default RoomManage;
