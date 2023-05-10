import { RoomType } from "@/types/UserType";
import {
   faMoneyBill,
   faPen,
   faPenToSquare,
   faTrash,
   faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { Button } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import Ellipsis from "../components/Ellipsis";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/components/modal";

type Props = {
   item: RoomType;
   updateCheck: Function;
};

const RowTableRoom = (props: Props) => {
   const [re,setRe]= useState<boolean>(true)
   const updateRe = ()=>{
      setRe(()=>!re);
   }
   const url = process.env.NEXT_PUBLIC_API;
   const handCheckIn = () => {
      axios.post(`${url}Phong/update?phong=${props.item.MA_PHONG}`);
      props.updateCheck();
      updateRe()
      toast.success(`Booking ROOM ${props.item.MA_PHONG} successfully`, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      });
   };


   return (
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
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
            <Ellipsis item={props.item.MA_PHONG} re={re}/> /{" "}
            {props.item.SO_LUONG_DAP_UNG}
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
               <div
                  className={`inline-block w-4 h-4 mr-2 ${
                     props.item.TRANG_THAI === "Available"
                        ? "bg-green-400"
                        : props.item.TRANG_THAI === "Booked"
                        ? "bg-blue-600"
                        : props.item.TRANG_THAI === "Received"
                        ? "bg-pink-600"
                        : props.item.TRANG_THAI === "Occupied"
                        ? "bg-orange-600"
                        : "bg-yellow-00"
                  } rounded-full`}
               ></div>
               {props.item.TRANG_THAI}
            </div>
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex justify-center">
               {props.item.TRANG_THAI === "Booked" && (
                  <Button
                     className="w-40 mr-2 bg-blue-600  hover:bg-blue-800 "
                     onClick={handCheckIn}
                  >
                     <FontAwesomeIcon
                        className="w-4 h-4 mr-1"
                        icon={faMoneyBill}
                     />
                     Check-In
                  </Button>
               )}
               {props.item.TRANG_THAI === "Occupied" && (
                  <Modal phong={props.item.MA_PHONG} updateRe={updateRe}/>
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
