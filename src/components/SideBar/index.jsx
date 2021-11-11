import * as React from "react";
import { Link } from "react-router-dom";
import Filter from "../Filter";

const SideBar = () => (
  <div className="relative min-h-screen flex flex-row bg-transparent z-50 top-0 w-1/5">
    <div className="flex flex-col w-full bg-white overflow-hidden">
      <div className="flex items-center justify-center h-20 shadow-md">
        <Link to="/" className="text-3xl uppercase text-indigo-500">Logo</Link>
      </div>
      <Filter />
      <ul className="flex flex-col py-4">
        <li key="1">
          <Link to="/city-list" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home" /></span>
            <span className="text-sm font-medium">List</span>
          </Link>
        </li>
        <li key="2">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music" /></span>
            <span className="text-sm font-medium">Music</span>
          </a>
        </li>
        <li key="3">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink" /></span>
            <span className="text-sm font-medium">Drink</span>
          </a>
        </li>
        <li key="4">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag" /></span>
            <span className="text-sm font-medium">Shopping</span>
          </a>
        </li>
        <li key="5">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat" /></span>
            <span className="text-sm font-medium">Chat</span>
          </a>
        </li>
        <li key="6">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user" /></span>
            <span className="text-sm font-medium">Profile</span>
          </a>
        </li>
        <li key="7">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell" /></span>
            <span className="text-sm font-medium">Notifications</span>
            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
          </a>
        </li>
        <li key="8">
          <a href="#ad" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out" /></span>
            <span className="text-sm font-medium">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default SideBar;
