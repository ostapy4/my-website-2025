"use client";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import AccordionIMG from "resources/accordion.png";

import "keen-slider/keen-slider.min.css";

type SliderProps = {
  data: {
    id: string;
    image: string;
    galleryId: string;
  }[];
};

export const Slider = ({ data }: SliderProps) => {
  // const [details, setDetails] = useState<TrackDetails | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    defaultAnimation: { duration: 1500 },
    dragSpeed: 0.1,
    // detailsChanged(s) {
    //   setDetails(s.track.details);
    // },
    initial: 2,
  });

  // function scaleStyle(idx: number) {
  //   if (!details) return {};
  //   const slide = details.slides[idx];
  //   const scale_size = 0.7;
  //   const scale = 1 - (scale_size - scale_size * slide.portion);
  //   return {
  //     transform: `scale(${scale})`,
  //     WebkitTransform: `scale(${scale})`,
  //   };
  // }

  if (!data || !data.length) return null;

  return (
    <div
      ref={sliderRef}
      className={
        "keen-slider relative aspect-[3/4] sm:aspect-[5/4] md:aspect-video"
      }
    >
      <Image
        src={AccordionIMG}
        alt={"Accordion"}
        fill
        className={"z-0 object-contain p-8 opacity-5 saturate-0"}
        aria-hidden
      />
      {data.map((i) => (
        <div key={i.id} className={"keen-slider__slide z-10 flex"}>
          <div
            // style={scaleStyle(Idx)}
            className={"relative w-full"}
          >
            <Image
              src={i.image}
              alt={"Photo"}
              fill
              className={
                "rounded-3xl object-cover saturate-[.9] sm:object-contain"
              }
            />
          </div>
        </div>
      ))}
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
