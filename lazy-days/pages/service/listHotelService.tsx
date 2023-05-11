import DefaultLayout from "@/layouts/DefaultLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";


const ListHotelService = () => {

    const [data,setData] = useState([])
    const getData = () =>{
        axios.get('https://localhost:44335/api/DichVu/listService')
         .then(res => {
            setData(res.data)
         })
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <DefaultLayout>
            <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
                <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        
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
                                            CUSTOMER
                                        </th>
                                        <th scope="col" className="p-4">
                                            Phone
                                        </th>
                                        <th scope="col" className="p-4">
                                            ID_SERVICE
                                        </th>
                                        <th scope="col" className="p-4">
                                            AMOUNT
                                        </th>

                                        <th scope="col" className="p-4">
                                            TOTAL
                                        </th>

                                        <th scope="col" className="p-4">
                                            REGISTRATION DATE
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.map((val: any) => {
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
                                                                {val.TEN_KH}
                                                            </div>
                                                        </th>
                                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {val.SDT}
                                                        </td>
                                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {val.MA_DV}
                                                        </td>
                                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="flex items-center">
                                                                {val.SOLUONG}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="flex items-center">
                                                                {val.TONG_TIEN}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="flex items-center">
                                                                {new Date(
                                                                    val.NGAY_DANG_KY
                                                                ).toLocaleString("en")}
                                                            </div>
                                                        </td>
                                                        
                                                    </tr>
                                                </>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default ListHotelService;
