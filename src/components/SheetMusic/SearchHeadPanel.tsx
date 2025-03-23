"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { IconButton, SortSelectInput, TextInput } from "common/UI";

export function SearchHeadPanel() {
  const [queryParams, setQueryParams] = useQueryParams(
    {
      q: withDefault(StringParam, ""),
      ordering: withDefault(StringParam, ""),
      view: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

  const [searchQueryValue, setSearchQueryValue] = useState(queryParams.q);
  const [view, setView] = useState(queryParams.view);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setQueryParams((s) => ({
        ...s,
        q: searchQueryValue,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQueryValue, setQueryParams]);

  useEffect(() => {
    setQueryParams((s) => ({
      ...s,
      view,
    }));
  }, [view, setQueryParams]);

  return (
    <div className={"mb-6 flex justify-end gap-x-4"}>
      <TextInput
        value={searchQueryValue}
        onChange={(e) => setSearchQueryValue(e.target.value)}
        placeholder={"Search ..."}
        className={{ container: "w-full max-w-[320px]" }}
      />

      <div className={"flex items-center gap-x-4 sm:justify-end"}>
        <div className={"flex"}>
          <IconButton
            onClick={() => setView("")}
            size={"small"}
            startIcon={
              <FiGrid className={clsx("size-5", !view && "text-ok_main-600")} />
            }
          />
          <IconButton
            onClick={() => setView("list")}
            size={"small"}
            startIcon={
              <FaListUl
                className={clsx("size-5", view && "text-ok_main-600")}
              />
            }
          />
        </div>
        <div className={"relative w-full flex-shrink-0 sm:w-fit"}>
          <SortSelectInput
            options={[
              { value: "title", label: "Title (A-Z)" },
              { value: "-title", label: "Title (Z-A)" },
              { value: "author", label: "Composer (A-Z)" },
              { value: "-author", label: "Composer (Z-A)" },
            ]}
            display={"Sort By"}
            value={queryParams.ordering}
            onChange={(v) => setQueryParams((s) => ({ ...s, ordering: v }))}
          />
        </div>
      </div>
    </div>
  );
}
