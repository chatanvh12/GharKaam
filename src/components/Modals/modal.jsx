import React, { useEffect, useRef } from "react";
import Categorycard from "../Cards/CategoryCard";
import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/20/solid";
const Modal = ({ show, close, data, title }) => {
  const modalRef = useRef(null);
console.log("data",data);

  useEffect(() => {
    if (show && modalRef.current) {
      modalRef.current.focus(); // Focus modal when it opens
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 overflow-y-auto"
    >
      <div
        ref={modalRef}
        tabIndex="0"
        onBlur={() => {
          close();
        }}
        onClick={(e)=>e.stopPropagation()}
        className="relative bg-white px-0 rounded-lg shadow-lg outline-none w-full max-w-lg max-h-[90vh] overflow-y-auto "
      >
        <div className="flex flex-row justify-between items-center py-6 px-3 sticky top-0 bg-white z-10">
          <span className="flex flex-row gap-2 items-center">
            <ArrowLeftIcon
              className="h-6 cursor-pointer"
              onClick={() => close()}
            />
            <p>{title}</p>
          </span>
          <ShareIcon className="h-6 cursor-pointer" />
        </div>
        <div>
          <img src="/popup1.png" alt="image" />
        </div>
        <div className="flex flex-wrap justify-around gap-3 ">
          {data &&
            data?.map((value, key) => (
              <img
                src={`/` + value.image}
                alt="service images"
                srcset=""
                className="w-full h-full object-fill  group-hover:scale-105 transition-transform duration-500"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
