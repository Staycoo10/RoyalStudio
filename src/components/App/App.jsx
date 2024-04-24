import "./app.css";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slideshow from "../Slideshow/Slideshow";
import Team from "../Team/Team";
import About from "../About/About";
import Studios from "../Studios/studios";
export default function App() {
  const [showPage, setshowPage] = useState(false);
  const handleButtonClick = () => {
    setshowPage(true);
  };
  return (
    <div className="App">
      <Navbar handleButtonClick={handleButtonClick} />
      {showPage === false && (
        <>
          <Slideshow />
          <About />
          <Team />
        </>
      )}

      {showPage && <>{
        <Studios />
      }</>}
      <Footer />
    </div>
  );
}
