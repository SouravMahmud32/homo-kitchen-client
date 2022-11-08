import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://assets.zeezest.com/blogs/PROD_Bengali-Food_1646032500793.jpg")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
              Homo kitchen Serves all kind of Bengali food. <br />
              Here you can order through online. And Our delivery man deliver the
              food at your door step.
            </p>
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
