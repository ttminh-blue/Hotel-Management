import RowTablePerson from "@/components/RowTablePerson";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

type Props = {};

const FormTour = (props: Props) => {
   return (
      <DefaultLayout>
         <div className="mt-8 ml-10 ">
            <h3 className="text-4xl">Nhập đơn đăng ký</h3>
            <div className="flex">
               <div>
                  <label
                     htmlFor="name"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Tên người đại diện
                  </label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label
                     htmlFor="phone"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Số điện thoại người đại diện
                  </label>
                  <input
                     type="text"
                     name="phone"
                     id="phone"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label
                     htmlFor="count"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Số người tham gia
                  </label>
                  <input
                     type="number"
                     name="count"
                     id="count"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                     htmlFor="place"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Địa điểm đón
                  </label>
                  <input
                     type="text"
                     name="place"
                     id="place"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
               </div>
            </div>
            <div className="mt-8">
               <button className="text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Xác nhận
               </button>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default FormTour;
