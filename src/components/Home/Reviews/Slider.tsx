"use client";

import { ReviewItem } from "./ReviewItem";
import { Review } from "@prisma/client";
import { Motion, Title } from "common";
import { useEffect, useRef, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperT } from "swiper/types";

import { GradientButton } from "common/UI";

import { cn } from "utils/cn";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

type SliderProps = {
  data: Review[];
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
        <Title size={"6xl"}>Reviews</Title>
        <div className={cn("flex gap-x-2", { hidden: showNav })}>
          <GradientButton onClick={() => swiperRef.current?.slidePrev()}>
            <MdArrowForwardIos
              className={
                "size-5 rotate-180 text-ok_main-600 transition-colors group-hover:text-ok_orange-400 md:size-6"
              }
            />
          </GradientButton>
          <GradientButton onClick={() => swiperRef.current?.slideNext()}>
            <MdArrowForwardIos
              className={
                "size-5 text-ok_main-600 transition-colors group-hover:text-ok_orange-400 md:size-6"
              }
            />
          </GradientButton>
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
              <ReviewItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Motion>
    </>
  );
};
