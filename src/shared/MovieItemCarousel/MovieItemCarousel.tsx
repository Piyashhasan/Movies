"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-circular-progressbar/dist/styles.css";
import Slider from "react-slick";
import { CircularProgressbar } from "react-circular-progressbar";

export default function MovieItemCarousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const percentage = 10;
  return (
    <div>
      <Slider {...settings} className="movie-carousel">
        <div className="">
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>

        <div>
          <div className="relative">
            <img
              className="w-full h-[325px] object-cover object-top rounded-lg"
              src="https://image.tmdb.org/t/p/original/k42Owka8v91trK1qMYwCQCNwJKr.jpg"
              alt="movie-poster"
            />
            <div className="absolute bottom-2 right-2 z-10">
              <div className="flex items-center gap-1">
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Action
                </span>
                <span className="bg-[#DA2F68] text-[12px] text-white py-[1px] px-1 rounded-md">
                  Science Fiction
                </span>
              </div>
            </div>
            <div className="w-[50px] absolute bottom-[-20px] left-1 z-10 circleRating rounded-full text-[20px]">
              <CircularProgressbar value={percentage} text={`${percentage}`} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-[20px] text-white">Canary Black</p>
            <p className="text-[14px] text-[#757E8B]">Oct 10, 2024</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
