import TablePackage from "@/components/TablePackage";
import DefaultLayout from "@/layouts/DefaultLayout";
import {
   BaggageRequestType,
   BellmanAssignmentRoom,
   PackageFormType,
   PackageType,
} from "@/types/UserType";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

type Props = {
   data: BellmanAssignmentRoom;
};

const DeliveryForm = (props: Props) => {
   const router = useRouter();

   const [packages, setPackages] = useState<PackageFormType>({
      packages: [],
   });

   const handleCustomerPackages = (data: PackageFormType) => {
      setPackages(() => data);
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const packageStr = packages.packages
         .map((value: PackageType) => {
            return value.packageName + ":" + value.packageQuantity;
         })
         .join(";");

      const quantity = packages.packages.reduce((prev, curr) => {
         return prev + Number(curr.packageQuantity);
      }, 0);

      const formData: BaggageRequestType = {
         HanhLy: packageStr,
         MaNv: "NV003",
         MaPhieuDp: props.data.MA_PHIEU_DP,
         MaPhong: props.data.MA_PHONG,
         SoLuong: quantity,
         MaPhieudangkyvanchuyen: "",
      };

      axios
         .post(
            process.env.NEXT_PUBLIC_API + "Bellman/baggage_request",
            formData
         )
         .then(() => {
            toast("Add baggage form successfully.", {
               theme: "dark",
               type: "success",
            });
            router.push("/bellman/baggage_forms");
         })
         .catch((ex) => {
            toast(ex, {
               theme: "dark",
               type: "error",
            });
         });
   };

   return (
      <DefaultLayout>
         <form className="container mx-auto p-4 pt-6" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
               <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                  Customer info
               </label>
               <select
                  id="countries"
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
                  <option selected>{props.data.TEN_KH}</option>
               </select>
            </div>
            <div className="grid md:grid-cols-2 mb-8 md:gap-6">
               <div className="relative z-0 w-full group">
                  <label className="mr-4">Phone:</label>
                  <span className="font-bold">{props.data.SDT}</span>
               </div>
               <div className="relative z-0 w-full group">
                  <label className="mr-4">Number of nights stay:</label>
                  <span className="font-bold">
                     {props.data.SO_DEM_LUU_TRU} nights
                  </span>
               </div>
               <div className="relative z-0 w-full group">
                  <label className="mr-4">Customer state:</label>
                  <span className="font-bold">
                     {" "}
                     {props.data.TRANG_THAI_DAT_PHONG}
                  </span>
               </div>

               <div className="relative z-0 w-full group">
                  <label className="mr-4">Special request:</label>
                  <span className="font-bold"> {props.data.YEU_CAU_DB}</span>
               </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
               <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
               >
                  Room
               </label>
               <select
                  id="countries"
                  disabled
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               >
                  <option selected>{props.data.TEN_PHONG}</option>
               </select>
               <div className="grid md:grid-cols-2 mb-8 mt-6 md:gap-6">
                  <div className="relative z-0 w-full group">
                     <label className="mr-4">Location:</label>
                     <span className="font-bold">{props.data.DIADIEM}</span>
                  </div>
                  <div className="relative z-0 w-full group">
                     <label className="mr-4">Capacity:</label>
                     <span className="font-bold">
                        {props.data.SO_LUONG_DAP_UNG}
                     </span>
                  </div>
                  <div className="relative z-0 w-full group">
                     <label className="mr-4">Room type:</label>
                     <span className="font-bold"> {props.data.LOAI}</span>
                  </div>

                  <div className="relative z-0 w-full group">
                     <label className="mr-4">Room state:</label>
                     <span className="font-bold"> {props.data.TRANG_THAI}</span>
                  </div>
               </div>
            </div>

            <TablePackage updatePackages={handleCustomerPackages} />

            <button
               type="submit"
               className="text-white my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Add
            </button>
            <button
               type="submit"
               className="text-white my-10 ml-4 bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               <Link href={"/bellman/assignment_rooms"}>Cancel</Link>
            </button>
         </form>
      </DefaultLayout>
   );
};

export default DeliveryForm;

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