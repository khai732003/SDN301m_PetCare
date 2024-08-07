import HomePage from "@/page/home";
import SilderBar from "@/page/layout/App";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "KAH PetCare",
  description: "Generated by create next app",
  icons: {
    icon: "public/images/favicon.ico", 
  },
};

export default function DashBoardLayout({
  children,
  room,
  topPackages,
}: Readonly<{
  room: React.ReactNode;
  children: React.ReactNode;
  topPackages: React.ReactNode;
}>) {
  return (
    <HomePage>
      {children}
      {topPackages}
      {room}
    </HomePage>
  );
}
