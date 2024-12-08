import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../../Pages/Footer";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

// react icons
import { FaStar } from "react-icons/fa";

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const gameTitle = form.gametitle.value;
    const gameRating = form.gamingReating.value;
    const description = form.desCritption.value;
    const coverimage = form.coverimage.value;
    const publishingyear = form.publishingyear.value;

    const newReviewAdd = {
      gameTitle,
      gameRating,
      description,
      coverimage,
      publishingyear,
      user_email: user?.email,
    };

    // Sending data to the backend
    fetch("https://n-indol-seven.vercel.app/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review submitted successfully!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset(); // Clear form after submission
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border-gray-200 px-6 sm:px-8 py-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-green-500">Submit Your Review</h2>
            <p className="text-sm text-gray-500 mt-2">{user?.email}</p>
          </div>
          <form onSubmit={handleReviewSubmit}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="relative block">
                  <input
                    type="text"
                    name="gametitle"
                    id="gametitle"
                    className="peer border-gray-300 border rounded-md px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none placeholder-transparent"
                  />
                  <span className="absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 transition-all text-gray-500">
                    Game Title
                  </span>
                </label>
              </div>
              <div>
                <label className="relative block">
                  <input
                    type="url"
                    name="coverimage"
                    id="coverimage"
                    className="peer border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
                  />
                  <span className="absolute top-3 left-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:bg-white peer-focus:px-1 transition-all text-gray-500">
                    Game Cover Image (URL)
                  </span>
                </label>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Publishing_Year</label>
                <input
                  type="date"
                  name="publishingyear"
                  id="publishingyear"
                  className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Game Rating (Out of 5)</label>
                <input
                  type="number"
                  name="gamingReating"
                  id="gamingReating"
                  placeholder="Game Rating (Out of 5)"
                  className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none"
                  min="1"
                  max="5"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Review Description</label>
              <textarea
                name="desCritption"
                id="desCritption"
                placeholder="Write a short description..."
                className="border-gray-300 border rounded-lg px-4 py-3 w-full focus:ring focus:ring-blue-300 outline-none resize-none h-32"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <Footer />
      </footer>
    </div>
  );
};

export default AddReviews;
