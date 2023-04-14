import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";

type Props = {};

const Checkout = (props: Props) => {
   return (
      <DefaultLayout>
         <div className="mt-20">
            <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
               Check Out
            </h1>
         </div>
         <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
               <div className="flex flex-col md:w-full">
                  <h2 className="mb-4 font-bold md:text-xl text-heading ">
                     Room 808
                  </h2>
                  {/* <label
                     htmlFor="user"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                     Select a user who is charging
                  </label>
                  <select
                     id="user"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option selected>Choose the user</option>
                     <option value="US">Nguyễn Phát Thịnh</option>
                     <option value="CA">Nguyễn Sanh Tài</option>
                     <option value="FR">Nguyễn Văn A</option>
                     <option value="DE">Lương Vĩ Minh</option>
                  </select> */}

                  <label
                     htmlFor="payment"
                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-10"
                  >
                     Select a payment method
                  </label>
                  {/* Payment method */}
                  <select
                     id="payment"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                     <option selected>Choose the payment method</option>
                     <option value="US">Cash</option>
                     <option value="CA">Credit Card</option>
                     <option value="FR">Visa</option>
                     <option value="DE">Money</option>
                  </select>
               </div>
               <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                  <div className="pt-12 md:pt-0 2xl:ps-4">
                     <h2
                        className="text-xl font-bold ml-4"
                        style={{ color: "brown" }}
                     >
                        Order Summary
                     </h2>
                     <div className="mt-8">
                        <div className="flex flex-col space-y-4">
                           <div className="flex space-x-4">
                              <div></div>
                              <div>
                                 <h2 className="text-xl font-bold">
                                    Room Service
                                 </h2>
                                 <p className="text-sm">3 days staying</p>
                                 <span className="text-red-600">Price</span> $20
                              </div>
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M6 18L18 6M6 6l12 12"
                                    />
                                 </svg>
                              </div>
                           </div>
                           <div className="flex space-x-4">
                              <div></div>
                              <div>
                                 <h2 className="text-xl font-bold">
                                    Service Hotel
                                 </h2>
                                 <p className="text-sm">Use swimming pool</p>
                                 <span className="text-red-600">Price</span> $20
                              </div>
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M6 18L18 6M6 6l12 12"
                                    />
                                 </svg>
                              </div>
                           </div>
                           <div className="flex space-x-4">
                              <div></div>
                              <div>
                                 <h2 className="text-xl font-bold">
                                    Service Hotel
                                 </h2>
                                 <p className="text-sm">Karaoke</p>
                                 <span className="text-red-600">Price</span> $20
                              </div>
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       stroke-width="2"
                                       d="M6 18L18 6M6 6l12 12"
                                    />
                                 </svg>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Subtotal<span className="ml-2">$40.00</span>
                     </div>
                     <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Shipping Tax<span className="ml-2">$10</span>
                     </div>
                     <div className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                        Total<span className="ml-2">$50.00</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-20">
            <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
               <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                  Print Receipt
               </button>
            </h1>
         </div>
      </DefaultLayout>
   );
};
export default Checkout;
