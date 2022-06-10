import "../hojasDeEstilo/footer.css";
import { BsMouse } from "react-icons/bs";


function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Es todo{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
       {/* <div className="social-links">
        <a href="#">
          <BsInstagram className="social" />
        </a>
        <a href="#">
          {" "}
          <FaFacebookF className="social" />
        </a>
        <a href="#">
          {" "}
          <TiSocialDribbble className="social" />
        </a>

        <a href="#">
          <TiSocialYoutube className="social" />
        </a>

        <a href="#">
          <TiSocialGithub className="social" /> 
        </a>
      </div>*/}
    </div> 
  );
}
export default Footer;