import React from "react";
import { Global } from "../../../root/style";
import Slider from "react-slick";
import "./style.js";

// const arrowStyle = {
//    display: "block",
//    minWidth: "45px",
//    minHeight: "45px",
//    borderRadius: "50%",
//    border: "1px solid var(--color-white-smoke);",
// };

// const SampleNextArrow = (props) => {
//    const { className, style, onClick } = props;
//    return (
//       <div
//          className={className}
//          style={{
//             ...style,
//             ...arrowStyle,
//          }}
//          onClick={onClick}
//       />
//    );
// };

// const SamplePrevArrow = (props) => {
//    const { className, style, onClick } = props;
//    return (
//       <div
//          className={className}
//          style={{
//             ...style,
//             ...arrowStyle,
//          }}
//          onClick={onClick}
//       />
//    );
// };

const GenericSlider = ({ children, count = 4 }) => {
   let settings = {
      infinite: false,
      speed: 500,
      slidesToShow: count,
      slidesToScroll: count,
      initialSlide: 0,
      dots: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      // responsive:
      //    count === 4
      //       ? [
      //            {
      //               breakpoint: 1280,
      //               settings: {
      //                  slidesToShow: 3,
      //                  slidesToScroll: 3,
      //               },
      //            },
      //            {
      //               breakpoint: 950,
      //               settings: {
      //                  slidesToShow: 2,
      //                  slidesToScroll: 2,
      //                  initialSlide: 1
      //               },
      //            },
      //            {
      //               breakpoint: 480,
      //               settings: {
      //                  slidesToShow: 1,
      //                  slidesToScroll: 1,
      //               },
      //            },
      //         ]
      //       : [
      //            {
      //               breakpoint: 1280,
      //               settings: {
      //                  slidesToShow: 2,
      //                  slidesToScroll: 2,
      //               },
      //            },
      //            {
      //               breakpoint: 950,
      //               settings: {
      //                  slidesToShow: 1,
      //                  slidesToScroll: 1,
      //               },
      //            },
      //         ],
   };

   return (
      <Global.Container>
         <Slider {...settings}>{children}</Slider>
      </Global.Container>
   );
};

export default GenericSlider;
