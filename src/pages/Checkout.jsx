import React from "react";
import BookingCard from "../components/Cards/BookingCard";
import OfferCard from "../components/Cards/Offer";
import CartCard from "../components/Cards/CartCard";
import PaymentCard from "../components/Cards/PaymentCard";
import PercentageIcon from "../components/Icons/Percentage";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
const data = {
  phoneNo: "8999523116",
  address: "06, Raghavendra Nagar saiful bijapur road solapur",
};
const cartData = [
  {
    id: 1,
    title: "Fridge cleaning",
    quantity: 8,
    currency: "IND",
    price: 799,
  },
  {
    id: 2,
    title: "3 visits:  De-greasing kitchen pack",
    quantity: 8,
    price: 3684,
  },
];
const Checkout = () => {
  return (
    <div class="ontainer max-w-7xl mx-auto mt-15 my-8">
      <div class="flex flex-wrap">
        <div class="w-full md:w-7/12 p-4">
          {/* <h2 class="text-2xl font-bold mb-2">
            This is the First Column (7/12)
            </h2>
            <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisi vel consectetur interdum.
            </p> */}
          <div>
            <BookingCard data={data} />
          </div>
        </div>
        <div class="w-full md:w-5/12 p-4 space-y-5">
          <CartCard cartData={cartData} show={true} />
          <div className="border border-gray-200 shadow rounded-lg p-2 flex items-center justify-between">
            <span className="flex items-center">
              <PercentageIcon
                className={"border-gray-200"}
                PclassName={"h-4 w-4"}
              />
              <p>Coupans & Offers</p>
            </span>
            <ChevronRightIcon className="h-6"/>
          </div>
          <PaymentCard />
        </div>
      </div>
    </div>
  );
};
export default Checkout;
