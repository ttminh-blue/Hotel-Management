import { UserType } from "@/types/UserType";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";

type Props = {
   item: any;
   check: boolean;
   handleChangle: any;
};

const RowTable = (props: Props) => {
<<<<<<< HEAD
   const [info, setInfo] = useState<any>([]);
   // useEffect(() => {
   //    console.log(info);
   // })
   const tempChange = () => { }
   const handleCheckboxChange = (event: any) => {
      const assign = event.target.value;
      // if (event.target.checked) {

      //    if (info.length == 0 && !info.includes(event.target.value)) {
      //       console.log("AAAAAA", assign)
      //       setInfo(info.push(assign));
      //    }
      //    else if(info.length != 0){
      //       console.log("BBBBB", assign);
      //       setInfo((prevState: any) => {
      //          let state = prevState;
      //          console.log("prevState: ", state)
      //       });
      //    } 
      //    else {
      //       console.log("Else")
      //       // setInfo((prevState : any) => ({ info: prevState.filter((makh : any) => makh !== event.target.value) }));
      //    }
      // }

      return props.handleChangle(event, assign)
   }
=======
   const [info, setInfo] = useState<string[]>([]);

   useEffect(() => {
      console.log(info);
   });
   const handleCheckboxChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      if (event.target.checked) {
         if (!info.includes(event.target.value)) {
            console.log(event.target.value);
            setInfo([...info, "asd"]);
         } else {
            // setInfo((prevState : any) => ({ info: prevState.filter((makh : any) => makh !== event.target.value) }));
         }
      }
   };
>>>>>>> ba1a11fc330f9f27d943382f923612ddb6f444fb
   return (
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
         <td className="w-4 px-4 py-3">
            <div className="flex items-center">
               <input
                  id="checkbox-table-search-1"
                  type="checkbox"
<<<<<<< HEAD
                  value={props.item.MA_KH}
                  onChange={props.check ? tempChange : handleCheckboxChange}

=======
                  value={props.item.makh}
                  onChange={handleCheckboxChange}
>>>>>>> ba1a11fc330f9f27d943382f923612ddb6f444fb
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
               {props.item.CMND}
            </span>
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {props.item.Email}
         </td>

         <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
               {props.item.SDT.toString()}
            </div>
         </td>

<<<<<<< HEAD
         {props.check && (<td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
               <div className="inline-block w-4 h-4 mr-2 bg-green-400 rounded-full"></div>
               Active
            </div>
         </td>)}

         {props.check && (<td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
               <Button className="mr-2">
                  <FontAwesomeIcon
                     className="w-4 h-4 mr-1"
                     icon={faPenToSquare}
                  />
                  <Link href="/user/info">Update user</Link>
               </Button>
               <Button className="mr-2 bg-red-600 hover:bg-red-800">
                  <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faEye} />
                  View user
               </Button>
               {/* <Button className="ml-2">
                  <FontAwesomeIcon className="ml-1" icon={faTrash} />
                  Delete user
               </Button> */}
            </div>
         </td>
=======
         {props.check && (
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               <div className="flex items-center">
                  <div className="inline-block w-4 h-4 mr-2 bg-green-400 rounded-full"></div>
                  Active
               </div>
            </td>
         )}

         {props.check && (
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
               <div className="flex items-center">
                  <Button className="mr-2">
                     <FontAwesomeIcon
                        className="w-4 h-4 mr-1"
                        icon={faPenToSquare}
                     />
                     <Link href="/user/info">Update user</Link>
                  </Button>
                  <Button className="mr-2 bg-red-600 hover:bg-red-800">
                     <FontAwesomeIcon className="w-4 h-4 mr-1" icon={faEye} />
                     View user
                  </Button>
                  {/* <Button className="ml-2">
                  <FontAwesomeIcon className="ml-1" icon={faTrash} />
                  Delete user
               </Button> */}
               </div>
            </td>
>>>>>>> ba1a11fc330f9f27d943382f923612ddb6f444fb
         )}
      </tr>
   );
};

export default React.memo(RowTable);
