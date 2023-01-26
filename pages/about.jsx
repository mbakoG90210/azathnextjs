import React from "react";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import about1 from "../public/assets/images/about1.jpg";
import { awrapperBC, awrapperCloud, awrapperSoftwareDev, awrapperDigiTransform } from "../datastore/aboutWrapper";

const about = () => {
  return (
    <>
      <Head />
      <Navbar />
      <div
        className="hero fixed min-h-screen bg-fixed top-0 left-0 -z-10 "
        style={{ backgroundImage: `url("../assets/images/hero1.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content z-0 ">
          <div className="max-w-lg md:max-w-xl my-5">
            <h1 className="mb-5 text-5xl font-bold">ABOUT US</h1>
          </div>
        </div>
      </div>
      <div className="card lg:card-side glass  text-white shadow-xl mt-144 rounded-none">
        <Image className="m-auto" src={about1} width={400}></Image>
        <div className="card-body hover:bg-accent  mx-auto my-5">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
        <div className="card w-96 bg-primary hover:bg-accent text-primary-content mx-auto my-5 rounded-none">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-primary hover:bg-accent text-primary-content mx-auto my-5 rounded-none">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="../assets/images/aboutBC.jpg" className="w-fit h-96 z-5" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <section className="z-10 h-40vh bg-cover bg-no-repeat bg-center text-accent-focus">
            <div className="">
              {awrapperBC.map((val) => {
                return (
                  <div className="">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h1 className="text-5xl">{val.data}</h1>
                      <h3 className="text-xl font-medium">{val.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="../assets/images/aboutCloud.jpg" className="w-fit h-96 z-5" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <section className="z-10 h-40vh bg-cover bg-no-repeat bg-center text-accent-focus">
            <div className="">
              {awrapperCloud.map((val) => {
                return (
                  <div className="">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h1>{val.data}</h1>
                      <h3>{val.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="../assets/images/aboutSfwrdev.jpg" className="w-fit h-96 z-5" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <section className="z-10 h-40vh bg-cover bg-no-repeat bg-center text-accent-focus">
            <div className="container grid">
              {awrapperSoftwareDev.map((val) => {
                return (
                  <div className="">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h1>{val.data}</h1>
                      <h3>{val.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="../assets/images/man-using-digital-tablet.jpg" className="z-5 w-fit h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <section className="z-10 h-40vh bg-cover bg-no-repeat bg-center text-accent-focus">
            <div className="container grid">
              {awrapperDigiTransform.map((val) => {
                return (
                  <div className="">
                    <div>
                      <img src={val.cover} alt="" />
                    </div>
                    <div>
                      <h1>{val.data}</h1>
                      <h3>{val.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default about;
