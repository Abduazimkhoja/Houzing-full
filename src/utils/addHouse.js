const date = new Date();

export const addHouseData = [
   {
      id: 1,
      title: "Contact information",
      component: "Contact",
   },
   {
      id: 2,
      title: "Additional",
      inputs: [
         {
            id: 1,
            placeholder: "Rooms",
            type: "number",
            name: "houseDetails.room",
            min: "1"
         },
         {
            id: 2,
            placeholder: "Beds",
            type: "number",
            name: "houseDetails.beds",
            min: "1"
         },
         {
            id: 3,
            placeholder: "Baths",
            type: "number",
            name: "houseDetails.bath",
            min: "1"
         },
         {
            id: 4,
            placeholder: "Garages",
            type: "number",
            name: "houseDetails.garage",
            min: "1"
         },
         {
            id: 5,
            placeholder: "Year bulid",
            type: "number",
            name: "houseDetails.yearBuilt",
            min: 1700,
            max: date.getFullYear(),
         },
         {
            id: 6,
            placeholder: "Home area (sqft)",
            type: "number",
            name: "houseDetails.area",
            min: "20"
         },
      ],
   },
   {
      id: 3,
      title: "Price",
      inputs: [
         { id: 1, placeholder: "Price ($)", type: "number", name: "price" },
         {
            id: 2,
            placeholder: "Sale Price ($)",
            type: "number",
            name: "salePrice",
         },
      ],
   },
   {
      id: 4,
      title: "Location",
      inputs: [
         { id: 1, placeholder: "Address", type: "text", name: "address" },
         { id: 2, placeholder: "Country", type: "text", name: "country" },
         { id: 3, placeholder: "Region", type: "text", name: "region" },
      ],
   },
   {
      id: 5,
      title: "Media",
      component: "Media",
   },
   {
      id: 6,
      title: "Amenities",
      parentObjectName: "componentsDto",
      inputs: [
         {
            id: 1,
            placeholder: "Air conditioning",
            type: "checkbox",
            name: "componentsDto.airCondition",
         },
         {
            id: 2,
            placeholder: "Courtyard",
            type: "checkbox",
            name: "componentsDto.courtyard",
         },
         {
            id: 3,
            placeholder: "Furniture",
            type: "checkbox",
            name: "componentsDto.furniture",
         },
         {
            id: 4,
            placeholder: "Gas Stove",
            type: "checkbox",
            name: "componentsDto.gasStove",
         },
         {
            id: 5,
            placeholder: "Internet",
            type: "checkbox",
            name: "componentsDto.internet",
         },
         {
            id: 6,
            placeholder: "Tv",
            type: "checkbox",
            name: "componentsDto.tv",
         },
         // { id: 1, placeholder: "Air conditioning", type: "checkbox", name: "airCondition" },
         // { id: 2, placeholder: "Lawn", type: "checkbox", name: "" },
         // { id: 3, placeholder: "Dining Room", type: "checkbox", name: "" },
         // { id: 4, placeholder: "Waterfront", type: "checkbox", name: "" },
         // { id: 5, placeholder: "Barbecue", type: "checkbox", name: "" },
         // { id: 6, placeholder: "Microwave", type: "checkbox", name: "" },
         // { id: 7, placeholder: "Fireplace", type: "checkbox", name: "" },
         // { id: 8, placeholder: "Parking", type: "checkbox", name: "parking" },
         // { id: 9, placeholder: "Dryer", type: "checkbox", name: "" },
         // { id: 10, placeholder: "Outdoor Shower", type: "checkbox", name: "" },
         // { id: 11, placeholder: "Pets Allowed", type: "checkbox", name: "" },
         // { id: 12, placeholder: "Doorman", type: "checkbox", name: "" },
         // { id: 13, placeholder: "Gym", type: "checkbox", name: "" },
         // { id: 14, placeholder: "Refrigerator", type: "checkbox", name: "" },
         // {
         //    id: 15,
         //    placeholder: "Unit Washer/Dryer",
         //    type: "checkbox",
         //    name: "",
         // },
         // { id: 16, placeholder: "Central Heating", type: "checkbox", name: "" },
         // { id: 17, placeholder: "Laundry", type: "checkbox", name: "" },
         // { id: 18, placeholder: "Stunning views", type: "checkbox", name: "" },
         // { id: 19, placeholder: "Onsite Parking", type: "checkbox", name: "" },
         // { id: 20, placeholder: "Cleaning Service", type: "checkbox", name: "" },
      ],
   },
];
