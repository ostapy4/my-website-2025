"use client";

import { Title } from "common";
import { ArrayParam, useQueryParams, withDefault } from "use-query-params";

import { CheckBoxInput } from "common/UI/Inputs/CheckBox";

export function Filters() {
  const [filter, setFilter] = useQueryParams(
    {
      level: withDefault(ArrayParam, []),
      genre: withDefault(ArrayParam, []),
      griff: withDefault(ArrayParam, []),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

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
  const griffes = ["c", "b"];

  const handleFilterChange = (
    key: "level" | "genre" | "griff",
    value: string,
    checked: boolean,
  ) => {
    setFilter({
      [key]: checked
        ? [...filter[key], value]
        : filter[key].filter((v) => v !== value),
    });
  };

  return (
    <aside
      className={
        "min-w-32 max-w-fit self-start rounded-lg bg-ok_main-50 px-3 py-2"
      }
    >
      <Title size={"3xl"} className={"mb-3"} component={"h4"}>
        Filters
      </Title>

      <div>
        <Title size={"xl"} className={"mb-2"} component={"h5"}>
          Level
        </Title>
        <div>
          {levels.map((level) => (
            <CheckBoxInput
              key={level}
              label={level}
              value={(filter.level as string[]).includes(level)}
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
              value={(filter.genre as string[]).includes(genre)}
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
              value={(filter.griff as string[]).includes(griff)}
              onChange={(v) => handleFilterChange("griff", griff, v)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

{
  /* <Button
onClick={() => {
  setFilter({
    q: "",
    ordering: "",
    level: "",
    genre: "",
    griff: "",
    page: "",
  });
  setIsFiltersOpen(false);
}}
size={"small"}
>
Reset all filters
</Button> */
}
