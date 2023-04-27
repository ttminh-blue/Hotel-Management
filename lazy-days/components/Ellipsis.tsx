import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faEllipsisVertical,
 } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { Members } from '@/types/UserType';
type Props = {
item:string;
}
const Ellipsis = (props:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOption]= useState<Members[]>([]);
  const url = process.env.NEXT_PUBLIC_API;
  const getData = async () => {
    await axios.get(`${url}Phong/customers?phong=${props.item}`)
      .then((response) => { 
        setOption(()=>response.data)
        console.log(response.data)
      }).then(json => console.log(json))
  }    
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleMouseOver() {
    setIsOpen(true);
  }
function handleMouseOut(){
    setIsOpen(false);
}
useEffect(()=>{
    getData();
},[])
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
          <div className='px-[3px]'>{options.length} Members</div>
            <FontAwesomeIcon
                        className="w-10 h-4 flex justify-end"
                        icon={faEllipsisVertical}
                     />
          </button>
        </span>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute z-10 mt-1 w-full bg-white shadow-lg`}
      >
        <ul
          role="menu"
          aria-labelledby="options-menu"
          className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {options.map((option) => (
            <li
              key={option.MA_KH}
              className="text-gray-900 cursor-pointer hover:bg-gray-100 px-4 py-2 w-full"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {option.MA_KH}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Ellipsis;