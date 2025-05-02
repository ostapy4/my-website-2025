"use client";

import { Title } from "common";
import { genres, griffes, levels } from "consts";
import { useEffect, useState } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
import {
  DelimitedArrayParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

import { CheckBoxInput } from "common/UI";

// import { cn } from "utils/cn";

export function Filters() {
  // const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [queryParams, setQueryParams] = useQueryParams(
    {
      level: withDefault(DelimitedArrayParam, []),
      genre: withDefault(DelimitedArrayParam, []),
      griff: withDefault(DelimitedArrayParam, []),
    },
    { removeDefaultsFromUrl: true },
  );

  const [filters, setFilters] = useState({
    level: queryParams.level,
    genre: queryParams.genre,
    griff: queryParams.griff,
  });

  useEffect(() => {
    setQueryParams(filters);
  }, [filters, setQueryParams]);

  const handleFilterChange = (
    key: "level" | "genre" | "griff",
    value: string,
    checked: boolean,
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: checked
        ? [...prev[key], value]
        : prev[key].filter((v) => v !== value),
    }));
  };

  return (
    <aside
      className={
        "hidden min-w-32 max-w-fit rounded-lg bg-ok_main-50 px-3 py-2 md:block"
      }
    >
      <div>
        <Title size={"xl"} className={"mb-2"} component={"h5"}>
          Level
        </Title>
        <div>
          {levels.map((level) => (
            <CheckBoxInput
              key={level}
              label={level}
              value={(filters.level as string[]).includes(level)}
              onChange={(v) => handleFilterChange("level", level, v)}
            />
          ))}
        </div>
      </div>

      <div>
        <Title size={"xl"} className={"mb-2 mt-4"} component={"h5"}>
          Genre
        </Title>
        <div>
          {genres.map((genre) => (
            <CheckBoxInput
              key={genre}
              label={genre}
              value={(filters.genre as string[]).includes(genre)}
              onChange={(v) => handleFilterChange("genre", genre, v)}
            />
          ))}
        </div>
      </div>

      <div>
        <Title size={"xl"} className={"mb-2 mt-4"} component={"h5"}>
          Griff
        </Title>
        <div>
          {griffes.map((griff) => (
            <CheckBoxInput
              key={griff}
              label={griff}
              value={(filters.griff as string[]).includes(griff)}
              onChange={(v) => handleFilterChange("griff", griff, v)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
