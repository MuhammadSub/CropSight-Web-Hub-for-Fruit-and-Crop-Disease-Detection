import Link from "next/link";
const Footer = ({ footer }) => {
  switch (footer) {
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => (
  <footer className="footer-default footer-white dark-black-bg">
    <div className="container">
      <div className="footer-top wow fadeInUp">
        <div className="row">
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex justify-content-center">
              <div className="site-logo text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/favicon.png"
                      alt="Footer Logo"
                    />
                    <p>CropVigil</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Locations</h5>
                <h6>University of Engineering and Technology Taxila</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Email Us</h5>
                <h6>
                  <a href="mailto:m.subhan.con@gmail.com">
                    m.subhan.contact@gmail.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget pt-70 pb-25">
        <FooterMenu />
      </div>
      <div className="footer-newsletter footer-newsletter-one text-white wow fadeInUp">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-text">
              <h5>Subscrive To Get More Updates</h5>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="newsletter-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone"
                        name="phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form_group">
                      <button className="main-btn btn-yellow">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2024 CropVigil. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer3 = () => (
  <footer
    className="footer-bg bg_cover p-r z-1 footer-white"
    style={{ backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)" }}
  >
    <div className="container">
      <div className="footer-newsletter footer-newsletter-two yellow-bg">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-text">
              <h5>To Get More Updates</h5>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="newsletter-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone"
                        name="phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form_group">
                      <button className="main-btn bordered-btn">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget pb-25">
        <FooterMenu />
      </div>
      <div className="footer-copyright border-top-white-1">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2024 CropVigil. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer4 = () => (
  <footer className="footer-default footer-white dark-black-bg">
    <div className="container">
      <div className="footer-newsletter footer-newsletter-two yellow-bg">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-text">
              <h5>Subscrive To Get More Updates</h5>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="newsletter-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone"
                        name="phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form_group">
                      <button className="main-btn bordered-btn">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget pb-25">
        <FooterMenu />
      </div>
      <div className="footer-copyright border-top-white-1">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2024 CropVigil. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const FooterMenu = () => (
  <div className="row">
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
      <div className="footer-widget about-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">About Us</h4>
        <div className="footer-about-content">
          <p>
            Empowering farmers with AI-driven crop and produce health solutions for a sustainable future. 
            CropVigil - Your partner in protecting crops and ensuring food chain efficiency.
          </p>
          <div className="social-box">
            <h4 className="mb-15">Follow On</h4>
            <ul className="social-link">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-lg-4 col-md-7 col-sm-12">
      <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
        <h4 className="widget-title">Services</h4>
        <div className="footer-about-content">
            <ul>
              <li>
                <a href="#">Vegetable Freshness Detection</a>
              </li>
              <li>
                <a href="#">Fruit Freshness Detection</a>
              </li>
              <li>
                <a href="#">Crop Health Surveillance</a>
              </li>
              <li>
                <a href="#">Optimizing Agricultural</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-lg-4 col-md-6 col-sm-12">
      <div className="footer-widget recent-post-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">Our Mission</h4>
        <div className="footer-about-content">
          <p>
            CropVigil mission is to revolutionize agriculture through advanced technology, 
            ensuring sustainable practices and superior produce quality for a healthier world.
          </p>
        </div>
      </div>
    </div>
  </div>
);
