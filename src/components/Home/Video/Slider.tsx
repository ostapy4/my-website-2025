"use client";

import { VideoCard } from "./VideoCard";
import { YoutubeVideo } from "@prisma/client";
import { Motion, Title } from "common";
import { useEffect, useRef, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperT } from "swiper/types";

import { cn } from "utils/cn";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

type SliderProps = {
  data: YoutubeVideo[];
};

export const Slider = ({ data }: SliderProps) => {
  const [showNav, setShowNav] = useState(false);
  const swiperRef = useRef<SwiperT>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const visibleSlides =
        typeof swiperRef.current.params.slidesPerView === "number"
          ? swiperRef.current.params.slidesPerView
          : swiperRef.current.slidesPerViewDynamic();

      setShowNav(visibleSlides >= data.length);
    }
  }, [swiperRef, data]);

  return (
    <>
      <Motion
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className={"mb-8 flex items-end justify-between"}
      >
        <Title size={"6xl"}>Video</Title>
        <div className={cn("flex gap-x-2", { hidden: showNav })}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={
              "group flex items-center justify-center rounded-full border-[0.6px] border-white/50 bg-gradient-to-br from-white/20 from-30% via-white/70 to-white/20 to-70% p-2 shadow-[0px_2px_8px_rgba(69,41,37,.05)] backdrop-blur md:p-3"
            }
          >
            <MdArrowForwardIos
              className={
                "size-5 rotate-180 text-ok_main-600 transition-colors group-hover:text-ok_orange-400 md:size-6"
              }
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={
              "group flex items-center justify-center rounded-full border-[0.6px] border-white/50 bg-gradient-to-br from-white/20 from-30% via-white/70 to-white/20 to-70% p-2 shadow-[0px_2px_8px_rgba(69,41,37,.05)] backdrop-blur md:p-3"
            }
          >
            <MdArrowForwardIos
              className={
                "size-5 text-ok_main-600 transition-colors group-hover:text-ok_orange-400 md:size-6"
              }
            />
          </button>
        </div>
      </Motion>
      <Motion
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Swiper
          loop
          speed={900}
          draggable
          spaceBetween={12}
          slidesPerView={1}
          grabCursor
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={"aspect-video overflow-hidden rounded-2xl"}>
                <VideoCard url={item.url} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion>
    </>
  );
};
