import PageHeader from "../shared/page-header";
import Carousel from "./Carausals/Carousel";
const filesStatData = [
  {
    id: 1,
    // title: "Total Storage ",
    // metric: "94 GB",
    // icon: "",
    // rating: 4.79,
    // reviews: "106k",
    // price: 1098,
    link: "/slider2.png",
    // currency:"INR"
    // fill: "#4c5c75",
    // percentage: 94,
  },
  // {
  //   id: 2,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 3,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 4,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 5,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 1,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
  // {
  //   id: 1,
  //   // title: "Total Storage ",
  //   // metric: "94 GB",
  //   // icon: "",
  //   // rating: 4.79,
  //   // reviews: "106k",
  //   // price: 1098,
  //   link: "/slider2.png",
  //   // currency:"INR"
  //   // fill: "#4c5c75",
  //   // percentage: 94,
  // },
];
export const Sliders2 = () => {
  return (
    <div className="container max-w-7xl mx-auto">
     
      {/* <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} /> */}
      <Carousel widths={"medium"} height={"medium"} bodyClassName={"my-35 px-7"} data={filesStatData}/>
    </div>
  );
};