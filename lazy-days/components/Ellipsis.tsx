import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { GuestType, Members } from "@/types/UserType";
type Props = {
   item: string;
};
const Ellipsis = (props: Props) => {
   const [isOpen, setIsOpen] = useState(false);
   const [options, setOption] = useState<GuestType[]>([]);
   const url = process.env.NEXT_PUBLIC_API;
   const getData = async () => {
      await axios
         .get(`${url}Phong/customers?phong=${props.item}`)
         .then((response) => {
            setOption(() => response.data);
            console.log(response.data);
         })
         .then((json) => console.log(json));
   };
   function toggleDropdown() {
      setIsOpen(!isOpen);
   }

   function handleMouseOver() {
      if (options.length != 0) {
         setIsOpen(true);
      }
   }
   function handleMouseOut() {
      setIsOpen(false);
   }
   useEffect(() => {
      getData();
   }, []);
   return (
      <div className="relative inline-block text-left">
         <div>
            <span className="rounded-md shadow-sm">
               <button
                  type="button"
                  className="inline-flex justify-center w-full  py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
               >
                  <div className="px-[3px]">{options.length} Members</div>
                  <FontAwesomeIcon
                     className="w-10 h-4 flex justify-end"
                     icon={faEllipsisVertical}
                  />
               </button>
            </span>
         </div>

         <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={`${
               isOpen ? "block" : "hidden"
            } absolute z-10 bg-[#D1D5DB] shadow-lg w-[400px]`}
         >
            <ul
               role="menu"
               aria-labelledby="options-menu"
               className="max-h-60 w-[400px] rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
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
                  </tr>

                  {options.map((option, key) => (
                     <tr key={key} className="border-[1px] border-[black]">
                        <th className=" py-2 border-[1px] border-[black]">
                           {option.MA_KH}
                        </th>
                        <th className="px-4 py-2 border-[1px] border-[black]">
                           {option.TEN_KH}
                        </th>
                        <th className="px-4 py-2 border-[1px] border-[black] ">
                           {option.CMND}
                        </th>
                     </tr>
                  ))}
               </table>
            </ul>
         </div>
      </div>
   );
};
export default Ellipsis;
