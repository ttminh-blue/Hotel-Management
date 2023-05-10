import DefaultLayout from "@/layouts/DefaultLayout";
import { Room } from "@/types/UserType";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

type Props = {
   data: Room;
};

const CleanRoom = (props: Props) => {
   const router = useRouter();

   const notify = (message: any) => {
      if (message != "Create cleanning request successfully.") {
         toast.warning(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         });
      } else {
         toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         });
      }
   };

   const handleAddRequest = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (props.data.MA_PHONG) {
         axios
            .post(process.env.NEXT_PUBLIC_API + "Bellman/cleanning_request", {
               maPcdvs: "",
               maNvbellman: "NV003",
               maPhong: props.data.MA_PHONG,
            })
            .then(() => {
               notify("Create cleanning request successfully.");
               router.push("/clean_requests");
            })
            .catch((error) => {
               notify(error);
            });
      }
   };

   useEffect(() => {
      if (!props.data) {
         router.push("/");
      }
   }, []);

   return (
      <DefaultLayout>
         <form
            className="container mx-auto p-4 pt-6"
            onSubmit={handleAddRequest}
         >
            <div className="grid md:grid-cols-2 md:gap-6"></div>

            <div className="relative z-0 w-full mb-6 group">
               <select
                  id="countries"
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
                  {props.data && (
                     <option selected>{props.data.TEN_PHONG}</option>
                  )}
               </select>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-2 group">
                  <label className="mr-4">Room Id:</label>
                  <span className="font-bold">{props.data.MA_PHONG}</span>
               </div>
               <div className="relative z-0 w-full mb-2 group">
                  <label className="mr-4">Capacity:</label>
                  <span className="font-bold">
                     {props.data.SO_LUONG_DAP_UNG}
                  </span>
               </div>
               <div className="relative z-0 w-full mb-2 group">
                  <label className="mr-4">Room type:</label>
                  <span className="font-bold">{props.data.LOAI}</span>
               </div>
               <div className="relative z-0 w-full mb-2 group">
                  <label className="mr-4">State:</label>
                  <span className="font-bold">{props.data.TRANG_THAI}</span>
               </div>
               <div className="relative z-0 w-full mb-2 group">
                  <label className="mr-4">Location:</label>
                  <span className="font-bold">{props.data.DIADIEM}</span>
               </div>
            </div>
            <div className="flex gap-4 justify-center items-center ">
               <button
                  type="submit"
                  className="text-white mt-8 mb-2 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Add request
               </button>

               <button
                  type="button"
                  className="text-white mt-8 mb-2 w-full bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  <Link href={"/bellman/assignment_rooms"}>Cancel</Link>
               </button>
            </div>
         </form>
      </DefaultLayout>
   );
};

export default CleanRoom;

export async function getServerSideProps(context: any) {
   const room = (
      await axios.get(process.env.NEXT_PUBLIC_API + "Phong/" + context.query.id)
   ).data;
   return {
      props: {
         data: room,
      },
   };
}
