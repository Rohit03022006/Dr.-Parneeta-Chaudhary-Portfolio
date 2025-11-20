import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: "Dr. Parneeta Chaudhary - Portfolio",
  description: "Assistant Professor & Ph.D. Biotechnology",
  keywords: "biotechnology, research, professor, bioinformatics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased leading-6 overflow-x-hidden bg-[#131515]">
        {children}
      </body>
    </html>
  );
}