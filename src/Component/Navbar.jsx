import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 py-2 bg-primary">
        <img src={"https://i.postimg.cc/Dzsvpwjv/logo1.png"} alt="logo" className="w-12" />
        <p className="text-2xl font-bold text-orange-100">Espresso Emporium</p>
      </div>
    </div>
  );
};

export default Navbar;