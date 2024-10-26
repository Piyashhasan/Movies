import MovieItemCarousel from "@/shared/MovieItemCarousel/MovieItemCarousel";
import React from "react";

export default function TopRated() {
  return (
    <div className="wrapper py-10 px-4 xl:px-0">
      <h2 className="text-[24px] text-white leading-6">Top Rated</h2>
      {/* --- trending movie carousel start --- */}
      <div className="my-5">
        <MovieItemCarousel />
      </div>
      {/* --- trending movie carousel end --- */}
    </div>
  );
}
