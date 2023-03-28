import React from "react";
import MainSection from "./section/MainSection.jsx";
import Footer from "./footer/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="app">
        <MainSection
          heading={"An inspiring design delivered to your inbox every morning"}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
