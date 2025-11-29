import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
});

export const metadata = {
  title: {
    default: "Dr. Parneeta Chaudhary - Portfolio",
    template: "%s | Dr. Parneeta Chaudhary"
  },
  description: "Assistant Professor & Ph.D. in Biotechnology. Dedicated educator and researcher passionate about advancing biotechnology through innovative research and quality education.",
  keywords: "biotechnology, research, professor, bioinformatics, plant molecular biology, proteomics, sustainable packaging, academic portfolio",
  authors: [{ name: "Dr. Parneeta Chaudhary" }],
  creator: "Dr. Parneeta Chaudhary",
  publisher: "Dr. Parneeta Chaudhary",
  // metadataBase: new URL('https://dr-parneeta-chaudhary.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    // url: 'https://dr-parneeta-chaudhary.vercel.app', 
    title: "Dr. Parneeta Chaudhary - Portfolio",
    description: "Assistant Professor & Ph.D. in Biotechnology. Dedicated educator and researcher passionate about advancing biotechnology.",
    siteName: "Dr. Parneeta Chaudhary Portfolio",
    
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
      </head>
      <body className={`font-sans antialiased leading-6 bg-[#131515] text-[#FFFAFB] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}