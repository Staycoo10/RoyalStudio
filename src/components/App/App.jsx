import "./app.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slideshow from "../Slideshow/Slideshow";
import Team from "../Team/Team";
import About from "../About/About";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
