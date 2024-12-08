import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2"; // SweetAlert2 Import
import { FaEdit } from "react-icons/fa"; // React Icon Import

const Edite = () => {
  const review = useLoaderData();
  console.log(review, "my all reviews");
  const {
    coverimage,
    description,
    gameRating,
    gameTitle,
    publishingyear,
    _id,
  } = review;

  const { user, userLogOut } = useContext(AuthContext);

  const handelUpdateReview = (event) => {
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
      user_email: user.email,
    };

    // Sending data to the backend
    fetch(`https://n-indol-seven.vercel.app/myReviews/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReviewAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // Show SweetAlert on successful update
          Swal.fire({
            title: "Success!",
            text: "Review updated successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset(); // ✅ Clear form after submission
        }
      })
      .catch((error) => console.error("Error submitting review:", error)); // ✅ Improved Error Handling
  };

  return (
    <div>
      <div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Submit Your Review</h2>
          <h2>{user.email}</h2>
          <form onSubmit={handelUpdateReview}>
            <div className="mb-4">
              <label htmlFor="gametitle" className="block font-medium mb-1">
                Game Cover Image
              </label>
              <input
                id="coverimage"
                type="url"
                placeholder="You Cover Image Link"
                defaultValue={coverimage}
                name="coverimage"
                className="input input-bordered w-full max-w-md"
                required
              />
              <label htmlFor="gametitle" className="block font-medium mb-1">
                Game Title
              </label>
              <input
                id="gametitle"
                type="text"
                placeholder="Type here"
                defaultValue={gameTitle}
                name="gametitle"
                className="input input-bordered w-full max-w-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gametitle" className="block font-medium mb-1">
                Publishing year
              </label>
              <input
                id="publishingyear"
                type="date"
                placeholder="Publishing year"
                defaultValue={publishingyear}
                name="year"
                className="input input-bordered w-full max-w-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gamingReating" className="block font-medium mb-1">
                Game Rating
              </label>
              <input
                id="gamingReating"
                type="number"
                placeholder="Rate out of 10"
                defaultValue={gameRating}
                name="gamingReating"
                className="input input-bordered w-full max-w-md"
                min="1"
                max="10"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="desCritption" className="block font-medium mb-1">
                Review Description
              </label>
              <textarea
                id="desCritption"
                placeholder="Write a short description"
                defaultValue={description}
                name="desCritption"
                className="textarea textarea-bordered w-full max-w-md"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FaEdit className="mr-2" />
              Update Rating
            </button>
          </form>
        </div>

        <footer></footer>
      </div>
    </div>
  );
};

export default Edite;
