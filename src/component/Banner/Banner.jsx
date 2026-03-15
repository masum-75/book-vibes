import React from "react";
import BannerImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="hero bg-white rounded-2xl p-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* image */}
        <img src={BannerImg} className="max-w-sm rounded-lg" alt="Hero" />

        {/* text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-success mt-6 bg-[#23BE0A] text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
