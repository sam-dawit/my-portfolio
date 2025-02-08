import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Main from "./components/Main";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index path="/" element={<Main />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
