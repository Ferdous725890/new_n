import React, { useContext } from "react";
import { auth } from "./Firebase.init";
import { AuthContext } from "./Navbar/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

// react icons
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";

const Reviews = ({ review }) => {
  const navigate = useNavigate();
  const { _id, coverimage, gameTitle, gameRating, description } = review;
  const handelreviewsDtails = (_id) => {
    console.log(_id, "details btn click");
    navigate(`/review/${_id}`);
  };

  // Create an array of stars based on gameRating
  const ratingStars = Array(5).fill(false).map((_, index) => index < gameRating);

  return (
    <div>
      <div className="w-full sm:w-[80%] lg:w-[95%] rounded-md relative group overflow-hidden mb-10">
        {/*  image  */}
        <img
          src={coverimage}
          alt="Image Not Found "
          className="w-full h-[350px] object-cover"
        />

        {/*  texts  */}
        <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
          <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
           Game_Title:  {gameTitle}
          </h3>
          <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
           Description:  {description}
          </p>

          {/* Render Rating */}
          <div className="rating rating-sm">
            {ratingStars.map((filled, index) => (
              <input
                key={index}
                type="radio"
                name={`rating-${_id}`}
                className={`mask mask-star-2 ${filled ? 'bg-orange-400' : 'bg-gray-400'}`}
                defaultChecked={filled}
                disabled
              />
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-[20px] mt-[15px]">
            <ImFacebook2 className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
            <FaXTwitter className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
            <FaDribbble className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
          </div>

          <div className="mt-10">
            <div
              className="px-8 py-2 border rounded-lg hover:border-none relative shadow-lg before:absolute 
                before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent 
                hover:before:w-full  hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 
                after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary 
                after:absolute after:bottom-0 after:right-0 after:w-0 
                after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500"
              onClick={() => handelreviewsDtails(_id)}
            >
              Reviews Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;














// import React, { useContext } from "react";
// import { auth } from "./Firebase.init";
// import { AuthContext } from "./Navbar/AuthProvider";
// import { Navigate, useNavigate } from "react-router-dom";

// // react icons
// import { FaXTwitter } from "react-icons/fa6";
// import { ImFacebook2 } from "react-icons/im";
// import { FaDribbble } from "react-icons/fa";

// const Reviews = ({ review }) => {
//   const navigate = useNavigate();
//   const { _id, coverimage, gameTitle, gameRating, description } = review;
//   const handelreviewsDtails = (_id) => {
//     console.log(_id, "details btn click");
//     navigate(`/review/${_id}`);
//   };
//   return (
//     <div>
//       {/* <div>
         
//           {/* <h2 className="card-title">
//           {gameTitle}
         
//           </h2>
//           <p>{ gameRating}</p>
//           <p>  {description}</p> */}

//       <div className="w-full sm:w-[80%] lg:w-[95%] rounded-md relative group overflow-hidden mb-10 ">
//         {/*  image  */}
//         <img
//           src={coverimage}
//           alt="Image Not Found "
//           className="w-full h-[350px] object-cover"
//         />

//         {/*  texts  */}
//         <div className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
//           <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">
//             {" "}
//             {gameTitle}
//           </h3>
//           <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
//             {" "}
//             {description}r
//           </p>
//           <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
//             {" "}
//             {gameRating}r
//           </p>

//           {/*  socials icons  */}
//           <div className="flex items-center gap-[20px] mt-[15px]">
//             <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
//               <ImFacebook2 className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
//             </div>
//             <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
//               <FaXTwitter className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
//             </div>
//             <div className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
//               <FaDribbble className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200" />
//             </div>
//           </div>
//           <div className="mt-10">
//             <div
//               className="px-8 py-2 border rounded-lg hover:border-none relative shadow-lg before:absolute 
//                 before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent 
//                 hover:before:w-full  hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 
//                 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary 
//                 after:absolute after:bottom-0 after:right-0 after:w-0 
//                 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500"
//               onClick={() => handelreviewsDtails(_id)}
//             >
//               Reviews Details
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;



