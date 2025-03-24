import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContenet from '../comp/MainContenet';
import { Helmet } from "react-helmet-async";
const Javascript = () => {
  return (
    <>
    <Helmet>
    <title>JavaScript Page</title>
    <meta name="Javascript Page" content="This Page View Javascript Page"/>
  </Helmet>
    <Header/>
  <MainContenet PageName="Javascript" />
    <Footer/>
  </>
  );
}

export default Javascript;
