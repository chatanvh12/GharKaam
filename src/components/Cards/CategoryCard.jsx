import React, { useState } from "react";
import Modal from "../Modals/modal";
import { Link } from "react-router-dom";
import Modal1 from "../Modals/modal1";

const Categorycard = (prop) => {
  console.log("prop`````", prop);
  const [showModal, setShowModal] = useState(false);
  const { title, image } = prop.data;
  // alert(showModal);
  const handelClose = () => {
    // alert("called")
    setShowModal(false);
  };
  return (
    <div className="w-30 bg-white border-0 rounded-lg ">
      {prop.modal &&prop.modal!=null ? (
        <>
          {/* {prop.title && <div className="border-2 w-full">{prop.title}</div>} */}
          <div onClick={() => setShowModal(true)}>
            <img className="rounded-lg" src="/image1.png" alt="" />
          </div>
          <Modal
            show={showModal}
            close={() => handelClose()}
            data={prop.modal}
            category={prop.data.category}
            title={title}
          />
        </>
      ):((prop.data.category && prop.data.modal != "modal1")  )&& (
          <Link to={`/cart?category=${prop.data.category}`}>
            <div onClick={() => setShowModal(true)}>
              <img className="rounded-lg" src="/image1.png" alt="" />
            </div>
          </Link>
        )}
      {prop.data && prop.data.modal == "modal1" && (
        <>
          <div onClick={() => setShowModal(true)}>
            <img className="rounded-lg" src="/image1.png" alt="" />
          </div>
          <Modal1
            show={showModal}
            close={() => handelClose()}
            data={prop.modal}
            category={prop.data.category}
            title={title}
          />
        </>
      )}

      <div className="py-1  flex justify-around">
        <p className="mb-2 text-xs  text-gray-900">{title}</p>
      </div>
    </div>
  );
};
export default Categorycard;
