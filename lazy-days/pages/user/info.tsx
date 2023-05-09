import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
   const [combo, setCombo] = useState<any>([])
   const [comboC,setComboC] = useState('')
   const [check, setCheck] = useState<any>(false);
   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth() + 1
      }/${current.getFullYear()}`;

   var random_num = Math.floor(Math.random() * (999 - 100)) + 100;

   const authFetch = axios.create({
      baseURL: 'https://localhost:44335/api',
   });
   const notify = (message: any) => {
      if (message == "Add Successfully") {
         toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

         })
      }
      else {
         toast.warning(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

         })
      }
   }
   const handleClickCreate = async (event: any) => {
      event.preventDefault();
      const customer_info = {
         Makh: 'KH' + random_num,
         TenKh: fullnameRef.current?.value,
         Cmnd: cmndRef.current?.value,
         DiaChi: addressRef.current?.value,
         Email: emailRef.current?.value,
         Fax: faxRef.current?.value,
         Sdt: phoneRef.current?.value,
         // LoaiPhong: typeRoomRef.current?.value,
         SoDemLuuTru: numberNightRef.current?.value,
         yeuCauDb: requireRef?.current.value
      };
      const config = {
         headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
         }
      }

      try {
         const data1 = await authFetch.post('/KhachHang', customer_info, config);
         notify(data1.data);
      }
      catch (e) {
      }
   }
   const handleClick = async (event: any) => {
      event.preventDefault();
      const customer_info = {
         Makh: 'KH' + random_num,
         TenKh: fullnameRef.current?.value,
         Cmnd: cmndRef.current?.value,
         DiaChi: addressRef.current?.value,
         Email: emailRef.current?.value,
         Fax: faxRef.current?.value,
         Sdt: phoneRef.current?.value,
         // LoaiPhong: typeRoomRef.current?.value,
         SoDemLuuTru: numberNightRef.current?.value,
         yeuCauDb: requireRef?.current.value
      };

      const book = {
         MaPhieuDp: '0',
         Makh: 'KH' + random_num,
         MaNv: 'NV001',
         NgayDat: null,
         TongTien: 0,
         TienCoc: 0,
         Loaiphong: typeRoomRef.current?.value,
         NgayTraPhong: null,
         SoDemLuuTru: numberNightRef.current?.value || 0,
         MaGoidv: comboC != '' ? comboC : null
      };


      const config = {
         headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': "*"
         }
      }

      try {
         const data1 = await authFetch.post('/KhachHang', customer_info, config);
         console.log(2222, data1);
         if (data1.data[0].MA_KH) {
            console.log("Go hereeeeeeeeeee")
            const new_kh = data1.data[0].MA_KH
            book.Makh = new_kh
         }
         console.log(book)
         const data = await authFetch.post('/Booking', book, config);
         if (data1.data[0].MA_KH) {
            notify(`Existed user ${data1.data[0].MA_KH}`);
         }
         else {

            notify(`Add ${customer_info.Makh} Successfully`);

         }

      }
      catch (e) {

      }
   }
   // const handleClick = async() => {

   //    const customer_info = {
   //       Makh : 'KH' + random_num,
   //       TenKh: fullnameRef.current?.value,
   //       Cmnd: cmndRef.current?.value,
   //       DiaChi: addressRef.current?.value,
   //       Email: emailRef.current?.value,
   //       Fax: faxRef.current?.value,
   //       Sdt: phoneRef.current?.value,
   //       LoaiPhong: typeRoomRef.current?.value,
   //       SoDemLuuTru: numberNightRef.current?.value,
   //       NgayDen: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
   //    };

   //    try{
   //       console.log(88888888888)
   //       const {data} =  await authFetch.post('/KhachHang' , customer_info);


   //    }
   //    catch(e){

   //    }

   // };
   const  getCombo = async () =>{
      const data = await authFetch.get('/DichVu/Combo')
      console.log(data)
      setCombo(data.data)
   }

   useEffect(() => {
      getCombo()
   }, [])

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
                     <option value="GUARANTEE">GUARANTEE</option>
                     <option value="NOT GUARANTEE">NOT GUARANTEE</option>
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
                  {/* <label
                     htmlFor="countries"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Do users follow groups ?
                  </label> */}
                  {/* <select
                     onChange={(event) => {
                        setValueGroup(event.target.value);
                        if (event.target.value == "Yes") {
                           setHidden(1);
                        } else {
                        
                           setHidden(2);
                        
                        }
                     }}
                     id="countries"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option selected>Choose a option</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select> */}
               </div>

               {/* {check && (
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
               )} */}

            </div>

            <button
               data-modal-target="defaultModal" data-modal-toggle="defaultModal"
               type="button"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Booking
            </button>

            <button
               onClick={handleClickCreate}
               type="button"
               className="ml-[30px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Create Customers
            </button>

            <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
               <div className="relative w-full max-w-2xl max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                     <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                           Choose combo service sale (option)
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                           <span className="sr-only">Close modal</span>
                        </button>
                     </div>
                     <div className="p-6 space-y-6">
                        {
                           combo.map((c: any, index: any) => {
                              return (
                                 <div>
                                       <input type="radio" id={`Combo${index}`} name="combo" value={c.Ma_Goidv} 
                                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                          setComboC(e.target.value)
                                          console.log(e.target.value)
                                       }}
                                       />
                                       <label htmlFor={`Combo${index}`} className="p-4">{c.Ten_Goidv}</label>
                                 </div>
                              )
                           })
                        }
                     </div>
                     <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button 
                           data-modal-hide="defaultModal" 
                           type="button" 
                           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                           onClick={handleClick}
                           >
                              Booking
                           </button>
                     </div>
                  </div>
               </div>
            </div>
            <ToastContainer />

         </form>
      </DefaultLayout>
   );
};

export default Info;