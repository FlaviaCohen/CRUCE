import React from "react";
import { Switch, Route } from "react-router";
import HomeContainer from "./home/HomeContainer"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import Form from "./form/FormContainer"

const Main = () => {
  return (
    <>
    <Navbar/>
      <Switch>
          <Route path='/add-product' component={Form}/>
          <Route path='/edit-product' component={Form}/>
          <Route path='/' component={HomeContainer}/>
      </Switch>
    <Footer/>
    </>
  );
};

export default Main