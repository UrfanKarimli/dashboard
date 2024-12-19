import {
  HiSolidUsers,
  BxTrendingUp,
  BxTrendingDown,
  BsBoxFill,
  FlDataTrending,
  CoAvTimer,
} from "@kalimahapps/vue-icons";

export const cards = [
  {
    title: "İstifadəçilər",
    value: "30,650",
    icon: HiSolidUsers,
    iconColor: "text-[#8280FF]",
    bgClass: "bg-[#8280FF] bg-opacity-20",
    trendIcon: BxTrendingUp,
    trendColor: "text-[#00B69B]",
    trend: "8.5%",
    trendText: "Up from yesterday",
  },
  {
    title: "Sifarişlər",
    value: "10,200",
    icon: BsBoxFill,
    iconColor: "text-[#FEC53D]",
    bgClass: "bg-[#FEC53D] bg-opacity-20",
    trendIcon: BxTrendingUp,
    trendColor: "text-[#00B69B]",
    trend: "1.5%",
    trendText: "Up from past week",
  },
  {
    title: "Satışlar",
    value: "$50,000",
    icon: FlDataTrending,
    iconColor: "text-[#4AD991]",
    bgClass: "bg-[#4AD991] bg-opacity-20",
    trendIcon: BxTrendingDown,
    trendColor: "text-[#F93C65]",
    trend: "4.5%",
    trendText: "Down from yesterday",
  },
  {
    title: "Gözlənilənlər",
    value: "1,400",
    icon: CoAvTimer,
    iconColor: "text-[#FF9066]",
    bgClass: "bg-[#FF9066] bg-opacity-20",
    trendIcon: BxTrendingUp,
    trendColor: "text-[#00B69B]",
    trend: "1.5%",
    trendText: "Up from yesterday",
  },
];