import React from "react";
import { useLoaderData } from "react-router";
import { IoReturnUpBackOutline } from "react-icons/io5";

const CoffeeDetails = ({ params }) => {
  const coffeeInfo = useLoaderData();
  // console.log(coffeeInfo);

  const { _id, name, category, supplier, photo, taste, details, chef } =
    coffeeInfo;

  return (
    <div>
      <div className="flex justify-start my-6">
        <button onClick={() => window.history.back()} className="btn border border-orange-300">
          {" "}
          <IoReturnUpBackOutline size={18} /> Back to Home
        </button>
      </div>
      <div className="flex gap-26 items-center justify-center py-6 bg-base-200 rounded-lg">
        <div className="w-80">
          <img src={photo} alt="Coffee_Image" className="w-full h-full " />
        </div>
        <div className="text-base text-left flex flex-col gap-4">
          <p className="text-gray-600 text-md">
            <span className="text-gray-900 font-bold">Name : </span>
            {name}
          </p>

          <p className="text-gray-600 text-md">
            <span className="text-gray-900 font-bold">Category : </span>
            {category}
          </p>

          <p className="text-gray-600 text-md">
            <span className="text-gray-900 font-bold">Taste : </span>
            {taste}
          </p>

          <p className="text-gray-600 text-md">
            <span className="text-gray-900 font-bold">Supplier : </span>
            {supplier}
          </p>

          <p className="text-gray-600 text-md">
            <span className="text-gray-900 font-bold">Details : </span>
            {details}
          </p>
          <p className="text-gray-600 text-md">
            <span className="text-gray-900 font-bold">Chef : </span>
            {chef}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
