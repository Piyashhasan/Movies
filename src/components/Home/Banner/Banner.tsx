import React from "react";
import SearchInput from "../SearchInput/SearchInput";

export default function Banner() {
  return (
    <div className="!mt-[-75px] h-[700px] relative bg-[url('https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg')] bg-cover bg-no-repeat object-center">
      {/* --- Overlay for dark shade start --- */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* --- Overlay for dark shade end --- */}

      {/* --- main content start --- */}
      <div className="wrapper relative z-10">
        <div className="pt-[170px] pb-20 px-4 xl:px-0">
          <div>
            <h1 className="text-[90px] font-bold leading-[90px] text-white text-center">
              Welcome.
            </h1>
            <h3 className="text-[24px] leading-6 font-semibold text-white text-center mt-5">
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          {/* --- search input start --- */}
          <div>
            <SearchInput />
          </div>
          {/* --- search input end--- */}
        </div>
      </div>
      {/* --- main content end --- */}

      {/* --- bottom dark shade start --- */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-[linear-gradient(180deg,_rgba(4,_21,_45,_0)_0%,_#04152d_79.17%)]"></div>
      {/* --- bottom dark shade end --- */}
    </div>
  );
}
