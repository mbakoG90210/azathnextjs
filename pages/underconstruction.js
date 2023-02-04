import React from "react";
import Image from "next/image";
import Link from "next/link";
import Timer from "../components/timer";
import Contact from "../components/Subscribeform";

function underConstruction() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
      </head>
      {/* component */}
      <section className="relative  bg-blueGray-50">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
          {/* hero header section */}
          <Image
            src="/assets/images/hero5.jpg"
            alt="global blockchain connections"
            fill
            className=" blur-sm"
          />
          <div className="card w-144 shadow-xl">
            <Image
              src="/assets/images/landingTemp.png"
              alt="global blockchain connections"
              responsive="true"
              width={1000}
              height={1000}
            />

            <div className="card-body glass">
              <h6 className="mx-auto items-center justify-center text-4xl lg:text-5xl xl:text-6xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center md:text-left">
                We Are <span className="text-yellow-500">Coming</span> Soon
              </h6>

              <Timer />
              <Contact />
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-primary">
                      <i className="fas fa-award" />
                    </div>
                    <h6 className="text-md font-semibold">
                      <span className=" text text-primary-focus">Custom </span>{" "}
                      Software Development
                    </h6>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-xl rounded-full bg-secondary">
                      <i className="fas fa-retweet" />
                    </div>
                    <h6 className="text-md font-semibold">
                      One Stop shop for{" "}
                      <span className=" text text-secondary-focus">
                        {" "}
                        Blockchain{" "}
                      </span>
                      As-A-Service
                    </h6>
                    
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-accent">
                      <i className="fas fa-fingerprint" />
                    </div>
                    <h6 className="text-md font-semibold">
                      Cloud Computing & Enteprise{" "}
                      <span className=" text text-accent-focus">
                        {" "}
                        Digital Transformation
                      </span>
                    </h6>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default underConstruction;
