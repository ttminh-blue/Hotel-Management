import DefaultLayout from "@/layouts/DefaultLayout";
import { imageAssets } from "@/public/assets/imgs";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Table } from "flowbite-react";
import { toast } from "react-toastify";

import React from "react";

type Props = {
   onChangeProps?: any;
   tourDetail?: any;
   detailChoose?: any;
   listTour?: any;
   en?: any;
};


const RenderTour = (props: Props) => {
   return (
      <Table.Row>
         <Table.Cell className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600" >
            <input
               id={props.tourDetail?.Ma_Tour}
               type="radio"
               name="Service"
               value={props.tourDetail?.Ma_Tour}
               onChange={props.onChangeProps}
               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
               htmlFor={props.tourDetail?.Ma_Tour}
               className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
               {props.tourDetail?.Ten_Tour}
            </label>
         </Table.Cell>
         <Table.Cell className="">{props.tourDetail?.Mota}</Table.Cell>
         <Table.Cell>{props.tourDetail?.Gia}</Table.Cell>
         <Table.Cell>{props.tourDetail?.Ten_DV}</Table.Cell>

         {/* <Table.Cell>
            <input
               type="number"
               className="w-24 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
               name={`Service${props.tourDetail?.Ma_Dv}`}
               min={1}
               defaultValue={0}
               value={props.idChoose === props.tourDetail?.Ma_Dv ? props.AmountValue : 0}
               onChange={props.onChangeAmount}
            />
         </Table.Cell> */}
      </Table.Row>
   );
};

const ListService = (props: Props) => {
   useEffect(() => {
      console.log(props.listTour)
   }, [])
   return (


      <Table className="mt-5 overflow-y-scroll text-sm text-gray-700 dark:text-gray-200 h-64 block">
         <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Company</Table.HeadCell>

         </Table.Head>
         <Table.Body>

            {props.listTour.map((tourDetail: any, index: any) => {
               return (
                  <RenderTour
                     key={index}
                     tourDetail={tourDetail}
                     onChangeProps={props.onChangeProps}
                  />
               );
            })}

         </Table.Body>
      </Table>
   );
};

const Detail = (pros: Props) => {
   return (
      <section className="flex justify-center items-center px-2 py-16">
         <div className="wrapper w-3/5 bg-gray-50 rounded-b-md shadow-lg overflow-hidden">
            <div className="p-3  space-y-3 bg-gray-200 text-center">
               <h3 className="text-gray-700 text-4xl font-semibold text-md">
                  Tên dịch vụ: {pros.detailChoose?.name}
               </h3>
               <p className="text-3xl text-gray-900 leading-sm">
                  Thông tin dịch vụ: {pros.detailChoose?.desc}
               </p>
               <p className="text-3xl text-gray-900 leading-sm">
                  Giá: {pros.detailChoose?.price}
               </p>
            </div>
         </div>
      </section>
   );
};

const FormTour = (props: Props) => {
   const [phone, setPhone] = useState('')
   const [numberJoin, setNumberJoin] = useState(1)
   const [fullName, setFullName] = useState('')
   const [idCard, setIdCrad] = useState('')
   const [email, setEmail] = useState('')
   const [inputFields, setInputFields] = useState([{ TENNGUOITG: '', SDT: '',STT: 1 }])
   const [error,setError] = useState(false)
   const [departureDay,setDepartureDay] = useState('');
   const [request,setRequest] = useState('');
   const [shuttle,setShuttle] = useState('');
   const ChaneValueName = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.name)


   }

   const ChaneValueSDT = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("sdt", e.target.name)
   }

   const registerTour = (data: any) => {
      toast("In progress", {
         theme: "dark",
         type: "info",
      });
      axios.post('https://localhost:44335/api/DichVu/RegisterTour', data,{
         headers: {
         'Content-Type': 'application/json'
         }
       })
         .then(res => {
            toast("Registation successfully.", {
               theme: "dark",
               type: "success",
            });
            console.log(res.data)
         }).catch(e => {
            toast(e, {
               theme: "dark",
               type: "error",
            });
         })
   }

   return (
      <div className="flex justify-center p-4 mt-8">
         <button
            className="text-white text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            data-modal-target="defaultModal" data-modal-toggle="defaultModal"
            type="button"
            disabled={props.en === false}
         >
            Register
         </button>
         <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
               <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="container mx-auto p-4 pt-6">
                     <div className="relative z-0 w-full mb-6 group text-xl">
                        <h1>Detail Tour</h1>
                     </div>
                     <div className="relative z-0 w-full mb-6 group text-lg">
                        <p>Price: {props.detailChoose.Gia}</p>
                     </div>
                     <div className="relative z-0 w-full mb-6 group text-lg">
                        <p>Tour schedule: </p>
                        <span style={{ whiteSpace: "pre-line" }}>{props.detailChoose.LichTrinh}</span>
                     </div>

                  </div>
                  <form className="container mx-auto p-4 pt-6" id="form1">
                     <div className="relative z-0 w-full mb-6 group text-xl">
                        <h1>Form Register</h1>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           // ref={fullnameRef}
                           type="text"
                           name="name"
                           id="name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setFullName(e.target.value)
                           }}
                           onBlur={() => {
                              let data = [...inputFields];
                              data[0]['TENNGUOITG'] = fullName
                              setInputFields(data)
                           }}
                           value={fullName}
                        />
                        <label
                           htmlFor="name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Fullname
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="phone"
                           id="phone"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setPhone(e.target.value)
                           }}
                           onBlur={() => {
                              let data = [...inputFields];
                              data[0]['SDT'] = phone
                              setInputFields(data)
                           }}
                           value={phone}
                        />
                        <label
                           htmlFor="phone"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Phone number
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="idcard"
                           id="idcard"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setIdCrad(e.target.value)
                           }}
                           value={idCard}
                        />
                        <label
                           htmlFor="idcard"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           ID card
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="email"
                           id="email"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setEmail(e.target.value)
                           }}
                           value={email}
                        />
                        <label
                           htmlFor="email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Email
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="date"
                           name="departureDay"
                           id="departureDay"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                              var UserDate = e.target.value;
                              let d = new Date(),
                                 month = '' + (d.getMonth() + 1),
                                 day = '' + d.getDate(),
                                 year = d.getFullYear();

                              if (month.length < 2)
                                 month = '0' + month;
                              if (day.length < 2)
                                 day = '0' + day;

                              let t = [year, month, day].join('-');
                              if (new Date(t) >= new Date(UserDate)){
                                 setError(true)
                              }
                              else{
                                 setError(false)
                              }
                              setDepartureDay(UserDate)
                           }}
                        />
                        <label
                           htmlFor="departureDay"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Departure day
                        </label>
                        {
                           error && <p className=" text-red-600">Please choose a date greater than or equal to today</p>
                        }
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="Shuttle"
                           id="Shuttle"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setShuttle(e.target.value)
                           }}
                           value={shuttle}
                        />
                        <label
                           htmlFor="Shuttle"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Shuttle
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="text"
                           name="Request"
                           id="Request"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" "
                           required
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                              setRequest(e.target.value)
                           }}
                           value={request}
                        />
                        <label
                           htmlFor="Request"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Request
                        </label>
                     </div>
                     <div className="relative z-0 w-full mb-6 group">
                        <input
                           type="number"
                           name="numberJoin"
                           id="numberJoin"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           required
                           min={1}
                           value={numberJoin}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

                              if (Number(e.target.value) > numberJoin) {
                                 let newFied = { TENNGUOITG: '', SDT: '', STT: numberJoin + 1 }
                                 setInputFields([...inputFields, newFied])
                              }
                              else {
                                 let data = [...inputFields];
                                 data.splice(data.length - 1, 1)
                                 setInputFields(data)
                              }
                              setNumberJoin(Number(e.target.value));

                           }}
                        />
                        <label
                           htmlFor="numberJoin"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                           Number of member
                        </label>
                     </div>
                     {inputFields.map((input, index) => {
                        // console.log(index)
                        return (

                           <div className="relative z-0 w-full mb-6 group flex justify  justify-items-center" key={index}>
                              <div className="w-1/2">
                                 <input
                                    type="text"
                                    name={`name${index}`}
                                    id={`name${index}`}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                       let data = [...inputFields];
                                       data[index]['TENNGUOITG'] = e.target.value;
                                       setInputFields(data);
                                    }}
                                    value={input['TENNGUOITG']}
                                    disabled={index === 0}
                                 />
                                 <label
                                    htmlFor={`name${index}`}
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                 >
                                    Fullname
                                 </label>
                              </div>
                              <div className="w-1/2">
                                 <input
                                    type="text"
                                    name={`SDT${index}`}
                                    id={`SDT${index}`}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    required
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                       let data = [...inputFields];
                                       data[index]['SDT'] = e.target.value;
                                       setInputFields(data);
                                    }}
                                    value={input['SDT']}
                                    disabled={index === 0}

                                 />
                                 <label
                                    htmlFor={`SDT${index}`}
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-50% peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                 >
                                    Phone number
                                 </label>
                              </div>
                           </div>

                        )
                     })}

                  </form>
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                     <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="submit"
                        form="form1"
                        onClick={(e) => {
                           e.preventDefault();
                           let temp = {
                              fullName: fullName,
                              phone: phone,
                              idCard: idCard,
                              email: email,
                              numberJoin: numberJoin,
                              departureDay: new Date(departureDay),
                              shuttle: shuttle,
                              request: request,
                              registerDate: new Date(),
                           }
                           let data = {
                              data1: props.detailChoose.Ma_Tour,
                              data2: inputFields,
                              data3: temp
                           }
                           registerTour(data)
                           console.log(data)
                        }}
                     >
                        I accept</button>
                     <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
               </div>
            </div>
         </div>

      </div>


   )


   // return (
   //    
   // )
}

const Tour = (props: Props) => {
   const [check, setCheck] = useState(false);
   const [detailChoose, setDetailChoose] = useState<any>({});
   const [choose, setChoose] = useState("");
   const [listTour, setListTour] = useState<any>({});
   const [load, setLoad] = useState(true);
   const [click, setClick] = useState(false);
   const [en, setEn] = useState(false);
   const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // setType(e.target.value);
   };

   const handleChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
      setChoose(e.target.value);
      setDetailChoose(listTour.find((l: any) => l.Ma_Tour == e.target.value))
      setEn(true)
   };

   useEffect(() => {
      axios.get('https://localhost:44335/api/DichVu/Tour')
         .then(res => {
            console.log(res.data)
            // setChoose(res.data[0].Ma_Dv)
            setListTour(res.data)
            setLoad(false)
         })

   }, []);

   return (
      <DefaultLayout>
         <div className="flex justify-around justify-items-center">
            <div className="px-6 py-4 ">
               <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 ">
                  <p className="w-full text-3xl px-6 py-4 text-gray-900 rounded dark:text-gray-300">
                     Đăng ký dịch vụ
                  </p>
               </div>
               {!load &&
                  <ListService
                     listTour={listTour}
                     onChangeProps={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeList(e)
                     }
                  // idChoose={choose}
                  // onChangeAmount={(e: React.ChangeEvent<HTMLInputElement>) => {
                  //    handleChangeValue(e)
                  // }}
                  // AmountValue={amount.toString()}
                  />
               }
            </div>
         </div>
         <FormTour detailChoose={detailChoose} en={en} />
      </DefaultLayout>
   );
};
export default Tour;
