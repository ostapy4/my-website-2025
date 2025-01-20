"use client";

import { TrackDetails, useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import AccordionIMG from "resources/accordion.png";

import IMG1 from "./static/photo-1.jpg";
import IMG2 from "./static/photo-2.jpg";
import IMG3 from "./static/photo-3.jpeg";
import IMG4 from "./static/photo-4.jpeg";
import IMG5 from "./static/photo-5.jpeg";
import IMG6 from "./static/photo-6.jpeg";
import IMG7 from "./static/photo-7.jpg";
import IMG8 from "./static/photo-8.jpg";

import "keen-slider/keen-slider.min.css";

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8];

export const Slider = () => {
  const [details, setDetails] = useState<TrackDetails | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    defaultAnimation: { duration: 1500 },
    dragSpeed: 0.1,
    detailsChanged(s) {
      setDetails(s.track.details);
    },
    initial: 2,
  });

  function scaleStyle(idx: number) {
    if (!details) return {};
    const slide = details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <div
      ref={sliderRef}
      className={"keen-slider relative aspect-[3/4] rounded-3xl bg-ok_main-100/50 sm:aspect-[5/4] md:aspect-[16/9] lg:rounded-[42px]"}
    >
      <Image
        src={AccordionIMG}
        alt={"Accordion"}
        fill
        className={"z-0 object-contain p-8 opacity-10 saturate-0"}
      />
      {images.map((src, idx) => (
        <div key={idx} className={"keen-slider__slide z-10 flex"}>
          <div style={scaleStyle(idx)} className={"relative w-full"}>
            <Image
              src={src}
              alt={"Photo"}
              fill
              className={"object-cover saturate-[.8] sm:object-contain"}
            />
          </div>
        </div>
      ))}
      <div
        className={
          "pointer-events-none absolute inset-0 z-50 rounded-3xl shadow-[inset_0_0_60px_rgb(69,41,37,.3)] lg:rounded-[42px]"
        }
      />
      <button
        onClick={() => instanceRef.current?.prev()}
        className={
          "group absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-4 transform items-center justify-center rounded-full bg-white/70 p-3 shadow-[-2px_2px_5px_rgb(69,41,37,.05)] backdrop-blur lg:flex"
        }
      >
        <MdArrowForwardIos
          className={
            "size-8 rotate-180 text-ok_main-600 transition-colors group-hover:text-ok_orange-400"
          }
        />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className={
          "group absolute right-0 top-1/2 z-10 hidden -translate-x-4 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/70 p-3 shadow-[2px_2px_5px_rgb(69,41,37,.05)] backdrop-blur lg:flex"
        }
      >
        <MdArrowForwardIos
          className={
            "size-8 text-ok_main-600 transition-colors group-hover:text-ok_orange-400"
          }
        />
      </button>
    </div>
  );
};
