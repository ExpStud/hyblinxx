import { Dispatch, SetStateAction, FC, useState, useEffect } from "react";
import { hoodlums } from "@constants";
import { Hoodlums, HoodlumCollections } from "@types";
import { HoodlumsFilter } from "@components";

interface Props {
  setAssets: Dispatch<SetStateAction<boolean[]>>;
}

const HoodlumsView: FC<Props> = ({ setAssets }) => {
  const [selectedFilters, setSelectedFilters] = useState<
    (HoodlumCollections | "ALL")[]
  >(["ALL"]);
  const [filteredHoodlums, setFilteredHoodlums] =
    useState<Hoodlums[]>(hoodlums);

  const handleFilterChange = (collection: HoodlumCollections | "ALL") => {
    setSelectedFilters((prevFilters) => {
      if (collection === "ALL") {
        return ["ALL"];
      }

      const newFilters = prevFilters.includes(collection)
        ? prevFilters.filter((filter) => filter !== collection)
        : [...prevFilters.filter((filter) => filter !== "ALL"), collection];

      return newFilters.length === 0 ? ["ALL"] : newFilters;
    });
  };

  useEffect(() => {
    if (selectedFilters.includes("ALL")) {
      setFilteredHoodlums(hoodlums);
    } else {
      setFilteredHoodlums(
        hoodlums.filter((hoodlum) =>
          selectedFilters.includes(hoodlum.collection)
        )
      );
    }
  }, [selectedFilters]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <HoodlumsFilter
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
      />
      <div className="flex overflow-y-auto">
        {filteredHoodlums.map((hoodlum) => (
          <div key={hoodlum.mintAddress}>{hoodlum.name}</div>
        ))}
      </div>
    </div>
  );
};

export default HoodlumsView;
