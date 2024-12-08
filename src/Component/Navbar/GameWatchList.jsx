import React, { useEffect, useState } from "react";
import axios from "axios";

const GameWatchList = ({ user }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    // Fetch user's watchlist when the component mounts
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getWatchlist?email=${user.email}`);
        setWatchlist(response.data);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, [user]);

  return (
    <div>
      <h1>Your Watchlist</h1>
      {watchlist.length > 0 ? (
        <ul>
          {watchlist.map((game) => (
            <li key={game._id}>
              <h3>{game.gameTitle}</h3>
              <p>Rating: {game.gameRating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default GameWatchList;
