import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import {
  IoCheckmarkDoneCircleSharp,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

const Register = () => {
  const { userRejister } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signal, setSignal] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordValidation = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);

    const hasUpperCase = /[A-Z]/.test(passwordInput);
    const hasLowerCase = /[a-z]/.test(passwordInput);
    const hasNumber = /[0-9]/.test(passwordInput);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput);

    if (!hasLowerCase) {
      setSignal("lowercase-error");
    } else if (!hasUpperCase) {
      setSignal("uppercase-error");
    } else if (!hasNumber) {
      setSignal("number-error");
    } else if (!hasSymbol) {
      setSignal("symbol-error");
    } else if (passwordInput.length < 8) {
      setSignal("length-error");
    } else {
      setSignal("strong");
    }
  };

  const handleConfirmPassword = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
    setPasswordMatch(password === confirmPasswordInput);
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

  const handelSubmite = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;

    if (signal !== "strong" || !passwordMatch) {
      Swal.fire(
        "Error",
        "Please ensure the password is strong and matches the confirm password field.",
        "error"
      );
      return;
    }

    userRejister(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL: photo })
          .then(() => {
            Swal.fire(
              "Registration Successful!",
              "Welcome to our platform!",
              "success"
            );
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        Swal.fire("Error", error.message, "error");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col max-w-[800px] w-full">
          <div className="card bg-base-100 w-full  p-5 py-16 shrink-0 shadow-2xl">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl text-center font-bold">Register now!</h1>
          </div>
            <form onSubmit={handelSubmite} className="card-body">
              <div className="grid grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="url"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

             <div className="grid grid-cols-2 gap-5">
             <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handlePasswordValidation}
                    className="input input-bordered w-full"
                    required
                  />
                  {isEyeOpen ? (
                    <IoEyeOutline
                      className="absolute top-3 right-3 text-2xl cursor-pointer"
                      onClick={() => setIsEyeOpen(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute top-3 right-3 text-2xl cursor-pointer"
                      onClick={() => setIsEyeOpen(true)}
                    />
                  )}
                </div>
                {password && (
                  <p
                    className={`${
                      signal === "strong" ? "text-green-600" : "text-red-500"
                    } text-sm mt-1`}
                  >
                    {signal === "strong" ? (
                      <span className="flex items-center gap-1">
                        <IoCheckmarkDoneCircleSharp /> {getMessage()}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <MdErrorOutline /> {getMessage()}
                      </span>
                    )}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={isEyeOpen ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  onChange={handleConfirmPassword}
                  required
                />
                {!passwordMatch && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match.
                  </p>
                )}
              </div>
             </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;











// import { useContext } from "react";
// import { AuthContext } from "./AuthProvider";
// import Navbar from "./Navbar";
// import { Link,  } from "react-router-dom";
// import { updateProfile } from "firebase/auth";


// const Register = () => {
//   const { userRejister } = useContext(AuthContext);

//   const handelSubmite = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     const registerUser = { name, photo, email, password };
//     console.log(registerUser);

//     // Register user
//     userRejister(email, password)
//       .then((result) => {
//         const user = result.user;

//         // Update profile with name and photo URL
//         updateProfile(user, {
//           displayName: name,
//           photoURL: photo,
//         })
//           .then(() => {
//             console.log("Profile updated successfully!");
//             console.log("Updated User:", user);
         
//           })
//           .catch((error) => {
//             console.error("Error updating profile:", error);
//           });

         

//       })
//       .catch((error) => {
//         console.error("Error registering user:", error);
//       });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Register now!</h1>
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             <form onSubmit={handelSubmite} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="Enter Your Name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   name="photo"
//                   type="url"
//                   placeholder="Photo URL"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>

//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Register</button>
//               </div>
//               <p>
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-blue-500">
//                   Login here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;












// // import { useContext } from "react";
// // import { AuthContext } from "./AuthProvider";
// // import Navbar from "./Navbar";
// // import { Link } from "react-router-dom";

// // const Register = () => {
// //   const { userRejister } = useContext(AuthContext);
// //   const handelSubmite = (event) => {
// //     event.preventDefault();
// //     const form = event.target;
// //     const name = form.name.value;
// //     const photo = form.photo.value;
// //     const email = form.email.value;
// //     const password = form.password.value;
// //     const registerUser = { name, photo, email, password };

// //     console.log(registerUser);
// //     userRejister(email, password)
// //       .then((result) => {
// //         console.log(result.user);
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   };
// //   return (
// //     <div>
// //       <Navbar></Navbar>
// //       <div className="hero bg-base-200 min-h-screen">
// //         <div className="hero-content flex-col">
// //           <div className="text-center lg:text-left">
// //             <h1 className="text-5xl font-bold">Login now!</h1>
// //           </div>
// //           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
// //             <form onSubmit={handelSubmite} className="card-body">
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Name</span>
// //                 </label>
// //                 <input
// //                   name="name"
// //                   type="text"
// //                   placeholder="Enter Your Name"
// //                   className="input input-bordered"
// //                   required
// //                 />
// //               </div>

// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Photo URL</span>
// //                 </label>
// //                 <input
// //                   name="photo"
// //                   type="url"
// //                   placeholder="Photo_URL"
// //                   className="input input-bordered"
// //                   required
// //                 />
// //               </div>

// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Email</span>
// //                 </label>
// //                 <input
// //                   name="email"
// //                   type="email"
// //                   placeholder="email"
// //                   className="input input-bordered"
// //                   required
// //                 />
// //               </div>
// //               <div className="form-control">
// //                 <label className="label">
// //                   <span className="label-text">Password</span>
// //                 </label>
// //                 <input
// //                   name="password"
// //                   type="password"
// //                   placeholder="password"
// //                   className="input input-bordered"
// //                   required
// //                 />
// //                 <label className="label">
// //                   <a href="#" className="label-text-alt link link-hover">
// //                     Forgot password?
// //                   </a>
// //                 </label>
// //               </div>
// //               <div className="form-control mt-6">
// //                 <button className="btn btn-primary">Login</button>
// //               </div>

// //               <p>
// //                 Already Have An Account
// //                 <Link to="/login">Login here</Link>
// //               </p>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
