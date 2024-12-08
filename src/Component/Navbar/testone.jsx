import React from "react";
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3, // Default number of images to show on large screens
    speed: 500,
    focusOnSelect: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the speed of autoplay (in milliseconds)
    responsive: [
      {
        breakpoint: 1024, // For medium screens (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For small screens (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageUrls = [
    {
      url: "https://assets-prd.ignimgs.com/2024/12/06/path-of-exile-2-earlyaccessreview-deck-333399-1733520037164.jpg?fit=crop&width=282&height=470",
      title: "Path of Exile 2",
    },
    {
      url: "https://assets-prd.ignimgs.com/2024/12/07/ignfirst-combatevolved-deck-1733594859527.jpg?fit=crop&width=282&height=470",
      title: "Combat Evolved",
    },
    {
      url: "https://img.freepik.com/free-photo/portrait-scary-clown_23-2150549661.jpg?t=st=1733652697~exp=1733656297~hmac=2fd9656d9634665f941f42050a7f54c24c93cc0968989829fd6af98cf537fe11&w=360",
      title: "Scary Clown",
    },
    {
      url: "https://assets-prd.ignimgs.com/2024/12/07/da-deck-1733607750342.jpg?fit=crop&width=282&height=470",
      title: "DA Deck",
    },
    {
      url: "https://assets-prd.ignimgs.com/2024/12/07/mr-deck333399-1733607715140.jpg?fit=crop&width=282&height=470",
      title: "MR Deck",
    },
    {
      url: "https://img.freepik.com/free-photo/portrait-scary-clown_23-2150549646.jpg?t=st=1733652643~exp=1733656243~hmac=50e3ebd01973744ee6e8d16b3d70465b12493c83884ee70cc77834e8ea220c07&w=360",
      title: "Scary Clown 2",
    },
  ];

  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {imageUrls.map((item, index) => (
          <div className="h-[600px] relative px-2" key={index}>
            <img
              className="h-full w-full rounded-md object-cover"
              src={item.url}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg p-2 rounded-md">
              {item.title}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
