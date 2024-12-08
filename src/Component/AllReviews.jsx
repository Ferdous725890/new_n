import React from "react";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";
import Navbar from "./Navbar/Navbar";
import Footer from "../Pages/Footer";

const AllReviews = () => {
  const allReviewsData = useLoaderData();

  return (
    <div className="container mx-auto w-11/12" >
      <header>
        <Navbar></Navbar>
      </header>
      <h2>All-Reviews</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 ">
        {allReviewsData.map((review) => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AllReviews;
