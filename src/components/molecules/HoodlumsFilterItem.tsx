import { FC, HTMLAttributes } from "react";
import { HoodlumCollectionsType, HoodlumCollections } from "@types";
import Image from "next/image";

interface FilterItemProps extends HTMLAttributes<HTMLDivElement> {
  item: HoodlumCollectionsType;
  selectedFilters: (HoodlumCollections | "ALL")[];
  onFilterChange: (collection: HoodlumCollections) => void;
}

const HoodlumsFilterItem: FC<FilterItemProps> = ({
  item,
  selectedFilters,
  className,
  onFilterChange,
  ...divProps
}) => {
  return (
    <div
      className={`row-centered gap-2 bg-h-purple-725 pl-2 pr-3 rounded-[32px] cursor-pointer h-8 transition-200 ${
        selectedFilters.includes(item.name) ? "hoodlums-selected-filter" : ""
      }`}
      onClick={() => onFilterChange(item.name)}
      {...divProps}
    >
      <Image
        src={`/images/pages/hoodlums/${item.src}`}
        alt={item.name}
        width={28}
        height={23}
      />
      <p className="font-rubik text-xs mt-0.5">{item.name}</p>
    </div>
  );
};

export default HoodlumsFilterItem;
