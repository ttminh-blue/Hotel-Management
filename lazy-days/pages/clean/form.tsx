import DefaultLayout from "@/layouts/DefaultLayout";
import { Table } from "flowbite-react";
import React, { FormEvent } from "react";

type Props = {};

const CleanRoom = (props: Props) => {
   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   };

   return (
      <DefaultLayout>
         <form className="container mx-auto p-4 pt-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder="Bellman"
                  />
                  <label
                     htmlFor="name"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Bellman Staff
                  </label>
               </div>
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="text"
                     name="staffId"
                     id="staffId"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     disabled={true}
                  />
                  <label
                     htmlFor="staffId"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Cleanning Staff
                  </label>
               </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="email"
                     name="email"
                     id="email"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     disabled={true}
                  />
                  <label
                     htmlFor="email"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Cleanning staff email
                  </label>
               </div>

               <div className="relative z-0 w-full mb-6 group">
                  <input
                     type="tel"
                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                     name="floating_phone"
                     id="floating_phone"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     disabled={true}
                  />
                  <label
                     htmlFor="floating_phone"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Cleanning staff phone
                  </label>
               </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
               <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                  Select rooms
               </label>
               <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
                  <option selected>Choose rooms</option>
                  <option value="room101">Room 101</option>
                  <option value="room102">Room 102</option>
                  <option value="room103">Room 103</option>
                  <option value="room104">Room 104</option>
               </select>
            </div>
            <div className="flex items-center gap-40">
               <div>
                  <label>Time started </label>
                  <input className="" type="datetime-local" />
               </div>
               <div>
                  <label>Time ended </label>
                  <input className="" type="datetime-local" />
               </div>
            </div>

            <button
               type="submit"
               className="text-white my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Add
            </button>
         </form>
      </DefaultLayout>
   );
};

export default CleanRoom;
