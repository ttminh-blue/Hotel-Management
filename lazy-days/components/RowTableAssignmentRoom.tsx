import { BellmanAssignmentRoom, BookingGet } from "@/types/UserType";
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
   item: BellmanAssignmentRoom;
};

const RowTableAssignmentRoom = (props: Props) => {
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
               {props.item.TEN_KH}
            </span>
         </td>

         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {props.item.SDT}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {props.item.TEN_PHONG}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {new Date(props.item.NGAY_NHAN).toLocaleDateString("en-US")}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {props.item.LOAI}
            </span>
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div>
               <Button className="w-40 mr-2">
                  <FontAwesomeIcon
                     className="w-4 h-4 mr-1"
                     icon={faPenToSquare}
                  />
                  <Link
                     href={{
                        pathname: "/bellman/roomAssignmentForm",
                        query: {
                           id: props.item.MA_PHIEU_DP,
                           roomId: props.item.MA_PHONG,
                        },
                     }}
                  >
                     Detail
                  </Link>
               </Button>
            </div>
         </td>
      </tr>
   );
};

export default RowTableAssignmentRoom;
