"use client";

import { Title } from "common";
import { genres, griffes, levels } from "consts";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import {
  DelimitedArrayParam,
  useQueryParams,
  withDefault,
} from "use-query-params";

import { Button, CheckBoxInput } from "common/UI";

import { cn } from "utils/cn";

export function FiltersMobile() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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

  function handleApplyFilters() {
    setQueryParams(filters);
    setIsFiltersOpen(false);
  }

  function handleReset() {
    setFilters({
      level: [],
      genre: [],
      griff: [],
    });
  }

  return (
    <>
      <button
        onClick={() => setIsFiltersOpen(true)}
        className={
          "flex cursor-pointer flex-nowrap items-center gap-x-1.5 rounded-lg border border-ok_main-500 bg-ok_main-50 px-3 py-1.5 text-ok_main-600 transition-colors hover:border-ok_main-400 active:border-ok_main-900 md:hidden"
        }
      >
        <IoFilter
          className={
            "size-4 transform select-none stroke-ok_main-700 transition duration-300"
          }
        />
        <span
          className={
            "line-clamp-1 flex-1 whitespace-nowrap text-left text-sm font-medium"
          }
        >
          Filter
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 top-24 z-50 w-full rounded-t-3xl bg-white px-3 pb-4 pt-6 transition-transform duration-300 ease-out",
          {
            "translate-y-full": !isFiltersOpen,
          },
        )}
      >
        <div className={"flex h-full flex-col gap-y-4 px-1"}>
          <div className={"flex items-end justify-between"}>
            <div className={"flex items-center gap-x-3"}>
              <FaArrowLeftLong
                className={
                  "text-ok_main-600 transition-transform hover:-translate-x-1"
                }
                onClick={() => setIsFiltersOpen(false)}
              />
              <Title>Filters</Title>
            </div>
            <AnimatePresence>
              {(!!filters.genre.length ||
                !!filters.griff.length ||
                !!filters.level.length) && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleReset}
                  className={
                    "mx-3 text-sm italic text-ok_main-600 underline-offset-1 hover:underline"
                  }
                >
                  Reset all
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <div className={"relative -mx-3 flex-1 overflow-auto px-3"}>
            <div>
              <Title size={"4xl"} className={"mb-4"} component={"h5"}>
                Level
              </Title>
              <ul className={"space-y-0.5"}>
                {levels.map((level) => (
                  <li
                    key={level}
                    className={
                      "rounded-[0.25rem] px-1.5 hover:bg-ok_main-50/70"
                    }
                  >
                    <CheckBoxInput
                      label={level}
                      value={(filters.level as string[]).includes(level)}
                      onChange={(v) => handleFilterChange("level", level, v)}
                      className={{
                        label: "text-xl",
                        field: "flex-row justify-between",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <ul className={"space-y-0.5"}>
              <Title size={"4xl"} className={"mb-2 mt-4"} component={"h5"}>
                Genre
              </Title>
              <div>
                {genres.map((genre) => (
                  <li
                    key={genre}
                    className={
                      "rounded-[0.25rem] px-1.5 hover:bg-ok_main-50/70"
                    }
                  >
                    <CheckBoxInput
                      label={genre}
                      value={(filters.genre as string[]).includes(genre)}
                      onChange={(v) => handleFilterChange("genre", genre, v)}
                      className={{
                        label: "text-xl",
                        field: "flex-row justify-between",
                      }}
                    />
                  </li>
                ))}
              </div>
            </ul>

            <ul className={"space-y-0.5"}>
              <Title size={"4xl"} className={"mb-2 mt-4"} component={"h5"}>
                Griff
              </Title>
              <div>
                {griffes.map((griff) => (
                  <li
                    key={griff}
                    className={
                      "rounded-[0.25rem] px-1.5 hover:bg-ok_main-50/70"
                    }
                  >
                    <CheckBoxInput
                      label={griff}
                      value={(filters.griff as string[]).includes(griff)}
                      onChange={(v) => handleFilterChange("griff", griff, v)}
                      className={{
                        label: "text-xl",
                        field: "flex-row justify-between",
                      }}
                    />
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div>
            <Button onClick={handleApplyFilters} fullWidth>
              Apply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
