import DefaultLayout from "@/layouts/DefaultLayout";
import { Card, Table } from "flowbite-react";
import React from "react";
import Service from ".";
import NoSSR from "../../components/NoSSR";
import { useState, useEffect } from "react";
import axios from 'axios';
type Props = {
   serviceDetail?: Detail;
   type?: string;
   onChangeProps?: any;
   detailChoose?: Detail;
   listHS?: any;
   listP?: any;
   productDetail?: Detail;
};

type Detail = {
   MA_DV: string;
   Tendichvu: string;
   Gia: number;
   Diadiem: string;
   Mota: string;
   // type: string;
};

const l = [
   {
      id: "DV001",
      name: "Spa",
      price: 400000,
      desc: "Mang lại phúc giây thoải mái",
      location: "Phòng 2 lầu 2",
      type: "service",
   },
   {
      id: "DV002",
      name: "Bắn cung",
      price: 500000,
      desc: "Trải nghiệm cảm giác làm thợ săn",
      location: "Khu c",
      type: "service",
   },
   {
      id: "DV003",
      name: "Tăng lực",
      price: 400000,
      desc: "Nước tăng lực",
      location: "Phòng 4,lầu 3",
      type: "product",
   },
   {
      id: "DV004",
      name: "Lẩu chua",
      price: 500000,
      desc: "Lẩu chua cay ngon",
      location: "Phòng 6 lầu 3",
      type: "product",
   },
];

const combo = [
   {
      id: "G001",
      idDV: "DV001",
      sale: 15,
   },
];

const RenderService = (props: Props) => {
   return (
      <Table.Row>
         <Table.Cell className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600" >
            <input
               id={props.serviceDetail?.MA_DV}
               type="radio"
               name="Service"
               value={props.serviceDetail?.MA_DV}
               onChange={props.onChangeProps}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
               htmlFor={props.serviceDetail?.MA_DV}
               className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
               {props.serviceDetail?.Tendichvu}
            </label>
         </Table.Cell>
         <Table.Cell>{props.serviceDetail?.Gia}</Table.Cell>
         <Table.Cell>{props.serviceDetail?.Diadiem}</Table.Cell>
      </Table.Row>
   );
};

const RenderProduct = (props: Props) => {
   return (
      <Table.Row>
         <Table.Cell className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input
               id={props.serviceDetail?.MA_DV}
               type="radio"
               name="Service"
               value={props.serviceDetail?.MA_DV}
               onChange={props.onChangeProps}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
               htmlFor={props.serviceDetail?.MA_DV}
               className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
               {props.serviceDetail?.Tendichvu}
            </label>
         </Table.Cell>
         <Table.Cell>{props.serviceDetail?.Gia}</Table.Cell>
         <Table.Cell>
            <input
               type="number"
               className="w-24 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
               name="quanityProduct"
               min={0}
               defaultValue={0}
            />
         </Table.Cell>
      </Table.Row>
   );
};

const ListService = (props: Props) => {
   return (
      <>
         <Table className="h-4 mt-5 px-3 pb-3 overflow-y-scroll text-sm text-gray-700 dark:text-gray-200">
            <Table.Head>
               <Table.HeadCell>Name</Table.HeadCell>
               <Table.HeadCell>Price</Table.HeadCell>
               <Table.HeadCell>Location</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
            
               {props.listHS.map((serviceDetail: any, index: any) => {
                     return (
                        <RenderService
                           key={index}
                           serviceDetail={serviceDetail}
                           onChangeProps={props.onChangeProps}
                        />
                     );
               })}
               
            </Table.Body>
         </Table>
      </>
   );
};

const ListProduct = (props: Props) => {
   useEffect(()=>{
      console.log("AAAA",props.listP)
   },[])
   return (
      <>
         <Table className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200 max-h-9">
            <Table.Head>
               <Table.HeadCell>Tên</Table.HeadCell>
               <Table.HeadCell>Giá</Table.HeadCell>
               <Table.HeadCell>Số lượng</Table.HeadCell>
            </Table.Head>
            <Table.Body className="z-10  bg-white divide-y rounded-lg shadow w-60 dark:bg-gray-700">

               {props.listP.map((serviceDetail : any, index : any) => {
                     return (
                        <RenderProduct
                           key={index}
                           serviceDetail={serviceDetail}
                           onChangeProps={props.onChangeProps}
                        />
                     );
               })}
            </Table.Body>
         </Table>
      </>
   );
};

const DetailChoose = (pros: Props) => {
   return (
      <section className="flex justify-center items-center px-2 pt-16">
         <div className="wrapper w-3/5 bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
            <div className="p-3  space-y-3 bg-gray-200 text-center">
               <h3 className="text-gray-700 text-4xl font-semibold text-md">
                  Tên dịch vụ: {pros.detailChoose?.Tendichvu}
               </h3>
               <p className="text-3xl text-gray-900 leading-sm">
                  Thông tin dịch vụ: {pros.detailChoose?.Mota}
               </p>
               <p className="text-3xl text-gray-900 leading-sm">
                  Giá: {pros.detailChoose?.Gia}
               </p>
               <p className="text-3xl text-gray-900 leading-sm">
                  Địa điểm sử dụng: {pros.detailChoose?.Diadiem}
               </p>
            </div>
         </div>
      </section>
   );
};

const Hotel = (props: Props) => {
   const [type, setType] = useState("Service");
   const [choose, setChoose] = useState("");
   const [check, setCheck] = useState(false);
   const [detailChoose, setDetailChoose] = useState<Detail>();

   const [showTables, setShowTables] = useState<any>(null);
   const [HotelService,setHoTelService] = useState([])
   const [Product,setProduct] = useState([])

   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setType(e.target.value);
   };

   const handleChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChoose(e.target.value);
      console.log(e.target.value)
   };

   useEffect(() => {
      setChoose("");
   }, [type]);
   useEffect(()=>{
      axios.get('https://localhost:7286/api/DichVu/HotelService')
         .then( res=> {
            console.log(res.data)
            setHoTelService(res.data)
         })
         axios.get('https://localhost:7286/api/DichVu/Product')
         .then( res=> {
            console.log(res.data)
            setProduct(res.data)
         })
   },[]);

   return (
      <DefaultLayout>
         <NoSSR>
            <div className="flex justify-around justify-items-center">
               <p className="text-3xl px-6 py-4">Lựa chọn loại hình</p>
            </div>
            <div className="flex justify-around justify-items-center">
               <div className="px-6 py-4" onClick={() => setShowTables(0)}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                     <input
                        id="Service"
                        type="radio"
                        name="Type"
                        value="Service"
                        checked={type === "Service"}
                        onChange={(e) => {
                           onOptionChange(e);
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                     />
                     <label
                        htmlFor="Service"
                        className="w-full text-xl px-6 py-4 text-gray-900 rounded dark:text-gray-300"
                     >
                        Đăng ký dịch vụ
                     </label>
                  </div>
               </div>
               <div className="px-6 py-4 flex  gap-4  ">
                  <label
                     htmlFor="Phone"
                     className="w-full text-xl px-6 py-4 text-gray-900 rounded dark:text-gray-300"
                  >
                     Phone
                  </label>
                  <input
                     type="text"
                     name="Phone"
                     id="Phone"
                     className="bg-gray-50 border h-fit mt-2 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
               </div>
               <div
                  className="px-6 py-4"
                  onClick={() => setShowTables(() => 1)}
               >
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                     <input
                        id="Product"
                        type="radio"
                        name="Type"
                        value="Product"
                        // checked={type === "Product"}
                        onChange={(e) => {
                           console.log(e.target.value);
                           onOptionChange(e);
                        }}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                     />
                     <label
                        htmlFor="Product"
                        className="w-full text-xl px-6 py-4 text-gray-900 rounded dark:text-gray-300"
                     >
                        Mua sản phẩm
                     </label>
                  </div>
               </div>
            </div>
            <div className="flex justify-center items-center overflow-y-scroll max-h-64 pt-10 pb-2">
               {showTables === 0 ? (
                  <ListService
                     type={type}
                     listHS = {HotelService}
                     onChangeProps={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeList(e)
                     }
                  />
               ) : (
                  showTables === 1 && (
                     <ListProduct
                        type={type}
                        listP = {Product}
                        onChangeProps={(
                           e: React.ChangeEvent<HTMLInputElement>
                        ) => handleChangeList(e)}
                     />
                  )
               )}
            </div>
            <div className="flex justify-center p-4">
               <button
                  className="text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  onClick={() => {
                     let cb = combo.find((x) => x.idDV === choose);
                     const temp = JSON.parse(
                        JSON.stringify(l.find((x) => x.id === choose))
                     );
                     if (cb != null && temp != null) {
                        temp.price = temp.price - (temp.price * cb.sale) / 100;
                        setDetailChoose(temp);
                     } else {
                        if (temp != null) {
                           setDetailChoose(temp);
                        } else {
                           setDetailChoose(undefined);
                        }
                     }
                     setCheck(true);
                  }}
                  disabled={choose === ""}
               >
                  Kiểm tra thông tin và giá
               </button>
            </div>
            {check && (
               <div>
                  <div>
                     <DetailChoose detailChoose={detailChoose} />
                  </div>
                  <div className="flex justify-evenly   items-center px-2 pb-24 pt-10">
                     <button className="mr-5 text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Đăng ký
                     </button>
                     <button className="text-black text-xl bg-slate-200  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Hủy
                     </button>
                  </div>
               </div>
            )}
         </NoSSR>
      </DefaultLayout>
   );
};
export default Hotel;
