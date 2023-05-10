import RowTablePerson from "@/components/RowTablePerson";
import DefaultLayout from "@/layouts/DefaultLayout";
import { UserType } from "@/types/UserType";
import React, { useEffect, useState } from "react";
import axios from "axios";
type Props = {};


const UserManagement = (props: Props) => {
   const authFetch = axios.create({
      baseURL: 'https://localhost:44335/api',
   });
   const [data, setData] = useState<any>([]);
   const get_api = async () => {
      const data = await authFetch.get('/KhachHang');
      setData(data.data)
   }
   useEffect(() => {
      get_api()
   }, [])
   const check_makh = () => {
      
   }
   const handleChangle = () => {

   }
   return (
      <DefaultLayout>
         <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
               <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                  <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                     <div className="flex items-center flex-1 space-x-4">
                        <h5>
                           <span className="text-gray-500">All Customer: </span>
                           <span className="dark:text-white">{data.length}</span>
                        </h5>
                     </div>
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
                                 Name
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Position
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Email
                              </th>

                              <th scope="col" className="px-4 py-3">
                                 Phone
                              </th>
                              <th scope="col" className="px-4 py-3">
                                 Status
                              </th>
                              <th scope="col" className="px-4 py-3"></th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((item : any, index: any) => {
                              return <RowTablePerson item={item} key={index} handleChangle={handleChangle} check_makh={'MVNAS'} check = {true}/>;
                           })}
                        </tbody>
                     </table>
                  </div>
                  <nav
                     className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                     aria-label="Table navigation"
                  >
                    
                    
                  </nav>
               </div>
            </div>
         </section>
      </DefaultLayout>
   );
};

export default UserManagement;
