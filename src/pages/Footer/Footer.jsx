import logo from "../../../public/toy-house-logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="logo" />
          <p className="text-xl font-bold">Toy House Ltd.</p>
          <div className="flex gap-1">
            <FaFacebook className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6" />
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
