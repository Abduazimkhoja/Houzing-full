export const FilterData = [
   {
      id: 1,
      subtitle: "address",
      inputs: [
         {
            id: "1-1",
            type: "text",
            placeholder: "Country",
            ref: "countryRef",
            name: "country",
         },
         {
            id: "1-2",
            type: "text",
            placeholder: "Region",
            ref: "regionRef",
            name: "region",
         },
         {
            id: "1-3",
            type: "text",
            placeholder: "City",
            ref: "cityRef",
            name: "city",
         },
         {
            id: "1-4",
            type: "number",
            placeholder: "Zip code",
            ref: "zipCodeRef",
            name: "zip_code",
         },
      ],
   },
   {
      id: 2,
      subtitle: "Apartment info",
      inputs: [
         {
            id: "2-1",
            type: "number",
            placeholder: "Rooms",
            ref: "roomsRef",
            name: "room",
         },
         {
            id: "2-2",
            type: "number",
            placeholder: "Size",
            ref: "sizeRef",
            name: "size",
         },
         {
            id: "2-3",
            type: "select",
            placeholder: "Sort",
            ref: "sortRef",
            name: "sort",
         },
      ],
   },
   {
      id: 3,
      subtitle: "Price",
      inputs: [
         {
            id: "3-1",
            type: "number",
            placeholder: "Min price",
            ref: "minPriceRef",
            name: "min_price",
         },
         {
            id: "3-2",
            type: "number",
            placeholder: "Max price",
            ref: "maxPriceRef",
            name: "max_price",
         },
      ],
   },
];
