import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journal",
  description: "Journaling app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
        {/* header */}
        <main>{children}</main>
        <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>Made with 💗 by KirankumarJM</p>
            </div>
          </footer>
      </body>
    </html>
  );
}
