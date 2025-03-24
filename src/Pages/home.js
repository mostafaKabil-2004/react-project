import React from "react";
import Header from "../comp/header";
import MainContenet from "../comp/MainContenet";
import Footer from "../comp/footer";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>

    <Helmet>
    <title>Home Page</title>
    <meta name="Home Page" content="This Page View Home Page"/>
  </Helmet>
      <Header />
      <MainContenet PageName="Home"/>
      <Footer />
    </>
  );
};

export default Home;
