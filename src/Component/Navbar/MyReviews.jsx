import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // SweetAlert2 Import
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // React Icon Import

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://n-indol-seven.vercel.app/myReviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching reviews:", error));
    }
  }, [user]);

  if (loading) {
    return <div>Loading your reviews...</div>;
  }

  const handleDeleted = (_id) => {
    // Show SweetAlert2 confirmation before deletion
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://n-indol-seven.vercel.app/myReviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Deleted Result ", data);
            // Remove deleted review from the state without reloading
            setReviews(reviews.filter((review) => review._id !== _id));
            Swal.fire("Deleted!", "Your review has been deleted.", "success");
          })
          .catch((error) => console.error("Error deleting review:", error));
      }
    });
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">My Reviews</h2>
        {reviews.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-400 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Game Title</th>
                  <th className="border border-gray-300 px-4 py-2">Rating</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Year</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review._id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {review.gameTitle}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {review.gameRating}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {review.description}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {review.publishingyear}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 flex justify-around space-x-2">
                      {/* Delete button with SweetAlert confirmation */}
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleted(review._id)}
                      >
                        <FaTrashAlt className="mr-2" />
                      </button>

                      <Link to={`/edit/${review._id}`}>
                        <button className="text-blue-500">
                          <FaEdit className="mr-2" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">You haven't_added any reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
