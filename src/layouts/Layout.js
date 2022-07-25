import React from "react";
import Header from "@/layouts/components/Header";
import Footer from "@/layouts/components/Footer";
const Layout = ({chilrdren})=>{
  return(
    <>
    <div className="wrapper">
      <Header />
      <div className="container">
          {chilrdren}
      </div>
      <Footer />

    </div>
    </>
  )
}
export default Layout