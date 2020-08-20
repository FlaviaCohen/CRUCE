import React from "react";
import { Switch, Route } from "react-router";
import AdminContainer from "./home/AdminContainer";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Form from "./form/FormContainer";
import GoogleFontLoader from "react-google-font-loader";

const Main = () => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Inter",
          },
        ]}
      />
      <Navbar />
      <Switch>
        <Route path="/add-product" component={Form} />
        <Route path="/edit-product" component={Form} />
        <Route path="/admin-products" component={AdminContainer} />
        <Route path="/" render={() => <Home />} />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
