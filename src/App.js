import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/ContextProvider";
import ServicesMain from "./pages/Services";
import AboutMain from "./pages/About";
import PortfolioMain from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<AboutMain />} />
          <Route path="/portfolio" exact element={<PortfolioMain />} />
          <Route path="/portfolio-details/:id" element={<PortfolioDetails />} />
          <Route path="/services" exact element={<ServicesMain />} />
        </Routes>
      </Router>

    </AppProvider>
  );
};

export default App;
