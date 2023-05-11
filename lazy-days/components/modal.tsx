import { GuestType } from "@/types/UserType";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {
   phong: string;
   updateRe: Function;
};
export default function Modal(props: Props) {
   const [showModal, setShowModal] = useState(false);
   const [dataGuest, setDataGuest] = useState<GuestType[]>([]);
   const [nameGuest, setNameGuest] = useState<string>("");
   const [reset,setReset] = useState(false);
   const getKH = async() =>{
      await axios
      .get(`${process.env.NEXT_PUBLIC_API}KhachHang/add`)
      .then((response) => {
         setDataGuest(() => response.data);
      });
      console.log(dataGuest)
   }
   useEffect(() => {
      getKH();
   }, [reset]);
   const handleClick = (name: string) => {
      setNameGuest(name);
   };
   const handleClickAdd = () => {
     
      axios.post(
         `${process.env.NEXT_PUBLIC_API}Phong/add?phong=${props.phong}&makh=${nameGuest}`
      );
      props.updateRe();
      toast.success(`Add ${nameGuest} to ${props.phong} successfully`, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      });
      setReset(!reset);
   };
   return (
      <>
         <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={()=> setShowModal(true)}
         >
            Add members
         </button>
         {showModal ? (
            <>
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold">
                              ADD MEMBERS TO {props.phong}
                           </h3>
                           <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                           >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                X
                              </span>
                           </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                           <table className="border-[1px] border-[black] w-max ml-[3px]">
                              <tr className="border-[1px] border-[black]">
                                 <th className="px-5 py-2 border-[1px] border-[black] w-[30px]">
                                    ID
                                 </th>
                                 <th className="px-5 py-2 border-[1px] border-[black] w-[200px]">
                                    Name
                                 </th>
                                 <th className="px-5 py-2 border-[1px] border-[black] w-[135px]">
                                    CMND
                                 </th>
                                 <th className="px-5 py-2 border-[1px] border-[black] w-[135px]">
                                    SDT
                                 </th>
                              </tr>
                              {dataGuest.map((data, idx) => (
                                 <tr
                                    key={idx}
                                    className="border-[1px] border-[black]"
                                 >
                                    <button
                                       className=" px-5 py-2 border-[1px]"
                                       onClick={() => handleClick(data.MA_KH)}
                                    >
                                       <th className=" border-[black] w-[30px]">
                                          {data.MA_KH}
                                       </th>
                                    </button>
                                    <th className="px-5 py-2 border-[1px] border-[black] w-[200px]">
                                       {data.TEN_KH}
                                    </th>
                                    <th className="px-5 py-2 border-[1px] border-[black] w-[135px]">
                                       {data.CMND}
                                    </th>
                                    <th className="px-5 py-2 border-[1px] border-[black] w-[135px]">
                                       {data.SDT}
                                    </th>
                                 </tr>
                              ))}
                           </table>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                           >
                              Close
                           </button>
                           <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleClickAdd}
                           >
                              ADD {nameGuest}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null}
      </>
   );
}
