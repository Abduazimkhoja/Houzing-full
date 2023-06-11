const colors = (color) =>
   `var(${{
      cyanBlue: "--color-cyan-blue",
      whiteLilac: "--color-white-lilac",
      blue: "--color-blue",
      gray: "--color-gray",
      red: "--color-red",
      yellow: "--color-yellow",
      white: "--color-white",
   }[color || "white"]})`;

export default colors;
