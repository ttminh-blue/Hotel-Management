import DefaultLayout from "@/layouts/DefaultLayout";
import { Card } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
type Props = {};

const Receipt = () => {


   const [invoiceData , setInvoiceData] = useState<any>([]);
   const authFetch = axios.create({
      baseURL: 'https://localhost:44335/api',
   });
   const [tenDv, setTenDv] = useState<any>('');
   const [giaDv, setGiaDv] = useState<any>('');
   const formatter = new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'VND',

   });
  
   const getData = async () => {
      const invoice = JSON.parse(sessionStorage.receipt);
      const goidv = await authFetch.get('/DichVu/Combo');
      console.log("Dich vu: ", goidv.data);
      for(var i = 0 ; i < goidv.data.length; i++){
        
         if(goidv.data[i].MA_GOIDV == invoice.MA_GOIDV){
            console.log("aaaaaa: ", goidv.data[i].TEN_GOIDV, goidv.data[i].GIA)
            setTenDv(goidv.data[i].TEN_GOIDV)
            setGiaDv(goidv.data[i].GIA)
         }
      }
     
      console.log("My invoice: ", invoice)
      setInvoiceData(invoice)
   }
   
   useEffect(() => {
      getData();
   }, [])
   return (
      <DefaultLayout>
         <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
               <div className="relative py-3 sm:max-w-xl sm:mx-auto lg:min-w-[800px] mt-10 mb-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                     <div className="flex justify-between">
                        <h1 className="text-3xl font-bold text-blue-600">
                           Invoice
                        </h1>
                        
                     </div>

                     <div className="mb-10">
                        <h2 className="text-lg font-semibold mb-3 text-[20px]">
                           Customer Details
                        </h2>
                        <div className="ml-5">
                           <p className="mb-1">
                              <span className="font-semibold">Name:</span>{" "}
                              {invoiceData.TEN_KH}
                           </p>
                           <p className="mb-1">
                              <span className="font-semibold">
                                 Phone Number:
                              </span>{" "}
                              {invoiceData.SDT}
                           </p>
                           <p className="mb-1">
                              <span className="font-semibold">Address:</span>{" "}
                              {invoiceData.DIA_CHI}
                           </p>
                           <p className="mb-1">
                              <span className="font-semibold">Type room:</span>{" "}
                              {invoiceData.LOAIPHONG}
                           </p>
                        </div>
                     </div>

                     <div className="mb-4">
                        <p className="font-semibold">Book Date:</p>
                         {invoiceData.NGAY_DAT}
                     </div>

                    

                     <div className="mb-4">
                        <p className="font-semibold">Services Used:</p>
                        <table className="w-full text-left">
                           <thead>
                              <tr>
                                 <th className="border-b-2">Service</th>
                                 <th className="border-b-2">Price</th>
                              </tr>
                           </thead>
                           <tbody>
                              {/* {servicesUsed.map((service, index) => (
                              <tr key={index}>
                                 <td>2000</td>
                                 <td>{service.price}</td>
                              </tr>
                           ))} */}
                              <tr>
                                 <td>{tenDv || "None"}</td>
                                 <td>{formatter.format(giaDv)|| ""}</td>
                              </tr>
                             
                             
                           </tbody>
                        </table>
                     </div>

                    

                     <div className="mb-4 flex justify-end">
                        <p className="font-semibold">Total Amount:</p>
                        <strong className="ml-10"> {invoiceData.TONG_TIEN}</strong>
                     </div>
                     <div className="mb-4 flex justify-end">
                        <p className="font-semibold">Prepay:</p>
                        <strong className="ml-10">{invoiceData.TIEN_COC}</strong>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
};
export default Receipt;
