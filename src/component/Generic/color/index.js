const colors = (color) =>
   `var(${{
      cyanBlue: "--color-cyan-blue",
      whiteLilac: "--color-white-lilac",
      blue: "--color-blue",
      gray: "--color-gray",
      red: "--color-red",
      yellow: "--color-yellow",
      white: "--color-white",
      whiteSmoke: "--color-white-smoke"
   }[color || "white"]})`;

export default colors;
