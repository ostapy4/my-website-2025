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
  }, [mounted]);

  if (!url || !mounted) return null;
  return (
    <>
      {mounted && (
        <ReactPlayer
          playsinline={true}
          url={url}
          width={"100%"}
          height={"100%"}
          className={"overflow-hidden rounded-2xl"}
        />
      )}
    </>
  );
};
