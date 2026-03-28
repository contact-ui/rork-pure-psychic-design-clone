export type ZodiacSign = {
  name: string;
  symbol: string;
  element: string;
  dates: string;
  color: string;
};

const zodiacSigns: Record<string, ZodiacSign> = {
  aries: {
    name: "Aries",
    symbol: "♈",
    element: "Fire",
    dates: "March 21 - April 19",
    color: "#FF5757"
  },
  taurus: {
    name: "Taurus",
    symbol: "♉",
    element: "Earth",
    dates: "April 20 - May 20",
    color: "#5EBD7D"
  },
  gemini: {
    name: "Gemini",
    symbol: "♊",
    element: "Air",
    dates: "May 21 - June 20",
    color: "#FFDA58"
  },
  cancer: {
    name: "Cancer",
    symbol: "♋",
    element: "Water",
    dates: "June 21 - July 22",
    color: "#7DCFE8"
  },
  leo: {
    name: "Leo",
    symbol: "♌",
    element: "Fire",
    dates: "July 23 - August 22",
    color: "#FF9636"
  },
  virgo: {
    name: "Virgo",
    symbol: "♍",
    element: "Earth",
    dates: "August 23 - September 22",
    color: "#A2D1B1"
  },
  libra: {
    name: "Libra",
    symbol: "♎",
    element: "Air",
    dates: "September 23 - October 22",
    color: "#FF9FB4"
  },
  scorpio: {
    name: "Scorpio",
    symbol: "♏",
    element: "Water",
    dates: "October 23 - November 21",
    color: "#9370DB"
  },
  sagittarius: {
    name: "Sagittarius",
    symbol: "♐",
    element: "Fire",
    dates: "November 22 - December 21",
    color: "#5D9CEC"
  },
  capricorn: {
    name: "Capricorn",
    symbol: "♑",
    element: "Earth",
    dates: "December 22 - January 19",
    color: "#8B4513"
  },
  aquarius: {
    name: "Aquarius",
    symbol: "♒",
    element: "Air",
    dates: "January 20 - February 18",
    color: "#00BFFF"
  },
  pisces: {
    name: "Pisces",
    symbol: "♓",
    element: "Water",
    dates: "February 19 - March 20",
    color: "#9FD5D1"
  }
};

export default zodiacSigns;