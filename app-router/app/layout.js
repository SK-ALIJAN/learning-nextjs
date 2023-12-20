import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food app",
  description: "This is food app where i can find food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
