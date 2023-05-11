import DefaultLayout from "@/layouts/DefaultLayout";
import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

type Props = {};

const Info = (props: Props) => {
   const [data, setData] = useState<any>([]);
   const [phieudatphong, setPhieuDatPhong] = useState<any>([]);
   const router = useRouter();
   const authFetch = axios.create({
      baseURL: "https://localhost:44335/api",
   });
   const config = {
      headers: {
         "content-type": "application/json",
         "Access-Control-Allow-Origin": "*",
      },
   };
   const notify = (message: any) => {
      toast.success("Success", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      });
   };
   var random_num = Math.floor(Math.random() * (999 - 100)) + 100;

   const formatter = new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
   });
   const get_api = async () => {
      const get_data = await authFetch.get("/KhachHang");
      const new_data = get_data.data.filter((kh: any) => {
         return kh.TRANG_THAI_DAT_PHONG == "Đang đặt phòng";
      });

      setData(new_data);

      const get_PDD = await authFetch.get("/Booking");
      // console.log(11111111 , new_data)
      //console.log(2222222, get_PDD.data)
      for (let i = 0; i < new_data.length; i++) {
         for (let j = 0; j < get_PDD.data.length; j++) {
            if (new_data[i].MA_KH == get_PDD.data[j].MA_KH) {
               new_data[i]["LOAIPHONG"] = get_PDD.data[j].LOAIPHONG;
               new_data[i]["TIEN_COC"] = formatter.format(
                  get_PDD.data[j].TIEN_COC
               );
               new_data[i]["TONG_TIEN"] = formatter.format(
                  get_PDD.data[j].TONG_TIEN
               );
               new_data[i]["NGAY_DAT"] = new Date(
                  get_PDD.data[j].NGAY_DAT
               ).toLocaleString();
               new_data[i]["MA_PHIEU_DP"] = get_PDD.data[j].MA_PHIEU_DP;
               new_data[i]["MA_GOIDV"] = get_PDD.data[j].MA_GOIDV;
            }
         }
      }

      //console.log(333333333, new_data)
      setData(new_data);
      setPhieuDatPhong(get_PDD.data);
   };
   const [makh, setMakh] = useState<any>(null);

   const update_state = async () => {
      const path = "/KhachHang";
      const customer_info = {
         mA_KH: makh,
         tranG_THAI_DAT_PHONG: "Checkin",
      };
      console.log(customer_info);
      const update_data = await authFetch.put("/KhachHang", customer_info);
      notify(update_data.data);
      setData(() => {
         return data.filter((kh: any) => kh.MA_KH != makh);
      });
   };
   const handleClick = (obj: any) => {
      console.log(obj);
      setMakh(obj);
   };
   const format_money = (money: any) => {
      const arr = money.split(" ");
      return parseFloat(arr[0]);
   };
   useEffect(() => {
      if (makh != null) {
         const receipt_data = data.filter((kh: any) => kh.MA_KH == makh);
         const data_invoce = {
            maHd: "HD" + random_num,
            ngayLap: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
            tienDv: 0,
            tienPhatsinh: 0,
            tongTien: format_money(receipt_data[0].TONG_TIEN),
            nhanVienLap: sessionStorage.getItem("Ma_NV"),
            maPhieuDp: receipt_data[0].MA_PHIEU_DP,
         };

         const post_invoice = authFetch.post("/HoaDon", data_invoce, config);

         sessionStorage.setItem("receipt", JSON.stringify(receipt_data[0]));
         update_state();
         router.push("/service/receipt");
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
                  {data.map((item: any, index: any) => {
                     console.log(item);
                     if (
                        item.LOAIPHONG == "GUARANTEE" ||
                        item.LOAIPHONG == "NOT GUARANTEE"
                     ) {
                        return (
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
                                       <strong>Phone Number:</strong> {item.SDT}
                                    </p>
                                    <p className="text-sm text-gray-500 mb-2">
                                       <strong> Type room:</strong>{" "}
                                       {item.LOAIPHONG}
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

                              <button
                                 className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-12 btn-custom "
                                 onClick={() => {
                                    handleClick(item.MA_KH);
                                 }}
                                 type="submit"
                              >
                                 Payment Successfully
                              </button>
                           </div>
                        );
                     }
                  })}
               </div>
            </div>
         </div>
         <ToastContainer />
      </DefaultLayout>
   );
};

export default Info;
