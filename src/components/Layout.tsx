import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='container px-4 py-8 lg:px-8'>{children}</main>
      <Footer />
    </>
  );
}
