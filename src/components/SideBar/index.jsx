import * as React from "react";
// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { XIcon } from "@heroicons/react/outline";
import Filter from "../Filter";

const SideBar = () => {
  // const [open, setOpen] = useState(true);
  console.log("dslfij");
  return (
    <div className="relative min-h-screen flex flex-row bg-transparent z-50 top-0 w-1/5">
      <div className="flex flex-col w-full bg-white overflow-hidden">
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        </div>
        <Filter />
        <ul className="flex flex-col py-4">
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home" /></span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music" /></span>
              <span className="text-sm font-medium">Music</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink" /></span>
              <span className="text-sm font-medium">Drink</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag" /></span>
              <span className="text-sm font-medium">Shopping</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat" /></span>
              <span className="text-sm font-medium">Chat</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user" /></span>
              <span className="text-sm font-medium">Profile</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell" /></span>
              <span className="text-sm font-medium">Notifications</span>
              <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
            </a>
          </li>
          <li>
            <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out" /></span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
