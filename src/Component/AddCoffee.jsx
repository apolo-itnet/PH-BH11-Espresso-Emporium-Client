import React from "react";
import Swal from "sweetalert2";
import { IoReturnUpBackOutline } from "react-icons/io5";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    // console.log(newCoffee);

    // send add coffee dat tho database
    fetch("https://espresso-emporium-server-one-omega.vercel.app/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Coffee has been added",
            showConfirmButton: false,
            draggable: false,
            timer: 1500,
          });
          // form.reset();
        }
      });
  };

  return (
    <div>
      <div className="px-10 py-10">

        <div className="flex justify-start my-6">
          <button
            onClick={() => window.history.back()}
            className="btn border border-orange-300"
          >
            {" "}
            <IoReturnUpBackOutline size={18} /> Back to Home
          </button>
        </div>

        <div className="py-6 text-center">
          <h1 className="text-5xl text-center font-calistoga tracking-wide text-color-primary">Add Product</h1>
          <p className="font-cabin tracking-wider">
            added product will be shown in our popular product section and also in our menu section on home page.
          </p>
        </div>

        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
            <fieldset>
              <label className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
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
                placeholder=""
                className="peer py-3 px-3 w-full border border-gray-200 rounded-lg focus:border-orange-300 focus:ring-orange-300 focus:outline-none"
                required
              />

              <span className="absolute inset-y-0 start-3 -translate-y-6 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6">
                Photo
              </span>
            </label>
          </fieldset>
          <button className="btn px-4 py-4 my-6 flex w-full bg-orange-300 shadow-none border-none ">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
