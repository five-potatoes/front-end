import React from "react";
import "../styles/Main.css";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Header />

      <div id="main">
        <div className="container">
          <section className="left">
            <div className="original"></div>
          </section>
          <section className="right">
            <div className="translation"></div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
