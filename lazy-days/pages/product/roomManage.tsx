import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

type Props = {};

const Product = (props: Props) => {
   return (
      <DefaultLayout>
         <div className="bg-gray-100">
            <div className="container mx-auto p-4">
               <h1 className="text-2xl font-bold mb-20 mt-10 ">
                  <strong className="text-[#3F83F8]">Room</strong> Information
               </h1>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
                  <div className="bg-white rounded-lg shadow-md p-4 mb-10">
                     <p className="text-lg font-[600] mb-10 text-[#3F83F8] ">
                        Room{" "}
                        <strong className="text-black font-[500]">101</strong>{" "}
                     </p>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Location:</strong> Floor 1
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong> Capacity: </strong> 3
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Status:</strong> Available
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>View:</strong> Beach,dick,duck,Bikini
                           </p>
                        </div>
                     </div>

                     <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 btn-custom">
                        Grant Room
                     </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 mb-10">
                     <p className="text-lg font-[600] mb-10 text-[#3F83F8] ">
                        Room{" "}
                        <strong className="text-black font-[500]">101</strong>{" "}
                     </p>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Location:</strong> Floor 1
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong> Capacity: </strong> 3
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Status:</strong> Available
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>View:</strong> Beach,dick,duck,Bikini
                           </p>
                        </div>
                     </div>

                     <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 btn-custom">
                        Grant Room
                     </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 mb-10">
                     <p className="text-lg font-[600] mb-10 text-[#3F83F8] ">
                        Room{" "}
                        <strong className="text-black font-[500]">101</strong>{" "}
                     </p>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Location:</strong> Floor 1
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong> Capacity: </strong> 3
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Status:</strong> Available
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>View:</strong> Beach,dick,duck,Bikini
                           </p>
                        </div>
                     </div>

                     <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 btn-custom">
                        Grant Room
                     </button>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-4 mb-10">
                     <p className="text-lg font-[600] mb-10 text-[#3F83F8] ">
                        Room{" "}
                        <strong className="text-black font-[500]">101</strong>{" "}
                     </p>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Location:</strong> Floor 1
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong> Capacity: </strong> 3
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>Status:</strong> Available
                           </p>
                           <p className="text-sm text-gray-500 mb-2">
                              <strong>View:</strong> Beach,dick,duck,Bikini
                           </p>
                        </div>
                     </div>

                     <button className="container bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 btn-custom ">
                        Grant Room
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
};

export default Product;
