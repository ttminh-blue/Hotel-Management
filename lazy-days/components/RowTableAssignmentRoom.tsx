import { BellmanAssignmentRoom, BookingGet } from "@/types/UserType";
import {
   faCheckCircle,
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
import axios from "axios";
import { toast } from "react-toastify";
type Props = {
   item: BellmanAssignmentRoom;
   refreshFunc: Function;
};

const RowTableAssignmentRoom = (props: Props) => {
   const handleOccupied = () => {
      axios
         .put(
            process.env.NEXT_PUBLIC_API +
               "Bellman/confirm_occupied/" +
               props.item.MA_PHIEU_DP
         )
         .then(() => {
            toast("Update successfully.", {
               theme: "dark",
               type: "success",
            });
            props.refreshFunc();
         })
         .catch((ex) => {
            toast(ex, {
               theme: "dark",
               type: "error",
            });
         });
   };

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
            <span className=" text-sm font-medium px-2 py-0.5 rounded">
               {props.item.SDT}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-sm font-medium px-2 py-0.5 rounded">
               {props.item.TEN_PHONG}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-sm font-medium px-2 py-0.5 rounded">
               {new Date(props.item.NGAY_NHAN).toLocaleDateString("en-US")}
            </span>
         </td>
         <td className="px-4 py-2">
            <span
               className={`text-sm flex items-center font-medium px-2 py-0.5 rounded`}
            >
               <div
                  className={`inline-block w-4 h-4 mr-2 ${
                     props.item.TRANG_THAI_PDP === "Available"
                        ? "bg-green-400"
                        : props.item.TRANG_THAI_PDP === "Booked"
                        ? "bg-blue-600"
                        : props.item.TRANG_THAI_PDP === "Received"
                        ? "bg-pink-600"
                        : props.item.TRANG_THAI_PDP === "Occupied"
                        ? "bg-yellow-400"
                        : ""
                  } rounded-full`}
               ></div>
               {props.item.TRANG_THAI_PDP}
            </span>
         </td>

         <td className="px-4  py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex gap-2">
               <Button className="w-28 mr-2">
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
               {props.item.TRANG_THAI_PDP === "Received" && (
                  <Button
                     className="w-28 mr-2 bg-green-600"
                     onClick={handleOccupied}
                  >
                     <FontAwesomeIcon
                        className="w-4 h-4 mr-1"
                        icon={faCheckCircle}
                     />
                     Occupied
                  </Button>
               )}
            </div>
         </td>
      </tr>
   );
};

export default RowTableAssignmentRoom;
