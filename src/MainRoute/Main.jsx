
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import AllReviews from "../Component/AllReviews";
import MyReviews from "../Component/Navbar/MyReviews";
import GameWatchList from "../Component/Navbar/GameWatchList";
import AddReviews from "../Component/Navbar/AddReviews";
import Rejister from "../Component/Navbar/Register";
import Login from "../Component/Navbar/Login";
import HighestRatedGame from "../Component/Navbar/HighestRatedGame";
import ReviewsDetaisPageSpecifick from "../Component/Navbar/ReviewsDetaisPageSpecifick";
import Edite from "../Component/Navbar/Edite";
import ProtectedRoute from "../Component/Navbar/PrivateRoute";
import CarouselSlider from "../Component/Navbar/Test";
import Page404 from "../Component/Navbar/errorPage";
import Rating from "../Component/Navbar/testsone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
   
    children: [
      {
        path: "/",
        element: <HighestRatedGame></HighestRatedGame>,
        loader: () => fetch('https://n-indol-seven.vercel.app/reviews')
      },
      // {
      //   path:"/",
      //   element: <CarouselSlider></CarouselSlider>
      // }
    ]
  },
  {
    path: "/allreciews",
    element: <AllReviews></AllReviews>,
    loader: () => fetch("https://n-indol-seven.vercel.app/reviews")
  },
  {
    path: "/addReviews",
    element: <ProtectedRoute>

      <AddReviews></AddReviews>
    </ProtectedRoute>
    
  },
  {
    path: "/myReviews",
    element: <ProtectedRoute>

      <MyReviews></MyReviews>
    </ProtectedRoute>
    
  },
  {
    path: "/gameWatchList",
    element:<ProtectedRoute>
      <GameWatchList></GameWatchList>
    </ProtectedRoute>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/rejister",
    element: <Rejister></Rejister>
  },
  {
    path: "/review/:id", // এখানে id প্যারামিটার থাকবে
    element: <ReviewsDetaisPageSpecifick></ReviewsDetaisPageSpecifick>, 
  },
  
  {  path:"edit/:id",
    element:<Edite></Edite>,
    loader: ({params}) => fetch(`https://n-indol-seven.vercel.app/reviews/${params.id}`)

  },
  {
    path:"*",
    element:<Page404></Page404>
  },
  // {
  //   path:"reating",
  //   element:<Rating></Rating>
  // }
 
 
]);

export default router;
































// import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home";
// import AllReviews from "../Component/AllReviews";
// import MyReviews from "../Component/Navbar/MyReviews";
// import GameWatchList from "../Component/Navbar/GameWatchList";
// import AddReviews from "../Component/Navbar/AddReviews";
// import Rejister from "../Component/Navbar/Register";
// import Login from "../Component/Navbar/Login";
// import HighestRatedGame from "../Component/Navbar/HighestRatedGame";
// import ReviewsDetaisPageSpecifick from "../Component/Navbar/ReviewsDetaisPageSpecifick";
// import Edite from "../Component/Navbar/Edite";
// import ProtectedRoute from "../Component/Navbar/PrivateRoute";
// import CarouselSlider from "../Component/Navbar/Test";
// import Page404 from "../Component/Navbar/errorPage";
// import Rating from "../Component/Navbar/testsone";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
   
//     children: [
//       {
//         path: "/",
//         element: <HighestRatedGame></HighestRatedGame>,
//         loader: () => fetch('https://n-indol-seven.vercel.app/reviews')
//       },
//       // {
//       //   path:"/",
//       //   element: <CarouselSlider></CarouselSlider>
//       // }
//     ]
//   },
//   {
//     path: "/allreciews",
//     element: <AllReviews></AllReviews>,
//     loader: () => fetch("https://n-indol-seven.vercel.app/reviews")
//   },
//   {
//     path: "/addReviews",
//     element: <ProtectedRoute>

//       <AddReviews></AddReviews>
//     </ProtectedRoute>
    
//   },
//   {
//     path: "/myReviews",
//     element: <ProtectedRoute>

//       <MyReviews></MyReviews>
//     </ProtectedRoute>
    
//   },
//   {
//     path: "/gameWatchList",
//     element:<ProtectedRoute>
//       <GameWatchList></GameWatchList>
//     </ProtectedRoute>
//   },
//   {
//     path: "/login",
//     element: <Login></Login>
//   },
//   {
//     path: "/rejister",
//     element: <Rejister></Rejister>
//   },
//   {
//     path: "/review/:id", // এখানে id প্যারামিটার থাকবে
//     element: <ReviewsDetaisPageSpecifick></ReviewsDetaisPageSpecifick>, 
//   },
//   {
//     path:"edit/:id",
//     element:<Edite></Edite>,
//     loader: ({params}) => fetch(`https://n-indol-seven.vercel.app/reviews/${params.id}`)

//   },
//   {
//     path:"*",
//     element:<Page404></Page404>
//   },
//   // {
//   //   path:"reating",
//   //   element:<Rating></Rating>
//   // }
 
 
// ]);

// export default router;
