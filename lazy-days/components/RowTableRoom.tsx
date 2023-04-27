import { RoomType } from "@/types/UserType";
import {
   faMoneyBill,
   faPen,
   faPenToSquare,
   faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";

type Props = {
   item: RoomType;
   check: boolean;
   updateCheck: Function;
};

const RowTableRoom = (props: Props) => {
   return (
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
         <td className="w-4 px-4 py-3">
            <div className="flex items-center">
               <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               />
               <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
               </label>
            </div>
         </td>
         <td className="px-4 py-2">
            <span className="bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 text-[15px] font-[600]">
               {props.item.MA_PHONG}
            </span>
         </td>

         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {props.item.TEN_PHONG}
            </span>
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">{props.item.LOAI}</div>
         </td>
         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.item.SO_LUONG_DAP_UNG}
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
               <div
                  className={`inline-block w-4 h-4 mr-2 ${
                     props.item.TRANG_THAI ? "bg-green-400" : "bg-red-600"
                  } rounded-full`}
               ></div>
               {props.item.TRANG_THAI ? "Available" : "Not available"}
            </div>
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex justify-center">
               {props.item.LOAI ? (
                  <div></div>
               ) : (
                  <Button className="w-40 mr-2 bg-green-600  hover:bg-green-800 ">
                     <FontAwesomeIcon
                        className="w-4 h-4 mr-1"
                        icon={faMoneyBill}
                     />
                     Check-Out
                  </Button>
               )}

               {/* <Button className="ml-2">
                  <FontAwesomeIcon className="ml-1" icon={faTrash} />
                  Delete user
               </Button> */}
            </div>
         </td>
      </tr>
   );
};

export default RowTableRoom;
