import DefaultLayout from "@/layouts/DefaultLayout";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

type Props = {};

const Feedback = () => {
   const [rating, setRating] = useState(5);

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Submit feedback data to backend or perform other actions
      const formData = new FormData(event.currentTarget);
      formData.set("MaKh", " ");
      formData.set("MaFb", "NV" + Math.floor(Math.random() * 899) + 100);

      await axios.post(process.env.NEXT_PUBLIC_API + "Feedback", {
         MaFb: formData.get("MaFb"),
         TenFb: formData.get("TenFb"),
         MieuTaFb: formData.get("MieuTaFb"),
         LoaiFb: formData.get("LoaiFb"),
         DanhGia: formData.get("DanhGia"),
         MaKh: formData.get("MaKh"),
      });

      // setFeedback("");
      // setRating(5);
   };
   return (
      <DefaultLayout>
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-semibold mb-4">
               Hotel Guest Feedback
            </h1>
            <form
               className="w-full max-w-md bg-white shadow-md rounded-md px-8 py-6"
               onSubmit={handleSubmit}
            >
               <div className="mb-4">
                  <label
                     htmlFor="feedback"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Tên feedback
                  </label>
                  <input
                     id="feedback"
                     name="TenFb"
                     type="text"
                     // onChange={handleFeedbackChange}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label
                     htmlFor="rating"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Rating (1-5)
                  </label>
                  <input
                     id="rating"
                     type="number"
                     min="1"
                     max="5"
                     name="DanhGia"
                     step="1"
                     value={rating}
                     onChange={(e) => setRating(() => Number(e.target.value))}
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label
                     htmlFor="feedback"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Feedback
                  </label>
                  <textarea
                     id="feedback"
                     name="MieuTaFb"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>
               <div className="mb-4">
                  <label
                     htmlFor="feedback"
                     className="block text-gray-700 font-bold mb-2"
                  >
                     Loại feedback
                  </label>
                  <input
                     id="feedback"
                     type="text"
                     name="LoaiFb"
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     required
                  />
               </div>

               <div className="flex items-center justify-between">
                  <button
                     type="submit"
                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </DefaultLayout>
   );
};
export default Feedback;
