import { Review } from "@prisma/client";
import { Title } from "common";
import Image from "next/image";

export const ReviewItem = ({ data }: { data: Review }) => {
  return (
    <div className={"rounded-xl border border-ok_main-500 bg-ok_main-50 p-4"}>
      <div className={"mb-3 flex items-center gap-x-4"}>
        <div
          className={
            "relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-slate-100 to-slate-200"
          }
        >
          {data.avatar ? (
            <Image
              src={data.avatar}
              alt={"Avatar"}
              fill
              className={"object-cover"}
            />
          ) : (
            <span className={"text-lg font-bold text-ok_main-300"}>
              {data.name[0].toUpperCase() || "N"}
            </span>
          )}
        </div>
        <Title className={"text-ok_main-700"} size={"2xl"} component={"h4"}>
          {data.name}
        </Title>
      </div>
      <div className={"h-[140px] overflow-y-auto"}>
        <p className={"text-pretty text-sm italic"}>{data.text}</p>
      </div>
    </div>
  );
};
