import RowTablePerson from "@/components/RowTablePerson";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

type Props = {};

const CheckRoom = (props: Props) => {
   return (
      <DefaultLayout>
         <div className="flex mt-8 ml-10">
            <div>
               <label
                  htmlFor="roomId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                  Mã phòng
               </label>
               <input
                  type="text"
                  name="roomId"
                  id="roomId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               />
            </div>
         </div>
         <div className="mt-8 ml-10 ">
            <h3 className="text-4xl">Kết quả kiểm tra</h3>
            <div className="flex">
               <div>
                  <label
                     htmlFor="item"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Đồ vật
                  </label>
                  <input
                     type="text"
                     name="item"
                     id="item"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label
                     htmlFor="status"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     tình trạng
                  </label>
                  <input
                     type="text"
                     name="status"
                     id="status"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />

                  <label
                     htmlFor="price"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Giá trị bồi thường
                  </label>
                  <input
                     type="text"
                     name="price"
                     id="price"
                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
               </div>
               <div
                  className="content-center"
                  style={{ marginLeft: "100px", marginTop: "89px" }}
               >
                  <button className="text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Xác nhận
                  </button>
               </div>
            </div>
            <div className="mt-8">
               <button className="text-white text-1xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Thêm
               </button>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default CheckRoom;
