const colors = (color) =>
   ({
      "cyan-blue": "--color-cyan-blue",
      "white-lilac": "--color-white-lilac",
      blue: "--color-blue",
      gray: "--color-gray",
      red: "--color-red",
      yellow: "--color-yellow",
      white: "--color-white",
   }[color || "white"]);

export default colors;
