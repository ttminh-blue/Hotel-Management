import { PackageFormType, PackageType } from "@/types/UserType";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Table, TextInput } from "flowbite-react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const formInitialValue: PackageFormType = {
   packages: [],
};

const packageInitialValue: PackageType = {
   packageName: "",
   packageQuantity: 0,
};

type Props = {
   updatePackages: Function;
};

const TablePackage = (props: Props) => {
   const [packageDeliver, setPackageDeliver] =
      useState<PackageType>(packageInitialValue);
   const [formData, setFormData] = useState<PackageFormType>(formInitialValue);
   const [editState, setEditState] = useState<string>();
   const [editTempData, setEditTempData] = useState<PackageType>();
   const [selectedIndex, setSelectedIndex] = useState<Number[]>([]);

   const handleSelectedCheckbox = (
      index: number,
      event: ChangeEvent<HTMLInputElement>
   ) => {
      if (
         event.target.value &&
         selectedIndex.findIndex((val) => index === val) === -1
      ) {
         setSelectedIndex((prev) => [...prev, index]);
      } else {
         setSelectedIndex((prev) => {
            return prev.filter((_, id) => id !== index);
         });
      }
   };

   const handleEditPackage = (index: number) => {
      setEditState(() => index.toString());
      setEditTempData(() => formData.packages[index]);
   };

   const handleTempPackageChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEditTempData((prev) => {
         let newPackage;
         if (event.target.name === "packageQuantity") {
            newPackage = {
               ...prev,
               [event.target.name]: Number(event.target.value) || 0,
            };
         } else {
            newPackage = {
               ...prev,
               [event.target.name]: event.target.value,
            };
         }

         return newPackage;
      });
   };

   const handleSavePackageEditChanged = (index: number) => {
      setFormData((prev) => {
         const newPackages: any = prev.packages.map((val, id) => {
            if (id === index) return editTempData;
            return val;
         });
         const newForm = { ...prev, packages: newPackages };
         return newForm;
      });
      setEditTempData(() => undefined);
      setEditState(() => "");
   };

   const handlePackageChange = (event: ChangeEvent<HTMLInputElement>) => {
      setPackageDeliver((prev) => {
         let newPackage;
         if (event.target.name === "packageQuantity") {
            newPackage = {
               ...prev,
               [event.target.name]: Number(event.target.value),
            };
         } else {
            newPackage = {
               ...prev,
               [event.target.name]: event.target.value,
            };
         }

         return newPackage;
      });
   };

   const handleInsertPackage = (event: FormEvent<HTMLButtonElement>) => {
      if (packageDeliver) {
         if (
            packageDeliver.packageName === "" ||
            packageDeliver.packageQuantity === 0
         )
            return;
         setFormData((prev) => ({
            ...prev,
            packages: [...prev.packages, packageDeliver],
         }));
         setPackageDeliver(packageInitialValue);
      }
   };

   const handleClearPackage = () => {
      setPackageDeliver(() => packageInitialValue);
   };

   const handleDeletePackage = (index: number) => {
      setFormData((prev) => {
         const newPackages = prev.packages.filter((_, id) => id !== index);
         return { ...prev, packages: newPackages };
      });
   };

   useEffect(() => {
      props.updatePackages(formData);
   }, [formData]);

   return (
      <Table hoverable={true}>
         <Table.Head>
            <Table.HeadCell className="!p-4">
               <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Package name</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Options</Table.HeadCell>
            <Table.HeadCell
               onClick={() => {
                  setFormData((prev) => {
                     return {
                        packages: prev.packages.filter((_, id) => {
                           return !selectedIndex.includes(id);
                        }),
                     };
                  });
               }}
               className="text-red-600 cursor-pointer font-bold"
            >
               Remove
            </Table.HeadCell>
         </Table.Head>
         <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
               <Table.Cell className="!p-4"></Table.Cell>
               <Table.Cell className="whitespace-nowrap font-light text-gray-900 dark:text-white">
                  <TextInput
                     onChange={handlePackageChange}
                     name="packageName"
                     type="text"
                     value={packageDeliver.packageName?.toString()}
                     placeholder="Package name"
                  />
               </Table.Cell>
               <Table.Cell className="whitespace-nowrap font-light text-gray-900 dark:text-white">
                  <TextInput
                     type={"number"}
                     onChange={handlePackageChange}
                     value={packageDeliver.packageQuantity?.toString()}
                     name="packageQuantity"
                     placeholder="0"
                  />
               </Table.Cell>
               <Table.Cell>
                  <button
                     onClick={handleInsertPackage}
                     type="button"
                     className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-500"
                  >
                     Add
                  </button>
               </Table.Cell>
               <Table.Cell>
                  <button
                     onClick={handleClearPackage}
                     type="button"
                     className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400"
                  >
                     Clear
                  </button>
               </Table.Cell>
            </Table.Row>
            {formData?.packages?.map((value: PackageType, index: number) => {
               return (
                  <>
                     <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="!p-4">
                           <Checkbox
                              onChange={(event) =>
                                 handleSelectedCheckbox(index, event)
                              }
                           />
                        </Table.Cell>
                        {editState === index.toString() ? (
                           <>
                              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                 <input
                                    type="text"
                                    name="packageName"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    value={editTempData?.packageName}
                                    onChange={handleTempPackageChange}
                                    required={true}
                                 />
                              </Table.Cell>
                              <Table.Cell>
                                 <input
                                    type="number"
                                    name="packageQuantity"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    value={editTempData?.packageQuantity?.toString()}
                                    onChange={handleTempPackageChange}
                                    required={true}
                                 />
                              </Table.Cell>
                              <Table.Cell>
                                 <button
                                    onClick={() =>
                                       handleSavePackageEditChanged(index)
                                    }
                                    type="button"
                                    className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-500"
                                 >
                                    Save
                                 </button>
                              </Table.Cell>
                           </>
                        ) : (
                           <>
                              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                 {value?.packageName}
                              </Table.Cell>
                              <Table.Cell>
                                 {value?.packageQuantity?.toString()}
                              </Table.Cell>
                              <Table.Cell>
                                 <button
                                    onClick={() => handleEditPackage(index)}
                                    type="button"
                                    className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-500"
                                 >
                                    Edit
                                 </button>
                              </Table.Cell>
                           </>
                        )}

                        <Table.Cell>
                           <button
                              onClick={() => handleDeletePackage(index)}
                              type="button"
                              className="font-medium text-red-500"
                           >
                              <FontAwesomeIcon icon={faX} />
                           </button>
                        </Table.Cell>
                     </Table.Row>
                  </>
               );
            })}
         </Table.Body>
      </Table>
   );
};

export default TablePackage;
