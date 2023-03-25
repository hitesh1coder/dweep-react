import React from "react";
import MainSection from "./section/MainSection.jsx";
import Footer from "./footer/Footer.jsx";

const App = () => {
  let links = {
    link1: "Prompt Generator",
    link2: "Dweep Daily",
    link3: "All Contributors",
    link4: "Your data on Dweep.io",
    link5: "Contribute to Dweep",
  };
  return (
    <>
      <div className="app">
        <MainSection
          heading={"An inspiring design delivered to your inbox every morning"}
        />
        <Footer {...links} />
      </div>
    </>
  );
};

export default App;
