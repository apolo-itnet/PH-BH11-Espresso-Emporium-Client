import React from "react";

const Marquee = () => {
  return (
    <div>
      <div>
        <Marquee
          className="text-2xl font-bold"
          speed={50}
          pauseOnHover={true}
          direction="left"
          gradient={false}
        >
          Handcrafted Drinks Local Roasts Global Flavor Friendly Baristas Great
          Coffee Fast Service Cozy Space
        </Marquee>
      </div>
    </div>
  );
};

export default Marquee;
