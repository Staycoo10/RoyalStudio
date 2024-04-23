import "./navbar.css";
import "../Footer/footer.css"
export default function Navbar({ handleButtonClick }) {
  return (
    <>
      <nav>
        <div class="nav">
          <img
            src="img/348235784_184011931266196_8181862770752389130_n.png"
            alt="Logo"
            class="logo"
          ></img>
          <div class="nav-links">
            <a href="/" class="nav-link-style">
              Home
            </a>
            <a class="nav-link-style" onClick={handleButtonClick}>
              Studios
            </a>
            <a href="#Contact" class="nav-link-style">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
