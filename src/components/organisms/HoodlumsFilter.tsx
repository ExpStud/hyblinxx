import { FC, HTMLAttributes } from "react";
import { hoodlumCollections } from "@constants";
import { HoodlumCollections, HoodlumCollectionsType } from "@types";
import { HoodlumsFilterItem } from "@components";

interface FilterProps extends HTMLAttributes<HTMLDivElement> {
  selectedFilters: (HoodlumCollections | "ALL")[];
  onFilterChange: (collection: HoodlumCollections | "ALL") => void;
}

const HoodlumsFilter: FC<FilterProps> = ({
  className,
  selectedFilters,
  onFilterChange,
  ...divProps
}) => {
  return (
    <div className={`row-centered gap-10 ${className ?? ""}`} {...divProps}>
      <div
        className={`row-centered gap-3 bg-h-purple-725 w-[66px] h-8 rounded-[32px] cursor-pointer font-rubik text-xs transition-200 ${
          selectedFilters.includes("ALL") ? "hoodlums-selected-filter" : ""
        }`}
        onClick={() => onFilterChange("ALL")}
      >
        ALL
      </div>
      {hoodlumCollections.map((item) => (
        <HoodlumsFilterItem
          key={item.name}
          item={item}
          selectedFilters={selectedFilters}
          onFilterChange={onFilterChange}
        />
      ))}
    </div>
  );
};

export default HoodlumsFilter;
