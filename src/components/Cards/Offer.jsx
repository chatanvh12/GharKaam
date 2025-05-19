import React, { useState } from "react";
import PercentageIcon from "../Icons/Percentage";

const OfferCard = ({offerData}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-7 space-y-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm sm:p-4 ">
      <div className="flex gap-4 cursor-pointer">
        <PercentageIcon  className={"bg-gray-200 border border-gray-200"} PclassName={"h-6 w-6"}/>
        <span>
          <p className="font-semibold">Flat Rs 300 Off</p>
          <p className="text-gray-400"> Applicable on all models</p>
        </span>
      </div>
      <div>
        <div className="w-full ">
          {isOpen &&
            offerData &&
            offerData.map((value, index) => (
              <div className="flex gap-4 cursor-pointer">
                <PercentageIcon className={"bg-gray-200 border border-gray-200"}  PclassName={"h-6 w-6"}/>
                <span>
                  <p className="font-semibold">{value.title}</p>
                  <p className="text-gray-400"> {value.subTitle}</p>
                </span>
              </div>
            ))
            // <div className="p-4 bg-white text-gray-700">
            //   Flowbite is an open-source library of interactive
            //   components built with Tailwind CSS, including buttons,
            //   modals, dropdowns, and more.
            // </div>
          }
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full mt-2 flex justify-between items-center p-4 font-medium text-left text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            <span className="text-blue-500">View More Offers</span>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default OfferCard;