import useId from "../hooks/useId";

// const useId = useUniqueId();

export const FilterData = [
   {
      id: 1,
      subtitle: "address",
      inputs: [
         { id: "1-1", type: "text", placeholder: "Country", ref: "countryRef" },
         { id: "1-2", type: "text", placeholder: "Region", ref: "regionRef" },
         { id: "1-3", type: "text", placeholder: "City", ref: "cityRef" },
         { id: "1-4", type: "number", placeholder: "Zip code", ref: "zipCodeRef" },
      ],
   },
   {
      id: 2,
      subtitle: "Apartment info",
      inputs: [
         { id: "2-1", type: "number", placeholder: "Rooms", ref: "roomsRef" },
         { id: "2-2", type: "number", placeholder: "Size", ref: "sizeRef" },
         { id: "2-3", type: "select", placeholder: "Sort", ref: "sortRef" },
      ],
   },
   {
      id: 3,
      subtitle: "Price",
      inputs: [
         { id: "3-1", type: "number", placeholder: "Min price", ref: "minPriceRef" },
         { id: "3-2", type: "number", placeholder: "Max price", ref: "maxPriceRef" },
      ],
   },
];
