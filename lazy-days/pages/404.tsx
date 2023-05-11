import Head from "next/head";
import React from "react";

type Props = {};

const Render404 = (props: Props) => {
   return (
      <>
         <Head>
            <link
               rel="stylesheet"
               href="https://www.w3schools.com/w3css/4/w3.css"
            ></link>
         </Head>
         <div className="w3-display-middle">
            <h1 className="w3-jumbo w3-animate-top w3-center">403</h1>
            <h1
               className="w3-jumbo w3-animate-top w3-center"
               style={{ color: "red" }}
            >
               <code>Access Denied</code>
            </h1>
            <div
               className="w3-border-white w3-animate-left"
               style={{
                  margin: "auto",
                  width: "50%",
               }}
            >
               <h2 className="w3-center w3-animate-right">
                  You do not have permission to view this site.
               </h2>
               <h6 className="w3-center w3-animate-zoom"></h6>
            </div>
         </div>
      </>
   );
};

export default Render404;
