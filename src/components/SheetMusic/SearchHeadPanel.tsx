"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { IconButton, SelectInput, TextInput } from "common/UI";

export function SearchHeadPanel() {
  const [filter, setFilter] = useQueryParams(
    {
      q: withDefault(StringParam, ""),
      ordering: withDefault(StringParam, ""),
      view: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

  const [searchQueryValue, setSearchQueryValue] = useState(filter.q);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((s) => ({
        ...s,
        q: searchQueryValue,
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQueryValue, setFilter]);

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
            onClick={() => setFilter((s) => ({ ...s, view: "" }))}
            size={"small"}
            startIcon={
              <FiGrid
                className={clsx("size-5", !filter.view && "text-ok_main-600")}
              />
            }
          />
          <IconButton
            onClick={() => setFilter((s) => ({ ...s, view: "list" }))}
            size={"small"}
            startIcon={
              <FaListUl
                className={clsx("size-5", filter.view && "text-ok_main-600")}
              />
            }
          />
        </div>
        <div className={"relative w-full flex-shrink-0 sm:w-fit"}>
          <SelectInput
            options={[
              { value: "", label: "-" },
              { value: "title", label: "Title (A-Z)" },
              { value: "-title", label: "Title (Z-A)" },
              { value: "author", label: "Composer (A-Z)" },
              { value: "-author", label: "Composer (Z-A)" },
            ]}
            value={filter.ordering}
            onChange={(v) => setFilter((s) => ({ ...s, ordering: v }))}
            className={{ wrapper: "min-w-fit" }}
          />
        </div>
      </div>
    </div>
  );
}
