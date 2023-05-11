import { BaggageFormType } from "@/types/UserType";

import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import React from "react";
type Props = {
   item: BaggageFormType;
};

const RowTableBaggageForms = (props: Props) => {
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
               {props.item.MA_PHIEUDANGKYVANCHUYEN}
            </span>
         </td>

         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {props.item.TEN_NV}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {props.item.TEN_KH}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {props.item.SDT}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {props.item.TEN_PHONG}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {props.item.HANH_LY}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {props.item.SO_LUONG}
            </span>
         </td>
         <td className="px-4 py-2">
            <span className="  text-sm font-medium px-2 py-0.5 rounded">
               {new Date(props.item.NGAY_TAO).toLocaleString("en")}
            </span>
         </td>
      </tr>
   );
};

export default RowTableBaggageForms;
