import React, { useEffect, useRef } from "react";
import Categorycard from "../Cards/CategoryCard";
import { ArrowLeftIcon, ShareIcon } from "@heroicons/react/20/solid";
const data1 = [
  {
    id: 1,
    title:"Home appliances",
    data:[
      {
        id:1,
        title:"AC",
        category:"ac_service_repair",
        image:"image1.png"
      },
      {
        id:2,
        title:"Washing Machine",
        category:"washing_machine_repair",
        image:"image1.png"
      },
      {
        id:3,
        title:"Television",
        category:"washing_machine_repair",
        image:"image1.png"
      }
      ,
      {
        id:4,
        title:"Laptop",
        category:"washing_machine_repair",
        image:"image1.png"
      }
      ,
      {
        id:5,
        title:"Air Cooler",
        category:"washing_machine_repair",
        image:"image1.png"
      }
      ,
      {
        id:6,
        title:"Geyser",
        category:"washing_machine_repair",
        image:"image1.png"
      }
    ]
  },
  {
    id:2,
    title:"Kitchen appliances",
    data:[
      {
        id:1,
        title:"Water Purifier",
        category:"washing_machine_repair",
        image:"image1.png"
      },
      {
        id:2,
        title:"Refrigerator",
        category:"washing_machine_repair",
        image:"image1.png"
      },
      {
        id:3,
        title:"Microwave",
        category:"washing_machine_repair",
        image:"image1.png"
      },
      {
        id:4,
        title:"Chimney",
        category:"washing_machine_repair",
        image:"image1.png"
      }
    ]
  }
];
const Modal1 = ({ show, close, data, title }) => {
  const modalRef = useRef(null);
  // console.log("data",data);

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
        className="relative bg-white px-0 rounded-lg shadow-lg outline-none w-full max-w-xl max-h-[90vh] overflow-y-auto "
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

        <div className="flex flex-col flex-wrap justify-around gap-3 p-2">
 
            <div className="flex flex-col gap-3 p-2 justify-around">

              {data1 &&
                data1.map((value, key) => (
                  <>
                  <p>{value.title}</p>
                  <div className="flex flex-row gap-2 flex-wrap">

                  {
                    value.data && value.data.map((value,key)=>(

                      <Categorycard key={key} data={value} modal={value}/>
                    ))
                  }
                  </div>
                  </>
                ))}
            </div>
            {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal1;
