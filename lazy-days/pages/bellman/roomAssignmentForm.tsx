import DefaultLayout from "@/layouts/DefaultLayout";
import { BellmanAssignmentRoom } from "@/types/UserType";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {
   data: BellmanAssignmentRoom;
};

const ArrangeBill = (props: Props) => {
   return (
      <DefaultLayout>
         <div className="bg-gray-100">
            <div className="container mx-auto p-5 max-w-[70%]">
               <h1 className="text-2xl font-bold mb-20 mt-10 ">
                  <strong className="text-[#3F83F8] text-[40px] ">
                     Room Assignment Form
                  </strong>{" "}
                  Information
               </h1>
               <img
                  src="https://media.discordapp.net/attachments/1073607144873656360/1088855765747499189/hoteltips2.png?width=1161&height=671"
                  alt="wallpaper"
                  className="h-[150px] object-cover object-center rounded-t-xl w-full"
               />

               <div className="bg-white rounded-lg shadow-md p-4 mb-10">
                  <p className="text-lg font-[600] text-[25px] mb-10 text-[#3F83F8] ">
                     {props.data.TEN_PHONG}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                     <div>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Location:</strong> {props.data.DIADIEM}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong> Capacity: </strong>{" "}
                           {props.data.SO_LUONG_DAP_UNG}
                        </p>
                     </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Status:</strong> {props.data.TRANG_THAI}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Type room:</strong> {props.data.LOAI}
                        </p>
                     </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Customer name:</strong> {props.data.TEN_KH}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Phone:</strong> {props.data.SDT}
                        </p>
                     </div>
                     <div>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Customer type:</strong>{" "}
                           {props.data.TRANG_THAI_DAT_PHONG}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                           <strong>Special requests:</strong>{" "}
                           {props.data.YEU_CAU_DB}
                        </p>
                     </div>
                  </div>
                  {props.data.TRANG_THAI === "Received" && (
                     <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 btn-custom ">
                        <Link
                           href={{
                              pathname: "/bellman/clean_request",
                              query: {
                                 id: props.data.MA_PHONG,
                              },
                           }}
                        >
                           Create a cleanning request
                        </Link>
                     </button>
                  )}
                  {props.data.TRANG_THAI === "Received" && (
                     <button className="container bg-slate-500 text-white px-4 py-2 rounded-lg mt-4 btn-custom ">
                        <Link
                           href={{
                              pathname: "/bellman/baggage_request",
                              query: {
                                 id: props.data.MA_PHIEU_DP,
                                 roomId: props.data.MA_PHONG,
                              },
                           }}
                        >
                           Create a baggage form
                        </Link>
                     </button>
                  )}
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default ArrangeBill;

export async function getServerSideProps(context: any) {
   const assigmentRoomData = await axios.get(
      process.env.NEXT_PUBLIC_API +
         "Bellman/assignment_room/?id=" +
         context.query.id +
         "&" +
         "roomId=" +
         context.query.roomId
   );
   return {
      props: {
         data: assigmentRoomData.data,
      },
   };
}
