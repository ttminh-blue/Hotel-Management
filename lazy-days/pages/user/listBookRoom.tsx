import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
type Props = {};
const data_fake = [
   {
      makh: 'KH001',
      Name: "Nguyễn Phát Thịnh",
      PhoneNumber: "11111111",
      TypeRoom: "Guarantee",
      CMND: "543654365",
      Total: 500,
      Date: "07/03/2023",
      Prepay: 30,
      TRANG_THAI_DAT_PHONG: 'Đang xác nhận'
   },
   {
      makh: 'KH002',
      Name: "Nguyễn Văn A",
      PhoneNumber: "0000000",
      TypeRoom: "Not Guarantee",
      CMND: "543654365",
      Total: 500,
      Date: "07/03/2023",
      Prepay: 30,
      TRANG_THAI_DAT_PHONG: 'Đang chờ'
   },
   {
      makh: 'KH003',
      Name: "Nguyễn Sanh Tài",
      PhoneNumber: "2222222",
      TypeRoom: "Guarantee",
      CMND: "543654365",
      Total: 500,
      Date: "07/03/2023",
      Prepay: 30,
      TRANG_THAI_DAT_PHONG: 'Đang đặt phòng'
   },
   {
      makh: 'KH004',
      Name: "Nguyễn Phát Đăng",
      PhoneNumber: "555555555",
      TypeRoom: "Guarantee",
      CMND: "543654365",
      Total: 500,
      Date: "07/03/2023",
      Prepay: 30,
      TRANG_THAI_DAT_PHONG: 'Đang đặt phòng'
   },
];

const Info = (props: Props) => {
   const [data, setData] = useState<any>([]);
   const authFetch = axios.create({
      baseURL: 'https://localhost:44335/api',
   });
   const get_api = async () => {
      // const get_data = await authFetch.get('/KhachHang');
      const new_data = data_fake.filter((kh: any) => {
         return kh.TRANG_THAI_DAT_PHONG == 'Đang đặt phòng'
      })
      console.log(new_data)
      setData(new_data);


   }
   const [makh, setMakh] = useState<any>(null);
  
   const update_state = async () => {
      const path = '/KhachHang';
      const customer_info = {
         Makh : makh
        
      };
      // await authFetch.put(path, customer_info)
   }
   useEffect(() => {
      if(makh != null){
         update_state();
         console.log("Updated state !!!");
      }
     
   }, [makh]);

   useEffect(() => {
      get_api();
   }, []);
   return (
      <DefaultLayout>
         
            <div className="bg-gray-100">
               <div className="container mx-auto p-4">
                  <h1 className="text-2xl font-bold mb-10">Waiting List</h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                     {data.map((item: any, index: any) => (
                        <div
                           className="bg-white rounded-lg shadow-md p-4"
                           key={index}
                        >
                           <p className="text-lg font-bold mb-2 mt-5">
                              {item.Name}
                           </p>
                           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                              <div>
                                 <p className="text-sm text-gray-500 mb-2">
                                    <strong>Phone Number:</strong>{" "}
                                    {item.PhoneNumber}
                                 </p>
                                 <p className="text-sm text-gray-500 mb-2">
                                    <strong> Type room:</strong> {item.TypeRoom}
                                 </p>
                                 <p className="text-sm text-gray-500 mb-2">
                                    <strong> Total:</strong> {item.Total}$
                                 </p>
                              </div>
                              <div>
                                 <p className="text-sm text-gray-500 mb-2">
                                    <strong>CMND:</strong> {item.CMND}
                                 </p>
                                 <p className="text-sm text-gray-500 mb-2">
                                    <strong>Date:</strong> {item.Date}
                                 </p>
                                 <p className="text-sm text-gray-500 mb-2">
                                    <strong>Prepay:</strong> {item.Prepay}$
                                 </p>
                              </div>
                           </div>
                           {/* <input type="input" name="makh" value= {item.makh} ref={makhRef} /> */}

                           <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-12 btn-custom "
                              onClick={() => {
                                 setMakh(item.makh)
                              }}
                             
                              type="submit"
                           >
                              Payment Successfully
                           </button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
        
      </DefaultLayout>
   );
};

export default Info;
