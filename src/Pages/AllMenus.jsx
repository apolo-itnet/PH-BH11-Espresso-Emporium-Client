import React, { useEffect, useState } from "react";

const AllMenus = () => {
  const [menus, setMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://espresso-emporium-server-one-omega.vercel.app/coffees")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenus(data);
        setFilteredMenus(data);
        setLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredMenus(menus);
    } else {
      const filtered = menus.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
      setFilteredMenus(filtered);
    }
  };

  return (
    <div className="relative">
      {/* Header Filter Navigation */}

      <header className="sticky top-0 inset-x-0 flex justify-center items-center z-50 w-full bg-primary">
        <nav className="mt-4 relative max-w-md w-full bg-orange-100/20 border border-green-900/50 rounded-full py-2 font-cabin text-base font-medium text-white ">
          <div className="flex justify-center items-center gap-4">
            {["all", "coffee", "drinks", "bakery"].map((label, i) => (
              <button
                key={i}
                onClick={() => handleFilter(label)}
                className={`relative inline-block px-5 py-1 capitalize after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-rose-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
                ${
                  selectedCategory === label
                    ? "after:scale-x-100"
                    : "hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-bottom-right after:scale-x-0"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Menu BG */}
      <div className="menu-bg sticky h-60 bg-primary inset-0 -top-0 z-20 flex flex-col items-center justify-end pb-10">
        <h1 className="text-7xl font-bold font-calistoga text-orange-100 tracking-wide">
          Menu
        </h1>
        <p className="text-lg font-bold font-cabin text-orange-100 tracking-wider py-2">
          Handcrafted drinks and fresh pastries.
        </p>
      </div>

      {/* Menu Items Section */}
      <div className="relative flex justify-center items-center px-10 py-10">
        {loading ? (
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg text-rose-500"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {filteredMenus.map((item) => (
              <div
                key={item._id}
                className="relative bg-white flex flex-col items-center justify-center rounded-lg shadow p-4 border border-gray-200 h-96 hover:shadow-md transition overflow-hidden"
              >
                {/* Background Layer */}
                <div className="absolute inset-0 bg-[url('https://i.postimg.cc/kMxJJ84C/cup-shadow.webp')] bg-no-repeat bg-center opacity-20 z-0 bg-[length:80px_80px] md:bg-[length:200px_200px] "></div>

                {/* Content Layer */}
                <div className="relative z-10 flex flex-col items-center">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="h-60 object-cover rounded"
                  />
                </div>
                <div className="flex justify-between items-center font-cabin tracking-wider text-color-primary text-lg">
                  <h3>{item.name}</h3>
                  <p>{item.price} TAKA</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMenus;
