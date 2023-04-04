import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect } from "react";

type Props = {};

const Info = (props: Props) => {
   const fullnameRef = useRef<HTMLInputElement>(null);
   const addressRef = useRef<HTMLInputElement>(null);
   const emailRef = useRef<HTMLInputElement>(null);
   const faxRef = useRef<HTMLInputElement>(null);
   const phoneRef = useRef<HTMLInputElement>(null);
   const cmndRef = useRef<HTMLInputElement>(null);
   const typeRoomRef = useRef<any>(null);
   const numberNightRef = useRef<any>(null);
   const requireRef = useRef<any>(null);
   const groupNameRef = useRef<any>(null);
   const representativeRef = useRef<any>(null);
   const numberPeopleRef = useRef<any>(null);
   const [hidden, setHidden] = useState<any>();
   const [valueGroup, setValueGroup] = useState("");
   const [check, setCheck] = useState<any>(true);
   const [count, setCount] = useState<any>(1);
   const current = new Date();
   const date = `${current.getDate()}/${
      current.getMonth() + 1
   }/${current.getFullYear()}`;
   useEffect(() => {
      console.log(check, hidden);
      if (hidden) {
         setCheck(true);
      } else {
         setCheck(false);
      }
   }, [hidden]);
   const handleClick = async () => {
      const object_data = {
         Fullname: fullnameRef.current?.value,
         Cmnd: cmndRef.current?.value,
         Address: addressRef.current?.value,
         Email: emailRef.current?.value,
         FaxNumber: faxRef.current?.value,
         Phone: phoneRef.current?.value,
         TypeRoom: typeRoomRef.current?.value,
         Night: numberNightRef.current?.value,
         Require: requireRef.current?.value,
         Group: groupNameRef.current?.value,
         Represent: representativeRef.current?.value,
         Date: date,
      };
   };
   return (
      <DefaultLayout>
         <form className="container mx-auto p-4 pt-6">
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={fullnameRef}
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Fullname
               </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={cmndRef}
                  type="text"
                  name="cmnd"
                  id="cmnd"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  CMND/CCCD
               </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={addressRef}
                  type="text"
                  name="address"
                  id="address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="address"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Address
               </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Email
               </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     ref={faxRef}
                     type="text"
                     name="fax"
                     id="fax"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     required
                  />
                  <label
                     htmlFor="fax"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Fax Number
                  </label>
               </div>
               <div className="relative z-0 w-full mb-6 group">
                  <input
                     ref={phoneRef}
                     type="tel"
                     name="floating_phone"
                     id="floating_phone"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     required
                  />
                  <label
                     htmlFor="floating_phone"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                     Phone number (123-456-7890)
                  </label>
               </div>
            </div>
            <div className="">
               <div className="relative z-0 w-full mb-6 group">
                  <label
                     htmlFor="countries"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Select type of room
                  </label>
                  <select
                     ref={typeRoomRef}
                     id="countries"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option selected>Choose type of room</option>
                     <option value="Guarantee">Guarantee</option>
                     <option value="Not_Guarantee">Not Guarantee</option>
                  </select>
               </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={numberNightRef}
                  type="text"
                  name="number_night"
                  id="number_night"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="number_night"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Number of nights staying
               </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={requireRef}
                  type="text"
                  name="require"
                  id="require"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
               />
               <label
                  htmlFor="require"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Speacial Requirements (Optional)
               </label>
            </div>
            <div className="">
               <div className="relative z-0 w-full mb-6 group">
                  <label
                     htmlFor="countries"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Do users follow groups ?
                  </label>
                  <select
                     onChange={(event) => {
                        setValueGroup(event.target.value);
                        if (event.target.value == "Yes") {
                           if (count == 1) {
                              setCheck(!check);
                           } else {
                              setCheck(false);
                           }
                        } else {
                           if (count == 1) {
                              setCheck(!check);
                           } else {
                              setHidden(true);
                           }
                        }
                     }}
                     id="countries"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option selected>Choose a option</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </div>

               {check && (
                  <>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           ref={groupNameRef}
                           type="text"
                           name="group_name"
                           id="group_name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label
                           htmlFor="group_name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Group Name
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           ref={numberPeopleRef}
                           type="text"
                           name="number-people"
                           id="number-people"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label
                           htmlFor="number-people"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Number of people in the group
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           ref={representativeRef}
                           type="text"
                           name="representative"
                           id="representative"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                        />
                        <label
                           htmlFor="representative"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Representative
                        </label>
                     </div>
                  </>
               )}
               <div className="">
                  <div className="relative z-0 w-full mb-6 group">
                     <label
                        htmlFor="payment"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >
                        Payment Methods
                     </label>
                     <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     >
                        <option selected>Choose a option</option>
                        <option value="Yes">Cash</option>
                        <option value="No">Credit</option>
                        <option value="No">Debit Credit</option>
                     </select>
                  </div>
               </div>
            </div>

            <button
               onClick={handleClick}
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Submit
            </button>
         </form>
      </DefaultLayout>
   );
};

export default Info;
