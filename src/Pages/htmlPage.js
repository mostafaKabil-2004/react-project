import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContenet from '../comp/MainContenet';
import { Helmet } from "react-helmet-async";
const Html = () => {
  return (
    <>

    <Helmet>
    <title>Html Page</title>
    <meta name="Html Page" content="This Page View Html Page"/>
  </Helmet>
    <Header/>
    <MainContenet PageName="HTML"/>
  <Footer/>
  </>
  );
}

export default Html;
