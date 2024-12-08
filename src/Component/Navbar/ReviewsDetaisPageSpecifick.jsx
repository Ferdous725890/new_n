import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // useParams হুক ব্যবহার করা

const ReviewsDetaisPageSpecifick = () => {
    const { id } = useParams(); // প্যারামিটার থেকে _id নেওয়া
    const [reviewDetails, setReviewDetails] = useState(null);
    console.log(reviewDetails, "Review details page is ");

    useEffect(() => {
        // ফেচিং রিভিউ ডেটা
        fetch(`https://n-indol-seven.vercel.app/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => setReviewDetails(data));
    }, [id]); // id পরিবর্তন হলে আবার ফেচ হবে

    return (
        <div className="p-4">
            {reviewDetails ? (
                <div className="border p-4 rounded shadow">
                    <img src={reviewDetails.coverimage}alt="" />
                    <h2 className="text-xl font-bold text-red-500">title : {reviewDetails.gameTitle}</h2>
                    <p>Rating: {reviewDetails.gameRating}</p>
                    <p>{reviewDetails.description}</p>
                    <p>{reviewDetails.publishingyear}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ReviewsDetaisPageSpecifick;
















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ReviewsDetaisPageSpecifick = () => {
//     const { id } = useParams(); // URL থেকে _id পেতে
//     console.log(id, "amar id");
//     const [reviewDetails, setReviewDetails] = useState(null);

//     useEffect(() => {
//         fetch(`https://n-indol-seven.vercel.app/reviews/${id}`)
//             .then((res) => res.json())
//             .then((data) => setReviewDetails(data));
//     }, [id]);

//     return (
//         <div className="p-4">
//             {reviewDetails ? (
//                 <div className="border p-4 rounded shadow">
//                     <h2 className="text-xl font-bold">{reviewDetails.gameTitle}</h2>
//                     <p>Rating: {reviewDetails.gameRating}</p>
//                     <p>{reviewDetails.description}</p>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default ReviewsDetaisPageSpecifick;
