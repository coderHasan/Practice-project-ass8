const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-3 md:px-5">
        <div className="text-center">
          <div className="footer flex items-center justify-between text-center text-black p-10">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </div>
        <p className="text-center pb-4 text-base text-gray-400">
          &copy; 2024Made by Mehedi H.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
