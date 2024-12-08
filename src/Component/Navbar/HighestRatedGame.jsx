import React, { useEffect, useState } from "react";
import HighestGame from "./HighestGame";

const HighestRatedGame = () => {
  const [highestRatedGames, setHighestRatedGames] = useState([]);

  useEffect(() => {
    const fetchHighestRatedGames = async () => {
      try {
        const response = await fetch(
          "https://n-indol-seven.vercel.app/highestRatedGames?limit=6" 
        );
        const data = await response.json(); 
        setHighestRatedGames(data); 
      } catch (error) {
        console.error("Errors fetching highest_rated games:", error);
      }
    };

    fetchHighestRatedGames(); 
  }, []);

  return (
    <div className="mb-10">
      <div className="mb-10">
        <h2 className="text-3xl text-center font-bold ">Highest Rated Game</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4 container w-11/12 mx-auto">
        {highestRatedGames.length > 0 ? (
          highestRatedGames.map((game) => (
            <HighestGame highestGame={game} key={game._id} />
          ))
        ) : (
          <p className="text-center col-span-3">No games found</p>
        )}
      </div>

      <div className="text-center mt-10 mb-10">
        <h2 className="text-3xl font-bold">Top Game</h2>
      </div>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 p-5 gap-10 container w-11/12 mx-auto mb-16">
        <img
          src="https://assets-prd.ignimgs.com/2024/12/06/path-of-exile-2-earlyaccessreview-yt-1-1733511766328.jpg?width=1920"
          alt=""
        />
        <img
          src="https://assets-prd.ignimgs.com/2024/12/06/path-of-exile-2-earlyaccessreview-yt-1-1733511766328.jpg?width=1920"
          alt=""
        />
        <img
          src="https://assets-prd.ignimgs.com/2024/12/06/path-of-exile-2-earlyaccessreview-yt-1-1733511766328.jpg?width=1920"
          alt=""
        />
        <img
          src="https://assets-prd.ignimgs.com/2024/12/06/path-of-exile-2-earlyaccessreview-yt-1-1733511766328.jpg?width=1920"
          alt=""
        />
      </div>
      <div className="text-center mt-10 mb-10">
        <h2 className="text-3xl font-bold">
          The Biggest Reveals From CCXP 2024
        </h2>
      </div>
      <div>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 p-5 gap-10 container w-11/12 mx-auto mb-16">
          <img
            src="https://assets-prd.ignimgs.com/2024/12/05/infinity-nikki-codes-1733425623710.png"
            alt=""
          />
          <img
            src="https://assets-prd.ignimgs.com/2024/12/07/sonic-shadow-full-circle-moment-1724939790933-1733603395174.png?crop=16%3a9"
            alt=""
          />
          <img
            src="https://assets-prd.ignimgs.com/2024/12/04/in-blogroll-1733339892208.jpg?crop=16%3A9&width=282"
            alt=""
          />
          <img
            src="https://assets-prd.ignimgs.com/2024/12/04/in-blogroll-1733339892208.jpg?crop=16%3A9&width=282"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HighestRatedGame;

// import React, { useEffect, useState } from "react";
// import HighestGame from "./HighestGame";

// const HighestRatedGame = () => {
//   const [highestRatedGames, setHighestRatedGames] = useState([]);

//   useEffect(() => {
//     const fetchHighestRatedGames = async () => {
//       try {
//         const response = await fetch(
//           "https://n-indol-seven.vercel.app/highestRatedGames?limit=6"
//         );
//         const data = await response.json();
//         setHighestRatedGames(data);
//       } catch (error) {
//         console.error("Error fetching highest-rated games:", error);
//       }
//     };

//     fetchHighestRatedGames();
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4 container w-11/12 mx-auto ">
//       {highestRatedGames.map((game) => (
//         <HighestGame highestGame={game} key={game._id}></HighestGame>
//       ))}
//     </div>
//   );
// };

// export default HighestRatedGame;

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import HighestGame from './HighestGame';

// const HighestRatedGame = () => {
//     const data = useLoaderData();

//     // সর্বোচ্চ রেটিং প্রাপ্ত গেম ফিল্টার এবং সাজানো
//     const highestRatedGames = data
//         .sort((a, b) => b.gameRating - a.gameRating) // বড় থেকে ছোট রেটিং অনুযায়ী সাজানো
//         .slice(0, 6); // সর্বোচ্চ ৬টি গেম নির্বাচন করা

//     return (
//         <div className='grid grid-cols-3 gap-4 p-4'>
//             {highestRatedGames.map((game) => (
//                 <HighestGame highestGame={game} key={game._id}></HighestGame>
//             ))}
//         </div>
//     );
// };

// export default HighestRatedGame;
