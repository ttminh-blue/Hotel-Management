import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

type Props = {};

const Info = (props: Props) => {
   const [fullname, setFullname] = useState<any>();
   const [makh, setMakh] = useState<any>();
   const [address, setAddress] = useState<any>();
   const [email, setEmail] = useState<any>();
   const [fax, setFax] = useState<any>();
   const [phone, setPhone] = useState<any>();
   const [cmnd, setCmnd] = useState<any>();
   const [night, setNight] = useState<any>(null);
   const [require, setRequire] = useState<any>(null);
   const groupNameRef = useState<any>(null);
   const representativeRef = useState<any>(null);
   const numberPeopleRef = useRef<any>(null);
   const [hidden, setHidden] = useState<any>();
   const [valueGroup, setValueGroup] = useState("");

   const [count, setCount] = useState<any>(1);
   const current = new Date();
   const router = useRouter();
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
   const authFetch = axios.create({
      baseURL: "https://localhost:44335/api",
   });
   const [check, setCheck] = useState<any>(false);
   const [cus_info, setCus] = useState<any>({});
   const get_api = async () => {
      const id = router.query.id;
      const data = await authFetch.get("KhachHang/Personal/?id=" + id);

      console.log(data.data[0]);
      setFullname(data.data[0].TEN_KH);
      setAddress(data.data[0].DIA_CHI);
      setMakh(data.data[0].MA_KH);

      setEmail(data.data[0].Email);
      setFax(data.data[0].Fax);
      setPhone(data.data[0].SDT);
      setCmnd(data.data[0].CMND);
      setNight(data.data[0].SO_DEM_LUU_TRU);
      setRequire(data.data[0].YEU_CAU_DB);
   };

   const [data, setData] = useState<any>([]);
   const notify = (message: any) => {
      if (message.startsWith("UPDATED")) {
         toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         });
      } else {
         toast.warning(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
         });
      }
   };
   useEffect(() => {
      get_api();
   }, []);
   const handleClick = async (event: any) => {
      event.preventDefault();
      const object_data = {
         mA_KH: makh,
         teN_KH: fullname,
         cmnd: cmnd,
         diA_CHI: address,
         email: email,
         fax: fax,
         sdt: phone,
         sO_DEM_LUU_TRU: night,
         yeU_CAU_DB: require,
      };

      console.log(object_data);
      const update_data = await authFetch.put("/KhachHang/PutAll", object_data);
      console.log(update_data.data);
      notify(update_data.data);
   };
   return (
      <DefaultLayout>
         <form className="container mx-auto p-4 pt-6">
            <div className="relative z-0 w-full mb-6 group">
               <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
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
                  type="text"
                  name="cmnd"
                  id="cmnd"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={cmnd}
                  onChange={(e) => setCmnd(e.target.value)}
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
                  type="text"
                  name="address"
                  id="address"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                     type="text"
                     name="fax"
                     id="fax"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     value={fax}
                     onChange={(e) => setFax(e.target.value)}
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
                     type="tel"
                     name="floating_phone"
                     id="floating_phone"
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     placeholder=" "
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
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

            <div className="relative z-0 w-full mb-6 group">
               <input
                  type="text"
                  name="number_night"
                  id="number_night"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={night}
                  onChange={(e) => setNight(e.target.value)}
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
                  type="text"
                  name="require"
                  id="require"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={(e) => setRequire(e.target.value)}
                  value={require ? require : "None"}
               />
               <label
                  htmlFor="require"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
               >
                  Speacial Requirements (Optional)
               </label>
            </div>

            <button
               onClick={handleClick}
               type="submit"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
               Update
            </button>
         </form>
      </DefaultLayout>
   );
};

export default Info;
