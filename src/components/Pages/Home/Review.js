import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import user from '../../../assets/profile.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { useQuery } from 'react-query';
import axios from 'axios';
import ScreenSize from '../../../hooks/ScreenSize';

export default function Review() {
  const { data, isLoading, isError, error } = useQuery('reviews', () =>
    axios.get('https://serene-bayou-83359.herokuapp.com/review')
  );

  const { minWidth } = ScreenSize();

  if (isLoading) {
    return (
      <p className="text-lg font-semibold text-center mt-24">Loading...</p>
    );
  }

  if (isError) {
    return <p className="text-lg text-center">{error.message}</p>;
  }

  let slide = 3;

  if (minWidth <= 1200) {
    slide = 2;
  }
  if (minWidth <= 600) {
    slide = 1;
  }

  const review = data?.data;
  const reverseReview = [...review].reverse();

  return (
    <div
      className="pb-24 w-[300px] md:w-[900px] lg:w-[1350px] mx-auto px-3 lg:px-8"
      id="review"
    >
      <h2 className="text-xl lg:text-2xl uppercase font-semibold text-primary text-center pb-6">
        Happy Clients says
      </h2>
      <Swiper
        slidesPerView={slide}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {reverseReview.map((r) => (
          <SwiperSlide key={r._id} className="mb-14">
            <div className="flex flex-col items-center shadow-lg rounded-lg p-6 text-base h-[320px] lg:h-[280px]">
              <div className="avatar mb-2">
                <div className="w-16 rounded-full">
                  <img src={r.img || user} alt="" />
                </div>
              </div>
              <p className="font-semibold mb-2">{r.name}</p>
              <div className="rating rating-sm mb-3">
                <input
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    r.rating >= 1 ? 'bg-orange-400' : 'bg-gray-400'
                  }`}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    r.rating >= 2 ? ' bg-orange-400' : 'bg-gray-400'
                  }`}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    r.rating >= 3 ? 'bg-orange-400' : 'bg-gray-400'
                  }`}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    r.rating >= 4 ? 'bg-orange-400' : 'bg-gray-400'
                  }`}
                />
                <input
                  type="radio"
                  name="rating-2"
                  className={`mask mask-star-2 ${
                    r.rating >= 5 ? 'bg-orange-400' : 'bg-gray-400'
                  }`}
                />
              </div>
              <p>{r.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
