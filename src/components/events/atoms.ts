import { atom } from "jotai";

export const yearAtom = atom("138");

type Timeline =
  | {
      id: number;
      year: string;
      title: string;
      titlePre: string;
      suffix: string[];
      bg: never[];
    }
  | {
      id: number;
      year: string;
      title: string;
      titlePre: string;
      suffix: never[];
      bg?: undefined;
    };

export const timeLineAtom = atom<Timeline[]>([
  {
    id: 1,
    year: "138",
    title: "138",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 2,
    year: "57",
    title: "57",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 3,
    year: "52",
    title: "52",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 4,
    year: "46",
    title: "46",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 5,
    year: "385",
    title: "38.5",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 6,
    year: "53",
    title: "5.3",
    titlePre: "",
    suffix: ["BILLION", "YEARS AGO"],
    bg: [],
  },
  {
    id: 7,
    year: "320",
    title: "320",
    titlePre: "",
    suffix: ["THOUSAND", "YEARS AGO"],
    bg: [],
  },
  {
    id: 8,
    year: "8000",
    title: "8",
    titlePre: "",
    suffix: ["THOUSAND", "YEARS AGO"],
    bg: [],
  },
  {
    id: 9,
    year: "3500",
    title: "3.5",
    titlePre: "",
    suffix: ["THOUSAND", "YEARS AGO"],
    bg: [],
  },
  {
    id: 10,
    year: "18",
    title: "18",
    titlePre: "",
    suffix: ["CENTURY", "AGO"],
    bg: [],
  },
  {
    id: 11,
    year: "1961",
    title: "1961",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 12,
    year: "1969",
    title: "1969",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 13,
    year: "1971",
    title: "1971",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 14,
    year: "2015",
    title: "2015",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 15,
    year: "2035",
    title: "2035",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 16,
    year: "2083",
    title: "2083",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 17,
    year: "2089",
    title: "2089",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 19,
    year: "2101",
    title: "2101",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 20,
    year: "2144",
    title: "2144",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 21,
    year: "2195",
    title: "2195",
    titlePre: "AD",
    suffix: [],
  },
  {
    id: 22,
    year: "3501",
    title: "元年",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 23,
    year: "160",
    title: "160",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 24,
    year: "242",
    title: "242",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 25,
    year: "275",
    title: "275",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 26,
    year: "307",
    title: "307",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 27,
    year: "630",
    title: "630",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 28,
    year: "767",
    title: "767",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 29,
    year: "862",
    title: "862",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 30,
    year: "949",
    title: "949",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 31,
    year: "958",
    title: "958",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 32,
    year: "992",
    title: "992",
    titlePre: "NE",
    suffix: [],
  },
  {
    id: 33,
    year: "1012",
    title: "1012",
    titlePre: "NE",
    suffix: [],
  },
]);

export const nextYearAtom = atom((get) => {
  const year = get(yearAtom);
  const timeLine = get(timeLineAtom);
  const index = timeLine.findIndex((item) => item.year === year);
  return timeLine[index + 1]?.year;
});
export const prevYearAtom = atom((get) => {
  const year = get(yearAtom);
  const timeLine = get(timeLineAtom);
  const index = timeLine.findIndex((item) => item.year === year);
  return timeLine[index - 1]?.year;
});

// 定时器
export const timerAtom = atom<number | undefined>(3000);
