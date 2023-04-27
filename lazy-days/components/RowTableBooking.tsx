import { BookingGet, RoomType } from "@/types/UserType";
import {
   faMoneyBill,
   faPen,
   faPenToSquare,
   faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-regular-svg-icons";
import { } from "@fortawesome/fontawesome-svg-core";
import { Button } from "flowbite-react";
import Link from "next/link";
import React ,{useRef} from "react";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type Props = {
   item: BookingGet;
   dropdownN: RoomType[];
   dropdownG: RoomType[];
   check: boolean
   updateCheck : Function ,
};
const url = process.env.NEXT_PUBLIC_API
const RowTableBooking = (props: Props) => {
   const phong = useRef<HTMLSelectElement>(null); 
   
    
   const handleClick = async()=>{
      let data  = {
      MaNvql: 'NV001',
      MaPhieuDp: props.item.MA_PHIEU_DP,
      MaPhong: phong.current?.value,
      NgayPhanPhong: null,
      NgayNhan: null,
      }
      const config = {
         headers: { 
             'content-type': 'application/json',
             'Access-Control-Allow-Origin': "*"
         }
     }
      const postGrantRoom = async () => {
         await axios.post(`${url}phanphong`,data,config)
           .then((response) => {
             console.log(response.data)
           }).then(json => console.log(json))
       }
       postGrantRoom();
       const newCheck= !props.check
       props.updateCheck(newCheck);
       console.log(newCheck);
       toast.success(`Grant ROOM ${phong.current?.value} to ID Booking ${props.item.MA_PHIEU_DP}`, {
         position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
       }
     
       )
   }
   return (
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
         <td className="w-4 px-4 py-3">

         </td>
         <td className="px-4 py-2">
            <span className="bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300 text-[15px] font-[600]">
               {props.item.MA_PHIEU_DP}
            </span>
         </td>

         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {props.item.MA_KH}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {moment(props.item.NGAY_DAT).format('MM/DD/YYYY')}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className=" text-blue-600 text-sm font-medium px-2 py-0.5 rounded">
               {moment(props.item.NGAY_TRA_PHONG).format('MM/DD/YYYY')}
            </span>
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.item.LOAIPHONG}
         </td>
         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.item.TIEN_COC}
         </td>
         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">

               <select
                  ref={phong}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
               >
                  <option value="" selected disabled>Select a customer</option>
                  {
                      props.item.LOAIPHONG === 'GUARANTEE' ? (
                       props.dropdownG.map(phong=>(
                       <option value={phong.MA_PHONG}>{phong.MA_PHONG}</option>
                  ))
                      ):(
                           props.dropdownN.map(phong=>(
                       <option value={phong.MA_PHONG}>{phong.MA_PHONG}</option>
                  ))
                        
                      )
                  }
                  </select>
         </td>
         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div>
               <Button className="w-40 mr-2" onClick={handleClick}>
                  <FontAwesomeIcon
                     className="w-4 h-4 mr-1"
                     icon={faPenToSquare}
                  />
                  Grant Room
               </Button>
               <ToastContainer  />
            </div>
         </td>
      </tr>
   );
};

export default RowTableBooking;
