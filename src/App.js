import Footer from "./components/Footer/Footer";
import  Main  from "./components/Home/Main";
import Navbar from "./components/Navbar/Navbar";
import 'react-material-symbols/outlined';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./components/Projects/Projects";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
