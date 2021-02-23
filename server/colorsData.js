const colors = [
  {
    colorCategory: "Navy",
    hex: "000080",
  },
  {
    colorCategory: "DarkBlue",
    hex: "00008B",
  },
  {
    colorCategory: "MediumBlue",
    hex: "0000CD",
  },
  {
    colorCategory: "Blue",
    hex: "0000FF",
  },
  {
    colorCategory: "DarkGreen",
    hex: "006400",
  },
  {
    colorCategory: "Green",
    hex: "008000",
  },
  {
    colorCategory: "Teal",
    hex: "008080",
  },
  {
    colorCategory: "DarkCyan",
    hex: "008B8B",
  },
  {
    colorCategory: "DeepSkyBlue",
    hex: "00BFFF",
  },
  {
    colorCategory: "DarkTurquoise",
    hex: "00CED1",
  },
  {
    colorCategory: "MediumSpringGreen",
    hex: "00FA9A",
  },
  {
    colorCategory: "Lime",
    hex: "00FF00",
  },
  {
    colorCategory: "SpringGreen",
    hex: "00FF7F",
  },
  {
    colorCategory: "Aqua",
    hex: "00FFFF",
  },
  {
    colorCategory: "Cyan",
    hex: "00FFFF",
  },
  {
    colorCategory: "MidnightBlue",
    hex: "191970",
  },
  {
    colorCategory: "DodgerBlue",
    hex: "1E90FF",
  },
  {
    colorCategory: "LightSeaGreen",
    hex: "20B2AA",
  },
  {
    colorCategory: "ForestGreen",
    hex: "228B22",
  },
  {
    colorCategory: "SeaGreen",
    hex: "2E8B57",
  },
  {
    colorCategory: "DarkSlateGray",
    hex: "2F4F4F",
  },
  {
    colorCategory: "DarkSlateGrey",
    hex: "2F4F4F",
  },
  {
    colorCategory: "LimeGreen",
    hex: "32CD32",
  },
  {
    colorCategory: "MediumSeaGreen",
    hex: "3CB371",
  },
  {
    colorCategory: "Turquoise",
    hex: "40E0D0",
  },
  {
    colorCategory: "RoyalBlue",
    hex: "4169E1",
  },
  {
    colorCategory: "SteelBlue",
    hex: "4682B4",
  },
  {
    colorCategory: "DarkSlateBlue",
    hex: "483D8B",
  },
  {
    colorCategory: "MediumTurquoise",
    hex: "48D1CC",
  },
  {
    colorCategory: "Indigo",
    hex: "4B0082",
  },
  {
    colorCategory: "DarkOliveGreen",
    hex: "556B2F",
  },
  {
    colorCategory: "CadetBlue",
    hex: "5F9EA0",
  },
  {
    colorCategory: "CornflowerBlue",
    hex: "6495ED",
  },
  {
    colorCategory: "RebeccaPurple",
    hex: "663399",
  },
  {
    colorCategory: "MediumAquaMarine",
    hex: "66CDAA",
  },
  {
    colorCategory: "DimGray",
    hex: "696969",
  },
  {
    colorCategory: "DimGrey",
    hex: "696969",
  },
  {
    colorCategory: "SlateBlue",
    hex: "6A5ACD",
  },
  {
    colorCategory: "OliveDrab",
    hex: "6B8E23",
  },
  {
    colorCategory: "SlateGray",
    hex: "708090",
  },
  {
    colorCategory: "SlateGrey",
    hex: "708090",
  },
  {
    colorCategory: "LightSlateGray",
    hex: "778899",
  },
  {
    colorCategory: "LightSlateGrey",
    hex: "778899",
  },
  {
    colorCategory: "MediumSlateBlue",
    hex: "7B68EE",
  },
  {
    colorCategory: "LawnGreen",
    hex: "7CFC00",
  },
  {
    colorCategory: "Chartreuse",
    hex: "7FFF00",
  },
  {
    colorCategory: "Aquamarine",
    hex: "7FFFD4",
  },
  {
    colorCategory: "Maroon",
    hex: "800000",
  },
  {
    colorCategory: "Purple",
    hex: "800080",
  },
  {
    colorCategory: "Olive",
    hex: "808000",
  },
  {
    colorCategory: "Gray",
    hex: "808080",
  },
  {
    colorCategory: "Grey",
    hex: "808080",
  },
  {
    colorCategory: "SkyBlue",
    hex: "87CEEB",
  },
  {
    colorCategory: "LightSkyBlue",
    hex: "87CEFA",
  },
  {
    colorCategory: "BlueViolet",
    hex: "8A2BE2",
  },
  {
    colorCategory: "DarkRed",
    hex: "8B0000",
  },
  {
    colorCategory: "DarkMagenta",
    hex: "8B008B",
  },
  {
    colorCategory: "SaddleBrown",
    hex: "8B4513",
  },
  {
    colorCategory: "DarkSeaGreen",
    hex: "8FBC8F",
  },
  {
    colorCategory: "LightGreen",
    hex: "90EE90",
  },
  {
    colorCategory: "MediumPurple",
    hex: "9370DB",
  },
  {
    colorCategory: "DarkViolet",
    hex: "9400D3",
  },
  {
    colorCategory: "PaleGreen",
    hex: "98FB98",
  },
  {
    colorCategory: "DarkOrchid",
    hex: "9932CC",
  },
  {
    colorCategory: "YellowGreen",
    hex: "9ACD32",
  },
  {
    colorCategory: "Sienna",
    hex: "A0522D",
  },
  {
    colorCategory: "Brown",
    hex: "A52A2A",
  },
  {
    colorCategory: "DarkGray",
    hex: "A9A9A9",
  },
  {
    colorCategory: "DarkGrey",
    hex: "A9A9A9",
  },
  {
    colorCategory: "LightBlue",
    hex: "ADD8E6",
  },
  {
    colorCategory: "GreenYellow",
    hex: "ADFF2F",
  },
  {
    colorCategory: "PaleTurquoise",
    hex: "AFEEEE",
  },
  {
    colorCategory: "LightSteelBlue",
    hex: "B0C4DE",
  },
  {
    colorCategory: "PowderBlue",
    hex: "B0E0E6",
  },
  {
    colorCategory: "FireBrick",
    hex: "B22222",
  },
  {
    colorCategory: "DarkGoldenRod",
    hex: "B8860B",
  },
  {
    colorCategory: "MediumOrchid",
    hex: "BA55D3",
  },
  {
    colorCategory: "RosyBrown",
    hex: "BC8F8F",
  },
  {
    colorCategory: "DarkKhaki",
    hex: "BDB76B",
  },
  {
    colorCategory: "Silver",
    hex: "C0C0C0",
  },
  {
    colorCategory: "MediumVioletRed",
    hex: "C71585",
  },
  {
    colorCategory: "IndianRed",
    hex: "CD5C5C",
  },
  {
    colorCategory: "Peru",
    hex: "CD853F",
  },
  {
    colorCategory: "Chocolate",
    hex: "D2691E",
  },
  {
    colorCategory: "Tan",
    hex: "D2B48C",
  },
  {
    colorCategory: "LightGray",
    hex: "D3D3D3",
  },
  {
    colorCategory: "LightGrey",
    hex: "D3D3D3",
  },
  {
    colorCategory: "Thistle",
    hex: "D8BFD8",
  },
  {
    colorCategory: "Orchid",
    hex: "DA70D6",
  },
  {
    colorCategory: "GoldenRod",
    hex: "DAA520",
  },
  {
    colorCategory: "PaleVioletRed",
    hex: "DB7093",
  },
  {
    colorCategory: "Crimson",
    hex: "DC143C",
  },
  {
    colorCategory: "Gainsboro",
    hex: "DCDCDC",
  },
  {
    colorCategory: "Plum",
    hex: "DDA0DD",
  },
  {
    colorCategory: "BurlyWood",
    hex: "DEB887",
  },
  {
    colorCategory: "LightCyan",
    hex: "E0FFFF",
  },
  {
    colorCategory: "Lavender",
    hex: "E6E6FA",
  },
  {
    colorCategory: "DarkSalmon",
    hex: "E9967A",
  },
  {
    colorCategory: "Violet",
    hex: "EE82EE",
  },
  {
    colorCategory: "PaleGoldenRod",
    hex: "EEE8AA",
  },
  {
    colorCategory: "LightCoral",
    hex: "F08080",
  },
  {
    colorCategory: "Khaki",
    hex: "F0E68C",
  },
  {
    colorCategory: "AliceBlue",
    hex: "F0F8FF",
  },
  {
    colorCategory: "HoneyDew",
    hex: "F0FFF0",
  },
  {
    colorCategory: "Azure",
    hex: "F0FFFF",
  },
  {
    colorCategory: "SandyBrown",
    hex: "F4A460",
  },
  {
    colorCategory: "Wheat",
    hex: "F5DEB3",
  },
  {
    colorCategory: "Beige",
    hex: "F5F5DC",
  },
  {
    colorCategory: "WhiteSmoke",
    hex: "F5F5F5",
  },
  {
    colorCategory: "MintCream",
    hex: "F5FFFA",
  },
  {
    colorCategory: "GhostWhite",
    hex: "F8F8FF",
  },
  {
    colorCategory: "Salmon",
    hex: "FA8072",
  },
  {
    colorCategory: "AntiqueWhite",
    hex: "FAEBD7",
  },
  {
    colorCategory: "Linen",
    hex: "FAF0E6",
  },
  {
    colorCategory: "LightGoldenRodYellow",
    hex: "FAFAD2",
  },
  {
    colorCategory: "OldLace",
    hex: "FDF5E6",
  },
  {
    colorCategory: "Red",
    hex: "FF0000",
  },
  {
    colorCategory: "Fuchsia",
    hex: "FF00FF",
  },
  {
    colorCategory: "Magenta",
    hex: "FF00FF",
  },
  {
    colorCategory: "DeepPink",
    hex: "FF1493",
  },
  {
    colorCategory: "OrangeRed",
    hex: "FF4500",
  },
  {
    colorCategory: "Tomato",
    hex: "FF6347",
  },
  {
    colorCategory: "HotPink",
    hex: "FF69B4",
  },
  {
    colorCategory: "Coral",
    hex: "FF7F50",
  },
  {
    colorCategory: "DarkOrange",
    hex: "FF8C00",
  },
  {
    colorCategory: "LightSalmon",
    hex: "FFA07A",
  },
  {
    colorCategory: "Orange",
    hex: "FFA500",
  },
  {
    colorCategory: "LightPink",
    hex: "FFB6C1",
  },
  {
    colorCategory: "Pink",
    hex: "FFC0CB",
  },
  {
    colorCategory: "Gold",
    hex: "FFD700",
  },
  {
    colorCategory: "PeachPuff",
    hex: "FFDAB9",
  },
  {
    colorCategory: "NavajoWhite",
    hex: "FFDEAD",
  },
  {
    colorCategory: "Moccasin",
    hex: "FFE4B5",
  },
  {
    colorCategory: "Bisque",
    hex: "FFE4C4",
  },
  {
    colorCategory: "MistyRose",
    hex: "FFE4E1",
  },
  {
    colorCategory: "BlanchedAlmond",
    hex: "FFEBCD",
  },
  {
    colorCategory: "PapayaWhip",
    hex: "FFEFD5",
  },
  {
    colorCategory: "LavenderBlush",
    hex: "FFF0F5",
  },
  {
    colorCategory: "SeaShell",
    hex: "FFF5EE",
  },
  {
    colorCategory: "Cornsilk",
    hex: "FFF8DC",
  },
  {
    colorCategory: "LemonChiffon",
    hex: "FFFACD",
  },
  {
    colorCategory: "FloralWhite",
    hex: "FFFAF0",
  },
  {
    colorCategory: "Snow",
    hex: "FFFAFA",
  },
  {
    colorCategory: "Yellow",
    hex: "FFFF00",
  },
  {
    colorCategory: "LightYellow",
    hex: "FFFFE0",
  },
  {
    colorCategory: "Ivory",
    hex: "FFFFF0",
  },
  {
    colorCategory: "White",
    hex: "FFFFFF",
  },
];

module.exports = colors;
