import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

import "./globals.css";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <>
      

      <html lang="en">
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
      </html>
    </>
  );
}