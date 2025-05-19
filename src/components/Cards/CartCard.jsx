import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const CartCard = ({ cartData, show }) => {
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm sm:p-4">
       {!show? <p className="text-xl font-semibold text-gray-900 ">Cart</p>:""}
        {cartData ? (
          cartData.map((value, index) => (
            <>
              <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0 border-b border-gray-300 pb-4">
                <div className="text-base font-medium text-gray-900 ">
                  {value.title}
                </div>

                <div class="flex items-center justify-between md:order-3 md:justify-end">
                  <div class="flex items-center">
                    <button
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="counter-input"
                      class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100  dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                    >
                      <svg
                        class="h-2.5 w-2.5 text-gray-900 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="counter-input"
                      data-input-counter
                      class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0"
                      placeholder=""
                      value="2"
                      required
                    />

                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="counter-input"
                      class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 text-black"
                    >
                      <svg
                        class="h-2.5 w-2.5 text-gray-900 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                    {/* </Link> */}
                  </div>
                  <div class="text-end md:order-4 md:w-32">
                    <p class="text-base font-bold text-gray-900 ">$1,499</p>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <></>
        )}
        {cartData && !show && (
          <div className="">
            <Link to={{ pathname: "/checkout" }}>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 flex justify-between focus:ring-blue-300 font-medium rounded-lg w-full text-sm px-5 py-2.5 me-2 mb-2 "
              >
                <span>3,998</span>
                <span>View Cart</span>
              </button>
            </Link>
          </div>
        )}
        {show ? (
          <div className="flex items-center justify-center gap-2">
            <input type="checkbox" className="border" />{" "}
            <p className="text-sm">
              Avoid the calling before reaching the location
            </p>
          </div>
        ) : (
          ""
        )}
        {!cartData && (
          <div className="flex flex-col p-9">
            <ShoppingCartIcon className="h-20" />
            <p className="m-auto">No items in ypur Cart</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartCard;
