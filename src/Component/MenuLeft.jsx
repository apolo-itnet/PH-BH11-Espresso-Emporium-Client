import React from "react";
import { Link } from "react-router";
import { AiOutlineCoffee } from "react-icons/ai";

const MenuLeft = () => {
  return (
    <div>
      <div
        id="hs-application-sidebar"
        className="w-64 hs-overlay-open:translate-x-0 transition-all duration-300 transform hidden fixed inset-y-0 start-0 z-60 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 bg-[url('https://i.postimg.cc/jdThCXkx/header-vertical.jpg')] bg-cover bg-no-repeat"
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col mx-auto h-full justify-between pb-30">

          <div className="flex flex-col items-center justify-center pt-14">
            <Link
              to="/"
              className="flex-none text-xl font-semibold text-gray-800"
            >
              <img
                src={"https://i.postimg.cc/Dzsvpwjv/logo1.png"}
                alt="logo"
                className="w-12"
              />
            </Link>
            <p className="text-lg font-calistoga font-normal text-bg-primary">
              Espresso Emporium
            </p>
          </div>

          {/* Content */}
          <div className=" border-e border-gray-200 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
            <nav
              className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open
            >
              <ul
                className="flex flex-col space-y-1"
                data-hs-scrollspy="#scrollspy"
              >
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100 active"
                    href="#dashboard"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/users"
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                    href="#users"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Users
                  </Link>
                </li>

                <li>
                  <Link
                    to="/allMenus"
                    className="flex gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300 focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                    href="#account"
                  >
                    <AiOutlineCoffee size={20}/>
                    Menu
                  </Link>
                </li>

                <li>
                  <Link
                    to="/addCoffee"
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                    href="#projects"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Blog
                  </Link>
                </li>

                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                    href="#calendar"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    Calendar
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                    href="#documentation"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Documentation
                  </a>
                </li>

                <li className="hs-accordion" id="dropdown-accordion">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                    aria-expanded="true"
                    aria-controls="dropdown-accordion-child"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 10 2.5-2.5L3 5" />
                      <path d="m3 19 2.5-2.5L3 14" />
                      <path d="M10 6h11" />
                      <path d="M10 12h11" />
                      <path d="M10 18h11" />
                    </svg>
                    Dropdown
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="dropdown-accordion-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                    role="region"
                    aria-labelledby="dropdown-accordion"
                  >
                    <ul className="ps-8 pt-1 space-y-1">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                          href="#first"
                        >
                          First
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                          href="#second"
                        >
                          Second
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-green-900/30 transition-colors duration-300  focus:outline-hidden focus:bg-green-900/40 hs-scrollspy-active:bg-gray-100"
                          href="#third"
                        >
                          Third
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center pt-10 px-2 border-e border-gray-200">
            <div className="flex gap-2 justify-between items-center w-full">
              <Link to="/signin" className="flex-1 btn "> Signin </Link>
              <Link to="/signup" className="flex-1 btn "> Signup </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
