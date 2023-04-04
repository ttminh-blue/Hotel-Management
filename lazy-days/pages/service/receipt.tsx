import DefaultLayout from "@/layouts/DefaultLayout";
import { Card } from "flowbite-react";
import React, { useState, useEffect } from "react";

const invoiceData = {
   customerDetails: {
      name: "John Doe",
      address: "123 Main St, New York, NY 10001",
      phone: "+1 (123) 456-7890",
   },
   issueDate: "2023-03-23",
   paymentMethod: "Credit Card",
   servicesUsed: [
      { name: "Room Service", price: 30 },
      { name: "Laundry", price: 20 },
   ],
   roomDetails: {
      roomNumber: "101",
      roomType: "Deluxe",
      checkInDate: "2023-03-20",
      checkOutDate: "2023-03-23",
   },
   totalAmount: 250,
};
type Props = {};

const Receipt = () => {
   return (
      <DefaultLayout>
         <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
               <div className="relative py-3 sm:max-w-xl sm:mx-auto lg:min-w-[800px] mt-10 mb-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                     <div className="flex justify-between">
                        <h1 className="text-3xl font-bold text-blue-600">
                           Receipt
                        </h1>
                        <img src="https://via.placeholder.com/60" alt="Logo" />
                     </div>

                     <div className="mb-10">
                        <h2 className="text-lg font-semibold mb-3 text-[20px]">
                           Customer Details
                        </h2>
                        <div className="ml-5">
                           <p className="mb-1">
                              <span className="font-semibold">Name:</span>{" "}
                              {invoiceData.customerDetails.name}
                           </p>
                           <p className="mb-1">
                              <span className="font-semibold">
                                 Phone Number:
                              </span>
                              {invoiceData.customerDetails.phone}
                           </p>
                           <p className="mb-1">
                              <span className="font-semibold">Address:</span>
                              {invoiceData.customerDetails.address}
                           </p>
                        </div>
                     </div>

                     <div className="mb-4">
                        <p className="font-semibold">Issue Date:</p>
                        <p>20/03/2023</p>
                     </div>

                     <div className="mb-4">
                        <p className="font-semibold">Payment Method:</p>
                        <p>Banking</p>
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
                                 <td>Gói Gại</td>
                                 <td>3000$</td>
                              </tr>
                              <tr>
                                 <td>Chơi khỉ</td>
                                 <td>2000$</td>
                              </tr>
                              <tr>
                                 <td>Play dog</td>
                                 <td>229$</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                     <div className="mb-4">
                        <p className="font-semibold">Room Details:</p>
                        <p>Room Number:P201</p>
                        <p>
                           Room Type: <strong>VIP</strong>{" "}
                        </p>
                        <p>
                           Check-In: <strong>3000$</strong>{" "}
                        </p>
                        <p>
                           Check-Out: <strong>7000$</strong>{" "}
                        </p>
                     </div>

                     <div className="mb-4 flex justify-end">
                        <p className="font-semibold">Total Amount:</p>
                        <strong className="ml-10">10000$</strong>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
};
export default Receipt;
