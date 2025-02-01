import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "tailwindcss/tailwind.css";
import Provider from '../app/redux/provider';
import { SearchProvider } from "./search/searchcontext";



export const metadata: Metadata = {
  title: "Furniro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
           <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            rel="stylesheet"
          />
        </head>
      <body>
        <SearchProvider>
       <Provider>
        <Navbar />
        <div className="flex flex-col items-center">
        {children}
        <Footer />
        </div>        
        </Provider>
        </SearchProvider>
      </body>
    </html>
  );
}
