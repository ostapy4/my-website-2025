"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type VideoCardProps = {
  url: string;
};

export const VideoCard: React.FC<VideoCardProps> = ({ url }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, [mounted]);
  if (!url) return null;
  return (
    <>
      {mounted && (
        <ReactPlayer
          playsinline={true}
          url={url}
          width={"auto"}
          height={"100%"}
          className={"overflow-hidden rounded-2xl"}
        />
      )}
    </>
  );
};
