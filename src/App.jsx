// State
import { useState } from "react";
// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Projects from "./Components/pages/Projects";
import Articles from "./Components/pages/Articles";

// Common Components
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";
import Settings from "./Components/common/Settings";

const App = () => {

  const [colorTheme, setColorTheme] = useState('theme-white');

  return (
    <Router>
      <div className={`app ${colorTheme}`}>
      <Header />
      <Settings colorTheme={colorTheme} setColorTheme={setColorTheme}/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="articles" element={<Articles />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
};

export default App;
