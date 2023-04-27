import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import RowTablePerson from "@/components/RowTablePerson";
import { UserType } from "@/types/UserType";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
type Props = {};

const Info = (props: Props) => {
   const [arrInfo, setArrInfo] = useState<any>([]);

   const groupNameRef = useRef<any>(null);
   const addressRef = useRef<any>(null);
   
   const [data, setData] = useState<any>([]);
   const current = new Date();
  
   const [maNguoiDD, setMaNguoiDD] = useState<any>(null);
   const authFetch = axios.create({
      baseURL: 'https://localhost:44335/api',
   });
   const get_api = async () => {
      const get_data = await authFetch.get('/KhachHang');

      setData(get_data.data);
   }
   useEffect(() => {
      get_api();
   }, []);
   useEffect(() => {
     console.log(arrInfo)
   }, [arrInfo]);
   var random_num = Math.floor(Math.random() * (999 - 100)) + 100;

   const handleChangle = (event: any, obj: any) => {
      if (!arrInfo.includes(obj)) {
   
         setArrInfo((prevState : any) => {
            return [...prevState, obj]
         });
      }
      else{
         setArrInfo(() => {
            return arrInfo.filter((makh : any) => makh != obj)
         })
      }
        
     
   }

   const check_makh = (obj: any) => {
      console.log("ABCCCCCCCCCCCCCC", obj)
      setMaNguoiDD(obj)
   }
   const formatYmd = (date : any) => date.toISOString().slice(0, 10);
   const notify = (message : any) => {
      if(message == "Existed User"){
         toast.warning(message, {
            position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               
          })
      }
      else{
         toast.success(message, {
         position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            
       })
      }
    }
   const handleClick = async (event: any) => {
      event.preventDefault();
      const tour_info = {
        maCty: 'CT' + random_num,
        tenCty: groupNameRef.current?.value,
        diaChi: addressRef.current?.value,
       

      };

      const config = {
         headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
         }
      }

      try {
         console.log(tour_info, 22222)

         const temp = await authFetch.post('/Congtydulich', tour_info, config);

         arrInfo.forEach(async(makh : any) => {
            let info_chitietdoan = {
               maCty: 'CT' + random_num,
               maKh : makh,
               nguoiDaiDien: maNguoiDD,

            }
            console.log("Details: ", info_chitietdoan)
            let post_chitietDoan = await authFetch.post('/Chitietdulich', info_chitietdoan, config);
         });
         notify(temp.data)
        





      }
      catch (e) {

      }
   }

   return (
      <DefaultLayout>
         <form className="container mx-auto p-4 pt-6">
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
                  Travel Company Name
               </label>
            </div>
            {/* <div className="relative z-0 w-full mb-6 group">
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
            </div> */}
            {/* <div className="relative z-0 w-full mb-6 group">
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
            </div> */}
            <div className="relative z-0 w-full mb-6 group">
               <input
                  ref={addressRef}
                  type="text"
                  name="Address"
                  id="Address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
               />
               <label
                  htmlFor="number_night"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Address
               </label>
            </div>
            










            <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
               <div className=" mx-auto max-w-screen-2xl ">
                  <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                     <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center flex-1 space-x-4">
                           <h5>
                              <span className="text-red-500">Select customer in tour </span>

                           </h5>
                        </div>
                        <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                           <button
                              type="button"
                              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                           >
                              <svg
                                 className="h-3.5 w-3.5 mr-2"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true"
                              >
                                 <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                 />
                              </svg>
                              Add new product
                           </button>
                        </div>
                     </div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                 <th scope="col" className="p-4">

                                 </th>
                                 <th scope="col" className="px-4 py-3">
                                    Name
                                 </th>
                                 <th scope="col" className="px-4 py-3">
                                    CMND
                                 </th>
                                 <th scope="col" className="px-4 py-3">
                                    Email
                                 </th>

                                 <th scope="col" className="px-4 py-3">
                                    Phone
                                 </th>
                                 <th scope="col" className="px-4 py-3">
                                    Representative
                                 </th>

                                 <th scope="col" className="px-4 py-3"></th>
                              </tr>
                           </thead>
                           <tbody>
                           
                              {data.map((item: any, index: any) => {
                                 return <RowTablePerson item={item} key={index} check={false} handleChangle={handleChangle} check_makh = {check_makh} />;
                              })}
                           </tbody>
                        </table>
                     </div>
                     <nav
                        className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                        aria-label="Table navigation"
                     >
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">

                        </span>
                        <ul className="inline-flex items-stretch -space-x-px">
                           <li>
                              <a
                                 href="#"
                                 className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                 <span className="sr-only">Previous</span>
                                 <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                       clip-rule="evenodd"
                                    />
                                 </svg>
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                 1
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                 2
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 aria-current="page"
                                 className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                              >
                                 3
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                 ...
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                 100
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                              >
                                 <span className="sr-only">Next</span>
                                 <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       fill-rule="evenodd"
                                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                       clip-rule="evenodd"
                                    />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </section>
            <button
               onClick={handleClick}
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Submit
            </button>
            <ToastContainer  />
         </form>
      </DefaultLayout>
   );
};

export default Info;