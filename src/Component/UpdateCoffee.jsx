import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { IoReturnUpBackOutline } from "react-icons/io5";


const UpdateCoffee = () => {
  const {
    _id,
    name,
    taste,
    supplier,
    photo,
    details,
    price,
    quantity,
    category,
    chef,
  } = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const UpdatedCoffee = Object.fromEntries(formData.entries());
    console.log(UpdatedCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Coffee data has been updated",
            showConfirmButton: false,
            draggable: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="flex justify-start my-6">
        <button onClick={() => window.history.back()} className="btn border border-orange-300">
          {" "}
          <IoReturnUpBackOutline size={18} /> Back to Home
        </button>
      </div>
      <div className="py-6">
        <h1 className="text-5xl text-center">Update Coffee</h1>
        <p className="py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Name
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="price"
                name="price"
                defaultValue={price}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Price
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="quantity"
                name="quantity"
                defaultValue={quantity}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Quantity
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="supplier"
                name="supplier"
                defaultValue={supplier}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Supplier
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="taste"
                name="taste"
                defaultValue={taste}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Taste
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="details"
                name="details"
                defaultValue={details}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Details
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="category"
                name="category"
                defaultValue={category}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Category
              </span>
            </label>
          </fieldset>
          <fieldset>
            <label className="relative">
              <input
                type="text"
                id="chef"
                name="chef"
                defaultValue={chef}
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Chef
              </span>
            </label>
          </fieldset>
        </div>
        <fieldset>
          <label className="relative">
            <input
              type="text"
              id="photo"
              name="photo"
              defaultValue={photo}
              placeholder=""
              className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
              required
            />

            <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
              Photo Upload
            </span>
          </label>
        </fieldset>
        <button className="btn px-4 py-4 my-6 flex w-full bg-orange-300 shadow-none border-none ">
          Update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
