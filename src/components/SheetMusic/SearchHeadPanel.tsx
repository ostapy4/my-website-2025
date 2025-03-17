"use client";

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { CATEGORIES } from "shared-constants";
import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { Button, SelectInput, TextInput } from "common/UI";

export function SearchHeadPanel() {
  const [filter, setFilter] = useQueryParams(
    {
      title: withDefault(StringParam, ""),
      author: withDefault(StringParam, ""),
      ordering: withDefault(StringParam, ""),
      category: withDefault(StringParam, ""),
      griff: withDefault(StringParam, ""),
      minPrice: withDefault(StringParam, ""),
      maxPrice: withDefault(StringParam, ""),
      page: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

  const [searchTitleValue, setSearchTitleValue] = useState(filter.title);
  const [searchAuthorValue, setSearchAuthorValue] = useState(filter.author);
  const [minPriceValue, setMinPriceValue] = useState(filter.minPrice);
  const [maxPriceValue, setMaxPriceValue] = useState(filter.maxPrice);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((s) => ({
        ...s,
        title: searchTitleValue,
        page: "",
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTitleValue, setFilter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((s) => ({
        ...s,
        author: searchAuthorValue,
        page: "",
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchAuthorValue, setFilter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((s) => ({
        ...s,
        minPrice: minPriceValue,
        page: "",
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [minPriceValue, setFilter]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((s) => ({
        ...s,
        maxPrice: maxPriceValue,
        page: "",
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [maxPriceValue, setFilter]);

  return (
    <div className={"mb-6 flex flex-col gap-y-6 sm:gap-y-4 md:gap-y-6"}>
      <div className={"flex flex-col gap-x-2 gap-y-1.5 sm:flex-row"}>
        <div className={"min-w-0 max-w-2xl flex-1"}>
          <TextInput
            value={searchTitleValue}
            onChange={(e) => setSearchTitleValue(e.target.value)}
            placeholder={"Search by title..."}
          />
        </div>
        <div className={"min-w-0 max-w-2xl flex-1"}>
          <TextInput
            value={searchAuthorValue}
            onChange={(e) => setSearchAuthorValue(e.target.value)}
            placeholder={"Search by author..."}
          />
        </div>

        <Button
          className={{
            button: "mt-1.5 border-gray-100 shadow-md sm:ml-2 sm:mt-0",
          }}
          onClick={() => setIsFiltersOpen((prev) => !prev)}
        >
          Filters
        </Button>
      </div>

      <Transition
        show={isFiltersOpen}
        enter={"transition ease-out duration-100"}
        enterFrom={"transform opacity-0 scale-95"}
        enterTo={"transform opacity-100 scale-100"}
        leave={"transition ease-in duration-75"}
        leaveFrom={"transform opacity-100 scale-100"}
        leaveTo={"transform opacity-0 scale-95"}
      >
        <div
          className={
            "flex flex-col items-start gap-y-3 rounded-xl bg-ok_main-50 p-4"
          }
        >
          <h3 className={"text-2xl font-medium"}>Filters</h3>

          <div className={"flex w-full flex-col gap-x-4 gap-y-3 md:flex-row"}>
            <div className={"flex max-w-sm flex-1 flex-col gap-y-2"}>
              <SelectInput
                value={filter.category}
                onChange={(value) =>
                  setFilter((s) => ({
                    ...s,
                    category: value,
                    page: "",
                  }))
                }
                options={CATEGORIES}
                label={"Select category"}
              />
              <SelectInput
                value={filter.griff}
                onChange={(value) =>
                  setFilter((s) => ({
                    ...s,
                    griff: value,
                    page: "",
                  }))
                }
                options={[
                  { label: "C", value: "c-griff" },
                  { label: "B", value: "b-griff" },
                ]}
                label={"Select Griff"}
              />
            </div>
            <div
              className={
                "flex max-w-sm flex-1 flex-col gap-y-2 sm:flex-row sm:gap-x-2 md:flex-col lg:flex-row"
              }
            >
              <TextInput
                label={"Min Price"}
                value={minPriceValue}
                onChange={(e) => setMinPriceValue(e.target.value)}
              />
              <TextInput
                label={"Max Price"}
                value={maxPriceValue}
                onChange={(e) => setMaxPriceValue(e.target.value)}
              />
            </div>
          </div>

          {filter.category.length > 0 && (
            <Button
              onClick={() => {
                setFilter({
                  title: "",
                  author: "",
                  ordering: "",
                  category: "",
                  griff: "",
                  minPrice: "",
                  maxPrice: "",
                  page: "",
                });
                setIsFiltersOpen(false);
              }}
              size={"small"}
            >
              Reset all filters
            </Button>
          )}
        </div>
      </Transition>

      <div className={"flex sm:justify-end"}>
        <div className={"relative w-full flex-shrink-0 sm:w-fit"}>
          <SelectInput
            options={[
              { value: "", label: "-" },
              { value: "title", label: "Title" },
              { value: "-title", label: "Title (desc)" },
              { value: "price", label: "Price" },
              { value: "-price", label: "Price (desc)" },
              { value: "createdAt", label: "Newest" },
              { value: "-createdAt", label: "Oldest" },
            ]}
            value={filter.ordering}
            onChange={(v) => setFilter((s) => ({ ...s, ordering: v }))}
            className={{ wrapper: "min-w-[290px]" }}
          />
        </div>
      </div>
    </div>
  );
}
