// import React, { useContext, useState } from "react";
// import Swal from "sweetalert2"; // SweetAlert2 ইম্পোর্ট
// import { AuthContext } from "./AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import { IoCheckmarkDoneCircleSharp, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import { MdErrorOutline } from "react-icons/md";

// const Login = () => {
//   const { userLogIn, googleLogIn } = useContext(AuthContext);
//   const navigate = useNavigate();
  
//   const [isEyeOpen, setIsEyeOpen] = useState(false);
//   const [StrongPassword, setStrongPassword] = useState(" ");
//   const [signal, setSignal] = useState(" ");

//   // Google Login Button Handler
//   const hendleGooglebtn = () => {
//     googleLogIn()
//       .then((result) => {
//         Swal.fire({
//           title: "Login Successful!",
//           text: "Welcome back to our platform.",
//           icon: "success",
//           confirmButtonText: "Proceed",
//         }).then(() => {
//           navigate("/"); // Redirect to home page
//         });
//       })
//       .catch((error) => {
//         Swal.fire({
//           title: "Login Failed!",
//           text: error.message,
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   // Handle Login
//   const handleLogIn = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     const loginuser = { email, password };

//     userLogIn(email, password)
//       .then((result) => {
//         console.log(result.user, "user creating ");
//         Swal.fire({
//           title: "Login Successful!",
//           text: "You are now logged in.",
//           icon: "success",
//           confirmButtonText: "Continue",
//         }).then(() => {
//           navigate("/"); // Redirect to home page
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           title: "Login Failed!",
//           text: error.message,
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       });

//     fetch("https://n-indol-seven.vercel.app/users", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(loginuser),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data, "user data");
//       });
//   };

//   // Password Strength Checker
//   const handleStrongPasswordChecker = (e) => {
//     const password = e.target.value;
//     setStrongPassword(password);

//     const hasUpperCase = /[A-Z]/.test(password);
//     const hasLowerCase = /[a-z]/.test(password);
//     const hasNumber = /[0-9]/.test(password);
//     const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

//     if (!hasLowerCase) {
//       setSignal("lowercase-error");
//     } else if (!hasUpperCase) {
//       setSignal("uppercase-error");
//     } else if (!hasNumber) {
//       setSignal("number-error");
//     } else if (!hasSymbol) {
//       setSignal("symbol-error");
//     } else if (password.length < 8) {
//       setSignal("length-error");
//     } else {
//       setSignal("strong");
//     }
//   };

//   const getMessage = () => {
//     switch (signal) {
//       case "length-error":
//         return "Password must be at least 8 characters long.";
//       case "uppercase-error":
//         return "Password must contain at least one uppercase letter.";
//       case "lowercase-error":
//         return "Password must contain at least one lowercase letter.";
//       case "number-error":
//         return "Password must contain at least one number.";
//       case "symbol-error":
//         return "Password must contain at least one special character.";
//       default:
//         return "Wow! Very strong password.";
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div className="hero bg-gay-100 min-h-screen">
//           <div className="hero-content flex-col w-[800px]">
//             <div className="card bg-base-100  shrink-0 shadow-2xl w-full max-w-[700px] p-10 py-10 ">
//             <div className="text-center lg:text-left">
//               <h1 className="text-3xl text-center font-bold">Login now!</h1>
//             </div>
//               <form onSubmit={handleLogIn} className="card-body">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="email"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
                
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <div className="w-full relative">
//                     <input
//                       type={isEyeOpen ? "text" : "password"}
//                       name="password"
//                       onChange={handleStrongPasswordChecker}
//                       placeholder="Password"
//                       className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
//                       required
//                     />
//                     {isEyeOpen ? (
//                       <IoEyeOutline
//                         className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
//                         onClick={() => setIsEyeOpen(false)}
//                       />
//                     ) : (
//                       <IoEyeOffOutline
//                         className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
//                         onClick={() => setIsEyeOpen(true)}
//                       />
//                     )}
//                   </div>
//                 </div>
//                 <div className="form-control mt-6">
//                   <button className="btn btn-primary">Login</button>
//                 </div>
//                 <p className="text-center py-4">
//                 Don't have an account? <Link className="text-blue-500" to="/rejister">Register</Link>
//                 </p>
//                 <button className="btn" type="button" onClick={hendleGooglebtn}>
//                   Google Log In
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;















// // import React, { useContext } from "react";
// // import { AuthContext } from "./AuthProvider";
// // import { Link } from "react-router-dom";
// // import Navbar from "./Navbar";
// // import { useNavigate } from "react-router-dom";
// // const Login = () => {
// //   const { userLogIn, googleLogIn } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const hendleGooglebtn = () => {
// //     googleLogIn()
// //       .then((result) => {
// //         console.log("Google Login Successful:", result.user);
// //         navigate("/"); // সফল হলে হোমপেজে রিডিরেক্ট করবে
// //       })
// //       .catch((error) => {
// //         console.error("Google Login Error:", error);
// //       });
// //   };

// //   const handleLogIn = (event) => {
// //     event.preventDefault();
// //     const form = event.target;
// //     const email = form.email.value;
// //     const password = form.password.value;
// //     const loginuser = { email, password };
// //     console.log(email, password);
// //     console.log(loginuser);
// //     userLogIn(email, password)
// //       .then((result) => {
// //         console.log(result.user, "user creating ");
// //         navigate("/");
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //     fetch("https://n-indol-seven.vercel.app/users", {
// //       method: "POST",
// //       headers: {
// //         "content-type": "application/json",
// //       },
// //       body: JSON.stringify(loginuser),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data, "user data");
// //       });
// //   };
// //   return (
// //     <div>
// //       <Navbar></Navbar>
// //       <div>
// //         <div className="hero bg-base-200 min-h-screen">
// //           <div className="hero-content flex-col">
// //             <div className="text-center lg:text-left">
// //               <h1 className="text-5xl font-bold">Login now!</h1>
// //             </div>
// //             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
// //               <form onSubmit={handleLogIn} className="card-body">
// //                 <div className="form-control">
// //                   <label className="label">
// //                     <span className="label-text">Email</span>
// //                   </label>
// //                   <input
// //                     name="email"
// //                     type="email"
// //                     placeholder="email"
// //                     className="input input-bordered"
// //                     required
// //                   />
// //                 </div>
// //                 <div className="form-control">
// //                   <label className="label">
// //                     <span className="label-text">Password</span>
// //                   </label>
// //                   <input
// //                     name="password"
// //                     type="password"
// //                     placeholder="password"
// //                     className="input input-bordered"
// //                     required
// //                   />
// //                   <label className="label">
// //                     <a href="#" className="label-text-alt link link-hover">
// //                       Forgot password?
// //                     </a>
// //                   </label>
// //                 </div>
// //                 <div className="form-control mt-6">
// //                   <button className="btn btn-primary">Login</button>
// //                 </div>

// //                 <p>
// //                   Creating Account
// //                   <Link to="/rejister">Register</Link>
// //                 </p>

// //                 <div>
// //                   <button
// //                     className="btn"
// //                     type="button"
// //                     onClick={hendleGooglebtn}
// //                   >
// //                     Google Log In
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  IoCheckmarkDoneCircleSharp,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

const Login = () => {
  const { userLogIn, googleLogIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [strongPassword, setStrongPassword] = useState(" ");
  const [signal, setSignal] = useState(" ");

  // Google Login Button Handler
  const hendleGooglebtn = () => {
    Swal.fire({
      title: "Logging In...",
      text: "Please wait.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    googleLogIn()
      .then((result) => {
        Swal.close();
        Swal.fire({
          title: "Login Successful!",
          text: `Welcome, ${result.user.displayName || "User"}!`,
          icon: "success",
          confirmButtonText: "Proceed",
        }).then(() => navigate("/"));
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  // Handle Login
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: "You are now logged in.",
          icon: "success",
          confirmButtonText: "Continue",
        }).then(() => navigate("/"));
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  // Password Strength Checker
  const handleStrongPasswordChecker = (e) => {
    const password = e.target.value;
    setStrongPassword(password);

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasLowerCase) {
      setSignal("lowercase-error");
    } else if (!hasUpperCase) {
      setSignal("uppercase-error");
    } else if (!hasNumber) {
      setSignal("number-error");
    } else if (!hasSymbol) {
      setSignal("symbol-error");
    } else if (password.length < 8) {
      setSignal("length-error");
    } else {
      setSignal("strong");
    }
  };

  const getMessage = () => {
    switch (signal) {
      case "length-error":
        return "Password must be at least 8 characters long.";
      case "uppercase-error":
        return "Password must contain at least one uppercase letter.";
      case "lowercase-error":
        return "Password must contain at least one lowercase letter.";
      case "number-error":
        return "Password must contain at least one number.";
      case "symbol-error":
        return "Password must contain at least one special character.";
      default:
        return "Wow! Very strong password.";
    }
  };

  // Redirect if user is already logged in
  React.useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <div className="hero bg-gray-100 min-h-screen">
        <div className="hero-content flex-col w-[800px]">
          <div className="card bg-base-100 shrink-0 shadow-2xl w-full max-w-[700px] p-10 py-10">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl text-center font-bold">Login now!</h1>
            </div>
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="w-full relative">
                  <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    onChange={handleStrongPasswordChecker}
                    placeholder="Password"
                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
                    required
                  />
                  {isEyeOpen ? (
                    <IoEyeOutline
                      className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                      onClick={() => setIsEyeOpen(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                      onClick={() => setIsEyeOpen(true)}
                    />
                  )}
                </div>
                <div className="text-sm mt-2">
                  <p
                    className={`${
                      signal === "strong"
                        ? "text-green-500 flex items-center gap-1"
                        : "text-red-500 flex items-center gap-1"
                    }`}
                  >
                    {signal === "strong" ? (
                      <IoCheckmarkDoneCircleSharp />
                    ) : (
                      <MdErrorOutline />
                    )}
                    {getMessage()}
                  </p>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center py-4">
                Don't have an account?{" "}
                <Link className="text-blue-500" to="/rejister">
                  Register
                </Link>
              </p>
              <button className="btn" type="button" onClick={hendleGooglebtn}>
                Google LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
