import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero fixed min-h-screen bg-fixed top-0 left-0 -z-10"
        style={{ backgroundImage: `url("../assets/images/hero2.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
      </div>

      <div className="hero-content text-left text-neutral-content z-0">
        <div className="max-w-lg my-20">
          <h1 className="mb-5 text-5xl font-bold">WELCOME!</h1>
          <span className="font-medium">
            THE HOME OF BLOCKCHAIN-AS-A-SERVICE
          </span>
          <p className="my-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-accent bg-opacity-80">
            Get Started <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
