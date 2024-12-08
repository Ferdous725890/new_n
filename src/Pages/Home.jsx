import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CarouselSlider from "../Component/Navbar/Test";
import CenterMode from "../Component/Navbar/testone";
// import CarouselSlider from "../Component/Navbar/Test";
// import HighestGame from "../Component/Navbar/HighestGame";
// import CenterMode from "../Component/Navbar/Test";

//jfkjklsa

const Home = () => {
  return (
    <div>
      <header className="container mx-auto w-11/12 ">
        <div className="mb-10">
        <Navbar></Navbar>
        </div>

        <CenterMode></CenterMode>
        <div className="mb-20 mt-20">
          <img
            className=" w-full h-[500px]"
            src="https://assets.mspimages.in/gear/wp-content/uploads/2022/12/FreeGames_PC.png"
            alt=""
          />
        </div>
      </header>
      <main className="">
        <Outlet></Outlet>
     
      </main>

      <footer className="">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
