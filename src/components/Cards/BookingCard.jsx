import { MapPinIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Clock from "../Icons/Clock.jsx";
import SlotModal from "../Modals/slotModal.jsx";
const weekSlots = [
  {
    day: "Sat",
    date: "24",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM"
    ],
  },
  {
    day: "Sun",
    date: "25",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Mon",
    date: "26",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Tue",
    date: "27",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Wed",
    date: "28",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Thu",
    date: "29",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Fri",
    date: "30",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
  {
    day: "Sat",
    date: "31",
    time: [
      "08:00 AM",
      "09:00 AM",
      "09:30 AM",
      "10:00 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "12:00 AM",
      "12:30 AM",
      "01:00 PM",
      "01:30 PM",
      "02:00 PM",
      "02:30 PM",
      "03:00 PM",
      "03:30 PM",
      "04:00 PM",
      "04:30 PM",
      "05:00 PM",
      "05:30 PM",
      "06:00 PM",
      "06:30 PM",
      "07:00 PM",
      "07:30 PM",
    ],
  },
];
const timeslot = [
  "08:00 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 AM",
  "12:30 AM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
];

const BookingCard = ({ data }) => {
  const [showSlots, setShowSlots] = useState(false);
  const [address, setAddress] = useState(data.address);

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  console.log("Booking Card", address);
  function changedate(date) {
    setDate(date);
    setTime("");
  }
//   alert(date)
  function ManipulateDate(time) {
    setTime(time);
  }
  function handleClose(){
    setShowSlots(false);
  }
  useEffect(() => {
    setAddress(data.address);
  }, []);
  //   console.log("Booking Card", address);

  return (
    <div className="w-full max-w-xl p-4 border rounded-lg shadow-md space-y-4 ml-9">
      {/* Mobile Number */}
      <div className="text-lg font-sm  flex items-center gap-3">
        <span className="inline-block p-2 border rounded-lg bg-gray-200">
          <MapPinIcon className="h-5" />
        </span>

        <span>
          <p className="text-sm font-bold text-gray-800">
            Send Booking Details To
          </p>
          <p className="text-sm font-bold text-gray-500">
            {data.countryCode} {data.contactNo}
          </p>
        </span>
      </div>
      {/* Mobile Number End */}
      <div className="border border-gray-300"></div>
      {/* Address */}
      <div className="text-lg font-sm  flex items-center gap-3 justify-between">
        <span className="flex flex-row gap-2">
          <span className="inline-block p-2 border rounded-lg bg-gray-200">
            <MapPinIcon className="h-5" />
          </span>
          <span>
            <p className="text-sm font-bold text-gray-800">Address</p>
            <p className="text-sm font-bold text-gray-500">{address}</p>
          </span>
        </span>
        <span>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Edit
          </button>
        </span>
      </div>

      <div className="border border-gray-300"></div>
      <div
        onClick={() => setShowSlots(true)}
        className="text-lg font-sm  flex items-center gap-3 justify-between"
      >
        <span className="flex flex-row gap-2">
          <Clock />
          <span>
            <p className="text-sm font-bold text-gray-800">Slot</p>
            <p className="text-sm font-bold text-gray-500">
              {time} {date}
            </p>
          </span>
        </span>
        <span>
          <button
            type="button"
            class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Edit
          </button>
        </span>
      </div>
      {/* Time Slots */}

      <div>
        {/* <button
          onClick={() => setShowSlots(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          View Available Time Slots
        </button> */}

        {/* Popup */}
        {showSlots && (
          <>
            <SlotModal
              timeslot={timeslot}
              weekSlots={weekSlots}
              changedate={changedate}
              setime={ManipulateDate}
              handleClose={handleClose}
              date={date}
              time={time}
            />
          </>
        )}
      </div>

      {/* Payment Method */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">💳 Payment Method</h3>
        <button className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
