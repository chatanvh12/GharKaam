import React from "react";
import RenameCarausal from "../components/Carausals/rightCarausal";
import { Sliders2 } from "../components/Sliders2";
import { Sliders3 } from "../components/Sliders3";
import { Sliders } from "../components/Sliders";
import { Sliders1 } from "../components/Sliders1";
import { Sliders4 } from "../components/Slider4";
const data = [

  { index: 1, type: "Sliders4", data:{slideHeading:"Best-in-class features"}},
 { index: 2, type: "Sliders2"},
 { index: 3, type: "Sliders4", data:{slideHeading:"All intelligent features"}},
 
];
const componentMapping = {
  Sliders: Sliders,
  Sliders1: Sliders1,
  Sliders2: Sliders2,
  Sliders3: Sliders3,
  Sliders4: Sliders4
};
const looking = {
    title: "Home services at your doorstep",
    services: [
      {
        title: "Appliance Repair & Service",
        image: "",
      },
      {
        title: "Electrician, Plumber & Carpenters",
        image: "",
      },
      {
        title: "Bathroom & Kitchen cleaning",
        image: "",
      },
      {
        title: "Cleaning",
        image: "",
      },
      {
        title: "Native Water Purifier",
        image: "",
      }
      ,
      {
        title: "Native Smart Locks",
        image: "",
      }
      ,
      {
        title: "Full Home Painting",
        image: "",
      }
    ],
  };

const Store = () => {
    // console.log('looking',looking);
    
  const sortedData=data.sort((a,b)=>a.index-b.index);
  return (
    <div>
      {/* <RenameCarausal data={looking}/> */}

      {sortedData.map((item, idx) => {
        const Component = componentMapping[item.type];
        if (!Component) return null;

        return (
          <Component
            key={idx}
            data={item.data}
          />
        );
      })}
    </div>
  );
};

export default Store;
