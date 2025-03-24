import React from "react";
import Header from "../comp/header";
import Footer from "../comp/footer";
import MainContenet from "../comp/MainContenet";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>Css Page</title>
        <meta name="Css Page" content="This Page View Css Page"/>
      </Helmet>

      <Header />
      <MainContenet PageName="CSS" />
      <Footer />
    </>
  );
};

export default Css;
