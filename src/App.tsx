import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Discography from "./screens/Discography";
import Header from "./screens/Header";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Performance from "./screens/Performance";
import Works from "./screens/Works";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="about" element={ <About /> } />
        <Route path="discography" element={ <Discography /> } />
        <Route path="works" element={ <Works /> } />
        <Route path="performance" element={ <Performance /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="chickencake" element={ <Login /> } />
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
