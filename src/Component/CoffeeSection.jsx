import React, { useState } from "react";
import { PiCoffeeFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const CoffeeSection = () => {
  const loadCoffees = useLoaderData();
  console.log("Loaded Coffees:", loadCoffees);

  const [coffees, setCoffees] = useState(loadCoffees);

  return (
    <div className="px-10">
      <div className="text-center py-6">
        <p> --- Sip & Savor --- </p>
        <h1 className="text-4xl font-bold py-3">Our Popular Products</h1>
        <Link
          to="/addCoffee"
          className="btn border border-gray-800 bg-orange-300 rounded-lg"
        >
          Add Coffee <PiCoffeeFill size={18} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default CoffeeSection;
