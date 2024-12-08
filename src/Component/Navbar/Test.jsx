import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const CarouselSlider = () => {
  return (
    <Carousel
      autoPlay           // Enables auto-sliding
      infiniteLoop       // Loops the carousel infinitely
      showThumbs={false} // Hides the thumbnails (optional)
      interval={1000}    // Set the interval (time in ms) for each slide
      transitionTime={500} // Slide transition time in ms
    >
      <div className='w-10'>
        <img className='' src="https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?t=st=1733369552~exp=1733373152~hmac=fe7e04ecf8d686f90d7b1e2830fd20bec895aba8e874bf54ea659b46865722f4&w=826" alt="Image 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div className="bg-red-500">
        <img src="https://img.freepik.com/free-photo/full-shot-gamer-sitting-chair_23-2149829175.jpg?t=st=1733375680~exp=1733379280~hmac=6a1039bd01ad035784bc5cc0e9ae2d09f12726b024ce5f2f1fb05932c2315042&w=826" alt="Image 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div className="bg-red-500">
        <img src="https://img.freepik.com/free-photo/high-angle-gaming-controllers-arrangement_23-2149829179.jpg?t=st=1733373239~exp=1733376839~hmac=4ccb443394f91e249d0cd5002dca0107fb26375d7e9cef55255bdc744d617ce1&w=826" alt="Image 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
// import React from "react";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// import "Slider";

// function CenterMode() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500,
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {[...Array(6)].map((_, index) => (
//           <div className="bg-red-500" key={index}>
//             <h3>Slide {index + 1}</h3>
//             <img className="w-10"
//               src="https://img.freepik.com/free-photo/high-angle-gaming-setup-with-computer_23-2149829138.jpg"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default CenterMode;
