
import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

      </body>
    </html >
  );
}
