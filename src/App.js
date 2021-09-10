import React, { useState } from "react";
import Donations from "./Components/Donations/Donations";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactFormSection from "./Components/ContactFrom/ContactFormSection";
import AboutRuben from "./Components/AboutRuben/AboutRuben";
import EmailSub from "./Components/EmailSub/EmailSub";
import PhotoGallery from "./Components/PhotoSlider/PhotoGallery";
import RubensMessage from "./Components/RubensMessage/RubensMessage";
import ScrollToTop from "./ScrollToTop";
import RubenProp from "./Components/RubenProp/RubenProp";
import LawnSign from "./Components/LawnSign/LawnSign";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Helmet } from "react-helmet";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyBhrOy1FKGwhkRvYHVdAnAH9Km3ToQjPt4",
    authDomain: "dr-ruben-rajakumar.firebaseapp.com",
    projectId: "dr-ruben-rajakumar",
    storageBucket: "dr-ruben-rajakumar.appspot.com",
    messagingSenderId: "1086230770861",
    appId: "1:1086230770861:web:b566e18f1156ea53f3c224",
    measurementId: "G-VN083P675K",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Helmet>
            <title>
              Dr. Rajakumar | Liberal Party Candidate for Saskatoon West
            </title>
            <meta
              name="description"
              content="Official website for Dr. Ruben Rajakumar, Liberal party candidate for Saskatoon West"
            />
          </Helmet>
          <ScrollToTop />
          <Hero />
          <EmailSub />
          <AboutRuben />
          <PhotoGallery />
          <RubensMessage />
          <RubenProp />
          <ContactFormSection />
        </Route>
        <Route exact path="/donate">
          <Helmet>
            <title>
              {" "}
              Donate | Dr. Rajakumar | Liberal Party Candidate for Saskatoon
              West
            </title>
            <meta
              name="description"
              content="Donate to Dr. Ruben Rajakumar, liberal party candidate for Saskatoon West"
            />
          </Helmet>
          <ScrollToTop />
          <Donations />
        </Route>
        <Route exact path="/lawnsign">
          <Helmet>
            <title>
              Get a Lawn Sign | Dr. Rajakumar | Liberal Party Candidate for
              Saskatoon West
            </title>
            <meta name="description" content="Get a Lawn Sign" />
          </Helmet>
          <ScrollToTop />
          <LawnSign />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
