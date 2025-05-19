import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { RiHeart2Line } from "react-icons/ri";
import { PiSmileyMelting } from "react-icons/pi";
import { BiHomeSmile } from "react-icons/bi";
import { Link, useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/coffeeSection");
  };
  return (
    <div>
      {/* section-1 */}
      <section>
        <div className="flex flex-col justify-center bg-primary text-orange-100">
          <div className="flex flex-col justify-center h-[calc(100vh-180px)]">
            <h1 className="text-9xl text-center font-normal font-calistoga tracking-normal">
              Life Begins <br /> After Coffee
            </h1>
            <p className="text-xl font-cabin text-center font-normal py-6 tracking-wider">
              Because great coffee is the start of something even greater.
            </p>
          </div>
          <div className="flex justify-center items-end w-fit gap-4 mx-auto overflow-x-hidden overflow-y-hidden px-4">
            <img
              src={"https://i.postimg.cc/DyRp0nhs/Black-Coffee.webp"}
              alt="hero"
              className="w-[350px] h-[460px] -rotate-6"
            />
            <img
              src={"https://i.postimg.cc/nh7RQgVW/Espresso.webp"}
              alt="hero"
              className="w-[380px] h-[520px]"
            />
            <img
              src={"https://i.postimg.cc/PrCFdNgT/Cold-Brew.webp"}
              alt="hero"
              className="w-[350px] h-[460px] rotate-6"
            />
          </div>
        </div>
      </section>

      {/* section-2 */}
      <section>
        <div className="bg-orange-100 h-[calc(100vh-100px)] mx-auto flex flex-col justify-center">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-5xl font-bold font-calistoga text-color-primary">
              Our Delicious Offer
            </h1>
            <img
              src={"https://i.postimg.cc/gkSQRjXB/title-separator.png"}
              alt="design"
              className="py-6"
            />
            <p className="text-lg font-cabin tracking-wider text-color-primary">
              Passionate about crafting perfect coffee experiences daily.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-10 px-10">
            <div className="flex flex-col justify-center items-center text-center p-2 border-b-2 border-r-2 border-green-800 rounded-br-md">
              <img
                src={"https://i.postimg.cc/gchWGYf9/h2-custom-icon-5.png"}
                alt="img"
              />
              <h1 className="py-2 text-2xl font-bold font-cabin">
                Coffee Types
              </h1>
              <p className="text-base font-cabin">
                Choose from a wide range of coffee types to satisfy your
                cravings.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-2 border-b-2 border-l-2 border-green-800 rounded-bl-md">
              <img
                src={"https://i.postimg.cc/VLcc6x8J/h2-custom-icon-6.png"}
                alt="img"
              />
              <h1 className="py-2 text-2xl font-bold font-cabin">
                Different Beans
              </h1>
              <p className="text-base font-cabin">
                the best coffee beans from around the world to satisfy your
                cravings
              </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center p-2 border-b-2 border-r-2 border-green-800 rounded-br-md">
              <img
                src={"https://i.postimg.cc/2ynRGw4j/h2-custom-icon-7.png"}
                alt="img"
              />
              <h1 className="py-2 text-2xl font-bold font-cabin">
                Coffee & Pastry
              </h1>
              <p className="text-base font-cabin">
                a delicious combination of coffee and pastry to satisfy your
                cravings.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-2 border-b-2 border-l-2 border-green-800 rounded-bl-md">
              <img
                src={"https://i.postimg.cc/63kxCS41/h2-custom-icon-8.png"}
                alt="img"
              />
              <h1 className="py-2 text-2xl font-bold font-cabin">
                Coffee To Go
              </h1>
              <p className="text-base font-cabin">
                a convenient way to enjoy your favorite coffee at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section-3 */}
      <section className="bg-orange-100 py-10 flex md:flex-row flex-col justify-center items-center border-t border-gray-400/60 overflow-x-hidden">
        <div className=" flex flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col text-center">
            <h1 className="text-6xl font-bold font-calistoga text-color-primary">
              Find and Get <br /> What You Love
            </h1>
            <img
              src={"https://i.postimg.cc/gkSQRjXB/title-separator.png"}
              alt="design"
              className="py-6"
            />
            <p className="text-lg font-cabin tracking-wider text-color-primary">
              Love the taste of coffee? Find it here.
            </p>
          </div>

          <div className="flex gap-16 justify-center items-center">
            <div className="flex flex-col items-center justify-center text-center pt-10">
              <div className="w-80 h-80 bg-green-900 rounded-full flex items-center justify-center overflow-hidden group">
                <Link to="/coffeeSection">
                  <img
                    src="https://i.postimg.cc/DyRp0nhs/Black-Coffee.webp"
                    alt="Coffee"
                    className="w-56 object-contain pt-30 transition-transform duration-300 hover:scale-105 "
                  />
                </Link>
              </div>
              <h1 className="mt-6 text-3xl font-bold text-green-900 font-calistoga tracking-wider">
                Coffee
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center text-center pt-10">
              <div className="w-80 h-80 bg-green-900 rounded-full flex items-center justify-center overflow-hidden group">
                <Link to="/bakerySection">
                  <img
                    src="https://i.postimg.cc/43Wxs7gX/Bakery.webp"
                    alt="Coffee"
                    className="w-full object-contain pt-0 transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <h1 className="mt-6 text-3xl font-bold text-green-900 font-calistoga tracking-wider">
                Bakery
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center text-center pt-10">
              <div className="w-80 h-80 bg-green-900 rounded-full flex items-center justify-center overflow-hidden group">
                <Link to="/drinksSection">
                  <img
                    src="https://i.postimg.cc/CKhx3C9v/Virgin-Mojito.webp"
                    alt="Coffee"
                    className="w-full object-contain pt-0 transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <h1 className="mt-6 text-3xl font-bold text-green-900 font-calistoga tracking-wider">
                Cold Drinks
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section className="bg-orange-100 py-20 px-10 flex md:flex-row flex-col justify-between items-center gap-10 border-y border-gray-400/60">
        <div className="flex flex-row flex-1/3 gap-4 justify-between items-center h-[610px]">
          <div className="flex-1 h-full">
            <img
              src={"https://i.postimg.cc/G2srHYmR/sec-1.avif"}
              alt=""
              className="rounded-2xl h-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1  justify-between gap-4">
            <div>
              <img
                src="https://i.postimg.cc/P52dcTRg/sec-2.avif"
                alt=""
                className="rounded-2xl w-full h-[297px] object-cover object-center"
              />
            </div>
            <div>
              <img
                src="https://i.postimg.cc/YCppbhbN/sec-3.avif"
                alt=""
                className="rounded-2xl w-full h-[297px] object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-2 justify-center items-center gap-4">
          <div>
            <h1 className="text-6xl/tight tracking-wide font-bold font-calistoga text-color-primary">
              Good Vibes. <br /> Great Coffee.
            </h1>
            <p className="text-lg font-cabin tracking-wider py-6 text-color-primary">
              At Espresso, we serve great coffee and fresh pastries with care
              and passion, creating a warm, cozy space that feels like home.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex justify-center items-center">
              <div className="flex-1 flex flex-col items-center gap-1 border-b border-r border-gray-300 pb-4">
                <p className="bg-primary rounded-full p-2 w-12 h-12 flex justify-center items-center text-orange-100">
                  <GiCoffeeBeans size={20} />{" "}
                </p>
                <h1 className="text-xl font-bold font-calistoga tracking-wider text-color-primary text-center">
                  Great Coffee, <br /> Tasty Sips
                </h1>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 pb-4">
                <p className="bg-primary rounded-full p-2 w-12 h-12 flex justify-center items-center text-orange-100">
                  <RiHeart2Line size={20} />{" "}
                </p>
                <h1 className="text-xl font-bold font-calistoga tracking-wider text-color-primary text-center">
                  Warm, Cozy <br /> Atmosphere
                </h1>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex-1 flex flex-col items-center pt-4 gap-1">
                <p className="bg-primary rounded-full p-2 w-12 h-12 flex justify-center items-center text-orange-100">
                  <PiSmileyMelting size={20} />{" "}
                </p>
                <h1 className="text-xl font-bold font-calistoga tracking-wider text-color-primary text-center">
                  Speedy Service <br /> with a Smile
                </h1>
              </div>
              <div className="flex-1 flex flex-col items-center pt-4 gap-1 border-t border-l border-gray-300">
                <p className="bg-primary rounded-full p-2 w-12 h-12 flex justify-center items-center text-orange-100">
                  <BiHomeSmile size={20} />{" "}
                </p>
                <h1 className="text-xl font-bold font-calistoga tracking-wider text-color-primary text-center">
                  Local & <br /> Sustainable
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
