"use client";

import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import ReactPlayer from "react-player";

import { GradientButton } from "common/UI";

type VideoCardProps = {
  url: string;
};

export const VideoCard: React.FC<VideoCardProps> = ({ url }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!url || !mounted) return null;
  return (
    <>
      {mounted && (
        <ReactPlayer
          playsinline
          light
          playIcon={
            <GradientButton
              className={"transform p-3 transition-transform hover:scale-105"}
            >
              <FaPlay className={"translate-x-[1px] transform text-white"} />
            </GradientButton>
          }
          controls
          url={url}
          width={"100%"}
          height={"100%"}
          className={"overflow-hidden rounded-2xl"}
        />
      )}
    </>
  );
};
