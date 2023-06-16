/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom'

export default function NavBar( props: { page: string }) {
  const nav = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4 w-full h-20 bg-indigo-500 gap-20 flex justify-between items-start text-lg rounded-tl-2xl">
      <div className="w-full h-full flex flex-row justify-between items-center gap-4">
        <div className="flex flex-row gap-2 h-full">
          <div className="flex items-center">
          {(() => {
            switch (props.page) {
              case 'account':
                return <h2 className="text-white">Account Management</h2>
              case 'event':
                return <h2 className="text-white">Event Management</h2>
              case 'log':
                return <h2 className="text-white">Logs</h2>
              default:
                return '';
        }
      })()}
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-between">
          <div>
            <label
              htmlFor="hs-trailing-button-add-on-with-icon-and-button"
              className="sr-only"
            >
              Label
            </label>
            <div className="relative flex rounded-md shadow-sm gap-3">
              <input
                type="text"
                id="hs-trailing-button-add-on-with-icon-and-button"
                name="hs-trailing-button-add-on-with-icon-and-button"
                className="py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <button
                type="button"
                className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-l-none rounded-r-md border border-transparent font-semibold bg-white text-black hover:bg-primaryHover active:bg-primaryActive transition-color text-sm"
              >
                Search
              </button>
            </div>
          </div>
          { /*<button
            className="rounded-full bg-secondary aspect-square w-12 h-12 flex items-center justify-center relative p-0"
            onClick={() => nav("/request")}
          >
            <Icon icon="ic:outline-shopping-cart" width="2rem" color="#fff" />
            <div className="absolute rounded-full bg-red-500 font-bold text-white px-2 py-1 -right-3 -bottom-2 text-sm">
              {1000}
            </div>
          </button> */}
        </div>
        <button
            className="p-0 rounded-full"
            onClick={() => {
              nav("/account");
            }}
          >
            <img
              src="/account-circle.svg"
              className="rounded-full w-12 h-12 object-cover bg-secondary hover:brightness-95 active:brightness-80"
              alt="user image"
            />
          </button>
      </div>
    </div>
  );
}