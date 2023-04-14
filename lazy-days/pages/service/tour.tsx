import DefaultLayout from "@/layouts/DefaultLayout";
import { imageAssets } from "@/public/assets/imgs";
import { useState, useEffect } from "react";

import React from "react";

type Props = {
   onChangeProps?: any;
   tourDetail?: tourDetal;
   detailChoose?: tourDetal;
};

type tourDetal = {
   id: string;
   name: string;
   price: number;
   desc: string;
   id_Ct: string;
};

const l = [
   {
      id: "T0001",
      name: "Vườn sinh thái Royal",
      price: 400000,
      desc: "Trải nghiệm không khi đất trời trong lành ",
      id_Ct: "Ct001",
   },
];

const RenderService = (props: Props) => {
   return (
      <li>
         <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input
               id={props.tourDetail?.id}
               type="radio"
               name="Service"
               value={props.tourDetail?.id}
               onChange={props.onChangeProps}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
               htmlFor={props.tourDetail?.id}
               className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
               {props.tourDetail?.name}
            </label>
         </div>
      </li>
   );
};

const ListService = (props: Props) => {
   return (
      <div className="px-6 py-4 flex flex-col items-center">
         <button
            id="dropdownSearchButton"
            data-dropdown-toggle="dropdownSearch"
            data-dropdown-placement="right"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
         >
            Danh sách dịch vụ{" "}
            <svg
               className="w-4 h-4 ml-2"
               aria-hidden="true"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
               ></path>
            </svg>
         </button>

         <div
            id="dropdownSearch"
            className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
         >
            <div className="p-3">
               <label htmlFor="input-group-search" className="sr-only">
                  Search
               </label>
               <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           fillRule="evenodd"
                           d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                           clipRule="evenodd"
                        ></path>
                     </svg>
                  </div>
                  <input
                     type="text"
                     id="input-group-search"
                     className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search user"
                  />
               </div>
            </div>
            <ul
               className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
               aria-labelledby="dropdownSearchButton"
            >
               {l.map((tourDetail, index) => {
                  return (
                     <RenderService
                        key={index}
                        tourDetail={tourDetail}
                        onChangeProps={props.onChangeProps}
                     />
                  );
               })}
            </ul>
         </div>
      </div>
   );
};

const Detail = (pros: Props) => {
   return (
      <section className="flex justify-center items-center px-2 py-16">
         <div className="wrapper w-3/5 bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
            <div className="p-3  space-y-3 bg-gray-200 text-center">
               <h3 className="text-gray-700 text-4xl font-semibold text-md">
                  Tên dịch vụ: {pros.detailChoose?.name}
               </h3>
               <p className="text-3xl text-gray-900 leading-sm">
                  Thông tin dịch vụ: {pros.detailChoose?.desc}
               </p>
               <p className="text-3xl text-gray-900 leading-sm">
                  Giá: {pros.detailChoose?.price}
               </p>
            </div>
         </div>
      </section>
   );
};

const Tour = (props: Props) => {
   const [check, setCheck] = useState(false);
   const [detailChoose, setDetailChoose] = useState<tourDetal>();
   const [choose, setChoose] = useState("");
   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // setType(e.target.value);
   };

   const handleChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setChoose(e.target.value);
   };

   return (
      <DefaultLayout>
         <div className="flex justify-around justify-items-center">
            <div className="px-6 py-4 ">
               <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                  <p className="w-full text-3xl px-6 py-4 text-gray-900 rounded dark:text-gray-300">
                     Đăng ký dịch vụ
                  </p>
               </div>
               <ListService
                  //    type={type}
                  onChangeProps={(e: React.ChangeEvent<HTMLInputElement>) =>
                     handleChangeList(e)
                  }
               />
            </div>
         </div>

         <div className="flex justify-around justify-items-center mt-10">
            <button
               className="text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               onClick={() => {
                  const temp = JSON.parse(
                     JSON.stringify(l.find((x) => x.id === choose))
                  );
                  console.log(temp);
                  setDetailChoose(temp);
                  setCheck(true);
               }}
            >
               Kiểm tra thông tin và giá
            </button>
         </div>
         {check && (
            <div>
               <div>
                  <Detail detailChoose={detailChoose} />
               </div>
               <div className="flex justify-evenly   items-center px-2 py-16">
                  <button className="mr-5 text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Đăng ký
                  </button>
                  <button className="text-white text-3xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Hủy
                  </button>
               </div>
            </div>
         )}
      </DefaultLayout>
   );
};
export default Tour;
