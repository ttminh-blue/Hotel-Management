import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
type Props = {};
// const data_fake = [
//    {
//       makh: 'KH001',
//       Name: "Nguyễn Phát Thịnh",
//       PhoneNumber: "11111111",
//       TypeRoom: "Guarantee",
//       CMND: "543654365",
//       Total: 500,
//       Date: "07/03/2023",
//       Prepay: 30,
//       TRANG_THAI_DAT_PHONG: 'Đang xác nhận'
//    },
//    {
//       makh: 'KH002',
//       Name: "Nguyễn Văn A",
//       PhoneNumber: "0000000",
//       TypeRoom: "Not Guarantee",
//       CMND: "543654365",
//       Total: 500,
//       Date: "07/03/2023",
//       Prepay: 30,
//       TRANG_THAI_DAT_PHONG: 'Đang chờ'
//    },
//    {
//       makh: 'KH003',
//       Name: "Nguyễn Sanh Tài",
//       PhoneNumber: "2222222",
//       TypeRoom: "Guarantee",
//       CMND: "543654365",
//       Total: 500,
//       Date: "07/03/2023",
//       Prepay: 30,
//       TRANG_THAI_DAT_PHONG: 'Đang đặt phòng'
//    },
//    {
//       makh: 'KH004',
//       Name: "Nguyễn Phát Đăng",
//       PhoneNumber: "555555555",
//       TypeRoom: "Guarantee",
//       CMND: "543654365",
//       Total: 500,
//       Date: "07/03/2023",
//       Prepay: 30,
//       TRANG_THAI_DAT_PHONG: 'Đang đặt phòng'
//    },
// ];

const Info = (props: Props) => {
   const [data, setData] = useState<any>([]);
   const [phieudatphong, setPhieuDatPhong] = useState<any>([]);
   const authFetch = axios.create({
      baseURL: 'https://localhost:44335/api',
   });

   const notify = (message: any) => {

      toast.success("Success", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,

      })

   }

   const formatter = new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'VND',

   });
   const get_api = async () => {
      const get_data = await authFetch.get('/KhachHang');
      const new_data = get_data.data.filter((kh: any) => {
         return kh.TRANG_THAI_DAT_PHONG == 'Đang đặt phòng'
      })

      setData(new_data);

      const get_PDD = await authFetch.get('/Booking');
      // console.log(11111111 , new_data)
      // console.log(2222222, get_PDD.data)
      for (let i = 0; i < new_data.length; i++) {

         for (let j = 0; j < get_PDD.data.length; j++) {

            if (new_data[i].MA_KH == get_PDD.data[j].MA_KH) {

               new_data[i]['LOAIPHONG'] = get_PDD.data[j].LOAIPHONG
               new_data[i]['TIEN_COC'] = formatter.format(get_PDD.data[j].TIEN_COC)
               new_data[i]['TONG_TIEN'] = formatter.format(get_PDD.data[j].TONG_TIEN)
               new_data[i]['NGAY_DAT'] = new Date(get_PDD.data[j].NGAY_DAT).toLocaleString()
            }
         }
      }

      console.log(333333333, new_data)
      setData(new_data);
      setPhieuDatPhong(get_PDD.data)


   }
   const [makh, setMakh] = useState<any>(null);

   const update_state = async () => {
      const path = '/KhachHang';
      const customer_info = {
         Makh: makh,
         trangThaiDatPhong: 'Checkin'

      };
      console.log(customer_info)
      const update_data = await authFetch.put('/KhachHang', customer_info)
      notify(update_data.data)
      setData(() => {
         return data.filter((kh: any) => kh.MA_KH != makh)
      })
   }
   const handleClick = (obj: any) => {
      console.log(obj)
      setMakh(obj)

   }
   useEffect(() => {
      console.log("data: ", data)
      if (makh != null) {
         update_state();
         console.log("Updated state !!!");
      }

   }, [makh]);

   // useEffect(() => {
   //    console.log("data: ", data)


   // }, [data]);

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
                           {item.TEN_KH}
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                           <div>
                              <p className="text-sm text-gray-500 mb-2">
                                 <strong>Phone Number:</strong>{" "}
                                 {item.SDT}
                              </p>
                              <p className="text-sm text-gray-500 mb-2">
                                 <strong> Type room:</strong> {item.LOAIPHONG}
                              </p>
                              <p className="text-sm text-gray-500 mb-2">
                                 <strong> Total:</strong> {item.TONG_TIEN}
                              </p>
                           </div>
                           <div>
                              <p className="text-sm text-gray-500 mb-2">
                                 <strong>CMND:</strong> {item.CMND}
                              </p>
                              <p className="text-sm text-gray-500 mb-2">
                                 <strong>Date:</strong> {item.NGAY_DAT}
                              </p>
                              <p className="text-sm text-gray-500 mb-2">
                                 <strong>Prepay:</strong> {item.TIEN_COC}
                              </p>
                           </div>
                        </div>
                        {/* <input type="input" name="makh" value= {item.makh} ref={makhRef} /> */}

                        <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-12 btn-custom "
                           onClick={() => { handleClick(item.MA_KH) }}

                           type="submit"
                        >
                           Payment Successfully
                        </button>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <ToastContainer />
      </DefaultLayout>
   );
};

export default Info;
