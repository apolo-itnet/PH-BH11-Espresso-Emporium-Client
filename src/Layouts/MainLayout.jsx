import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import MenuLeft from "../Component/MenuLeft";

const MainLayout = () => {
  return (
    <div>
      <nav className="ml-56 sticky top-0 z-50 w-[calc(100vw - 224px)]">
        {/* <Navbar /> */}
      </nav>

      <main className="grid grid-cols-12 gap-2">
        <aside className="col-span-12 md:col-span-2">
          <MenuLeft></MenuLeft>
        </aside>
        <section className="col-span-12 md:col-span-10">
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
