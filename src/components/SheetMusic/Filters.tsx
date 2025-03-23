"use client";

import { Title } from "common";
import { useEffect, useState } from "react";
import {
  DelimitedArrayParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

import { CheckBoxInput } from "common/UI";

export function Filters() {
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

  const griffes = ["c", "b"];
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const genres = [
    "classic",
    "jazz",
    "pop",
    "folk",
    "waltz",
    "polka",
    "tango",
    "other",
  ];

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
        "min-w-32 max-w-fit self-start rounded-lg bg-ok_main-50 px-3 py-2"
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
