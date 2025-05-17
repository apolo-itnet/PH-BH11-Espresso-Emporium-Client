import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, price, supplier, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-one-omega.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });

              const remainingCoffees = coffees.filter(
                (coffee) => coffee._id !== _id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side justify-center items-center bg-base-100 shadow-sm border border-orange-300/80 p-0">
        <div className="w-44 h-44 flex justify-center">
          <figure>
            <img src={photo} alt="coffee_image" className="w-full h-full" />
          </figure>
        </div>
        <div className="card-body flex flex-row  gap-6 items-center justify-around w-full p-0 ">
          <div className="flex flex-col items-start gap-3">
            <p className="text-gray-600 text-md">
              <span className="text-gray-900 font-bold">Name : </span>
              {name}
            </p>
            <p className="text-gray-600 text-md">
              <span className="text-gray-900 font-bold">Supplier : </span>
              {supplier}
            </p>
            <p className="text-gray-600 text-md">
              <span className="text-gray-900 font-bold">Price : </span>
              {price} Taka
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center ">
            <Link
              to={`/coffee/${_id}`}
              className="text-white bg-orange-300 rounded-sm px-3 btn shadow-none border-none"
            >
              <IoEyeSharp size={16} />
            </Link>
            <Link
              to={`/updateCoffee/${_id}`}
              className="text-white bg-gray-700 rounded-sm px-3 btn shadow-none border-none"
            >
              <BiSolidPencil size={16} />
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="text-white bg-red-500 rounded-sm px-3 btn shadow-none border-none"
            >
              <MdDelete size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
