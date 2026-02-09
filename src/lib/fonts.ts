import { Nanum_Myeongjo, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";

// Load the San Francisco Pro font from the local public directory
export const sanFranciscoPro = localFont({
  src: "../../public/fonts/san-francisco-pro/SF-Pro.ttf",
  variable: "--font-sf-pro", // This creates a CSS variable for the font
  display: "swap", // This ensures text remains visible during font loading
});

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const sourceCodePro = Source_Code_Pro({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
