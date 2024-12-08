import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";
import axios from "axios";

const HighestGame = ({ highestGame, user }) => {
  const { _id, gameTitle, gameRating, coverimage } = highestGame;
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState([]);
  const [currentRating, setCurrentRating] = useState(gameRating);

  const handleAddToWatchlist = async () => {
    try {
      // Send the game and user details to the backend
      const response = await axios.post("http://localhost:5000/addToWatchlist", {
        userEmail: user.email,
        game: highestGame,
      });

      // Update the local state (watchlist)
      setWatchlist((prevWatchlist) => [...prevWatchlist, highestGame]);
      alert("Game added to watchlist!");
    } catch (error) {
      console.error("Error adding game to watchlist:", error);
    }
  };

  const handleDetails = () => {
    navigate(`/review/${_id}`);
  };

  const handleRatingChange = (newRating) => {
    setCurrentRating(newRating); // Update the local rating state

    // Optionally, update the backend with the new rating
    axios.post("http://localhost:5000/updateRating", {
      gameId: _id,
      newRating,
    })
    .catch((error) => {
      console.error("Error updating rating:", error);
    });
  };

  return (
    <div>
      <div className="w-full sm:w-[80%] lg:w-[90%] shadow-md h-[500px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">
        <div className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
          <FaRegHeart className="text-[1.1rem] text-gray-600" />
          <button onClick={handleAddToWatchlist} className="btn">Add to Watchlist</button>
          <div className="flex items-center gap-[5px]">
            <MdOutlineTimer className="text-orange-700 text-[1.1rem]" />
          </div>
        </div>

        <img
          src={coverimage}
          alt="game cover"
          className="w-full h-[70%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"
        />

        <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
          <p className="text-[1rem] uppercase text-gray-600">Game Title: {gameTitle}</p>
          <div className="text-[0.9rem] text-gray-600 mt-2">
            <p>Rating: {currentRating}</p>

            {/* Display rating change functionality */}
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`${
                    star <= currentRating ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleDetails} className="relative inline-flex items-center border border-gray-300 hover:border-none justify-center px-6 py-1 overflow-hidden font-mono tracking-tighter text-gray-500 rounded-lg group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
            <span className="relative text-text group-hover:text-white">Explore Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighestGame;
