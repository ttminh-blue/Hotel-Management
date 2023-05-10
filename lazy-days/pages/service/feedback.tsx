import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useState, useEffect } from "react";

type Props = {};

const Feedback = () => {
   const [feedback, setFeedback] = useState("");
   const [rating, setRating] = useState(5);

   const handleFeedbackChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      setFeedback(event.target.value);
   };

   // const handleRatingChange = (event: React.FormEvent<HTMLFormElement>) => {
   //    setRating(event.target.value);
   // };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Submit feedback data to backend or perform other actions
      console.log("Feedback submitted:", { feedback, rating });
      setFeedback("");
      setRating(5);
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
                     value={feedback}
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
                     step="1"
                     value={rating}
                     // onChange={handleRatingChange}
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
                     value={feedback}
                     // onChange={handleFeedbackChange}
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
                     value={feedback}
                     type="text"
                     // onChange={handleFeedbackChange}
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
