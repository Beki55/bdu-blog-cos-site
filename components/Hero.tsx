"use client"; // important for Next.js 13+ app directory

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/bit_door_8.jpg",
  "/bit_door_8.jpg",
  "/bit_door_8.jpg",
  "/bit_door_8.jpg",
];

export default function HeroSwiper() {
  return (
    <section className="relative rounded overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="min-h-screen"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="min-h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute left-8 bottom-8 right-8 md:left-16 md:bottom-16 md:right-16 text-white">
              <span className="text-sm uppercase tracking-wider text-white/80">
                Featured
              </span>
              <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl font-extrabold leading-tight">
                Breaking Into Product Design: Advice from Untitled Founder
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/90">
                Let’s get one thing out of the way: you don’t need a fancy degree
                to get into Product Design. We sat down with Frankie Sullivan.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
