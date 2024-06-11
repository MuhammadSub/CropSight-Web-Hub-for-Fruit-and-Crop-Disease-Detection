import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import useWindowSize from "../useWindowSize";
import { stickyNav } from "../utils";
import MobileHeader from "./MobileHeader";
import OffcanvasPanel from "./OffcanvasPanel";

const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);
  const [overlayPanel, setOverlayPanel] = useState(false);
  const togglePanel = () => setOverlayPanel(!overlayPanel);

  const { width } = useWindowSize();

  useEffect(() => {
    const headers = document.querySelectorAll(".header-navigation");
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add("breakpoint-on");
      } else {
        header.classList.remove("breakpoint-on");
      }
      // toggle
      const toggleBtn = header.getElementsByClassName("navbar-toggler")[0],
        overlay = header.getElementsByClassName("nav-overlay")[0],
        menu = header.getElementsByClassName("nav-menu")[0];
      toggleBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        menu.classList.add("menu-on");
      });
      overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        menu.classList.remove("menu-on");
      });
    });
  }, [width]);

  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return (
        <Header3
          overlayPanel={overlayPanel}
          togglePanel={() => togglePanel()}
        />
      );
    case 4:
      return (
        <Header4
          overlayPanel={overlayPanel}
          togglePanel={() => togglePanel()}
        />
      );
    default:
      return <DefaultHeader />;
  }
};
export default Header;

const Header1 = () => (
  <header className="header-area">
    <div className="header-top-bar top-bar-one dark-black-bg">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-left d-flex align-items-center">
              <span className="text">
                Welcome to CropVigil </span> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text"> Sustainable agriculture for a healthier world 
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-right">
              <span className="text">
                <i className="fas fa-map-marker-alt" />
                Location: University of Engineering and Technology Taxila
              </span>
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
    </div>
    <div className="header-middle">
      <div className="container-1350">
        <div className="row align-items-center">
          <div className="col-xl-4 d-xl-block d-lg-none">
            <div className="site-branding d-lg-block d-none">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12">
            <div className="contact-information">
              <div className="information-item_one d-flex">
                <div className="icon">
                  <i className="flaticon-placeholder" />
                </div>
                <div className="info">
                  <h5 className="mb-1">Locations</h5>
                  <p>University of Engineering and Technology Taxila</p>
                </div>
              </div>
              <div className="information-item_one d-flex">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="info">
                  <h5 className="mb-1">Email Us</h5>
                  <p>
                    <a href="mailto:m.subhan.con@gmail.com">
                      m.subhan.con@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="button text-md-right text-sm-center">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header-navigation navigation-one">
      <div className="nav-overlay" />
      <div className="container-1350">
        <div className="primary-menu">
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
              </a>
            </Link>
          </div>
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                  </a>
                </Link>
              </div>
              {/*=== Main Menu ===*/}
              <Menu />
              <MobileHeader />
            </div>
            {/*=== Nav Right Item ===*/}
            <div className="nav-right-item">
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header2 = () => (
  <header className="header-area">
    <div className="header-top-bar top-bar-one dark-black-bg">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-left d-flex align-items-center">
              <span className="text">
                Welcome to CropVigil </span> &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text"> Sustainable agriculture for a healthier world</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-right">
              <span className="text">
              <i className="fas fa-map-marker-alt" />
                Location: University of Engineering and Technology Taxila
              </span>
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
    </div>
    <div className="header-navigation navigation-two">
      <div className="nav-overlay" />
      <div className="container-fluid">
        <div className="primary-menu">
          <div className="site-branding d-lg-block d-none">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                </a>
              </Link>
            </div>
          <div className="nav-inner-menu">
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                  </a>
                </Link>
              </div>
              {/*=== Navbar Call Button ===*/}
              <div className="call-button text-center">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+923445559784">+92 344 5559782</a>
                </span>
              </div>
              {/*=== Main Menu ===*/}
              <Menu />
              <MobileHeader />
              {/*=== Navbar Menu Button ===*/}
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
            </div>
            {/*=== nav Right Item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="call-button">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+923445559784">+92 344 5559782</a>
                </span>
              </div>
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Header3 = ({ overlayPanel, togglePanel }) => (
  <Fragment>
    <OffcanvasPanel overlyPanel={overlayPanel} togglePanel={togglePanel} />
    <header className="header-area">
      {/* Header Navigation */}
      <div className="header-navigation navigation-three">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/* Site Branding */}
            <div className="site-branding">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                </a>
              </Link>
              <Link href="/">
                <a className="sticky-logo">
                  <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                </a>
              </Link>
            </div>
            {/* Nav inner Menu */}
            <div className="nav-inner-menu">
              {/* Nav Menu */}
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/favicon.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Navbar Call Button ===*/}
                <div className="call-button text-center">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+923445559784">+92 344 5559782</a>
                  </span>
                </div>
                {/*=== Main Menu ===*/}
                <Menu />
                <MobileHeader />
                {/*=== Navbar Menu Button ===*/}
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn btn-yellow">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*=== Nav Right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="call-button">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+923445559784">+92 344 5559782</a>
                  </span>
                </div>
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn btn-yellow">Get a Quote</a>
                  </Link>
                </div>
                <div className="bar-item">
                  <a className="c-pointer" onClick={() => togglePanel()}>
                    <img src="assets/images/bar.png" alt="" />
                  </a>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Fragment>
);

const Header4 = ({ overlayPanel, togglePanel }) => (
  <Fragment>
    <OffcanvasPanel overlyPanel={overlayPanel} togglePanel={togglePanel} />
    <header className="header-area">
      <div className="header-top-bar top-bar-two dark-black-bg">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-6">
              <div className="top-bar-left d-flex align-items-center">
              <span className="text">
                Welcome to CropVigil
              </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-6">
              <div className="top-bar-right">
                <span className="text">
                  <i className="fas fa-map-marker-alt" />
                    Location: University of Engineering and Technology Taxila
                </span>
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
      </div>
      <div className="header-navigation navigation-four">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="site-branding">
              <Link href="/">
                <a className="brand-logo">
                  <img src="assets/images/logo/favicon.png" alt="Site Logo" />
                </a>CropVigil
              </Link>
              <Link href="/index-4">
                <a className="sticky-logo">
                  <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                </a>
              </Link>
            </div>
            <div className="nav-inner-menu">
              <div className="bar-item">
                <a className="c-pointer" onClick={() => togglePanel()}>
                  <img src="assets/images/bar-2.png" alt="" />
                </a>
              </div>
              <div className="nav-menu">
                {/*=== Mobile Logo ===*/}
                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/favicon.png"
                        alt="Site Logo"
                      />CropVigil
                    </a>
                  </Link>
                </div>
                {/*=== Navbar Call Button ===*/}
                <div className="call-button text-center">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+923445559784">+92 344 5559782</a>
                  </span>
                </div>
                {/*=== Main Menu ===*/}
                <Menu />
                <MobileHeader />
                {/*=== Navbar Menu Button ===*/}
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn bordered-btn">Get a Quote</a>
                  </Link>
                </div>
              </div>
              {/*=== Nav Right Item ===*/}
              <div className="nav-right-item d-flex align-items-center">
                <div className="call-button">
                  <span>
                    <i className="far fa-phone" />
                    <a href="tel:+923445559784">+92 344 5559782</a>
                  </span>
                </div>
                <div className="menu-button">
                  <Link href="/contact">
                    <a className="main-btn bordered-btn bordered-yellow">
                      Get a Quote
                    </a>
                  </Link>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Fragment>
);

const DefaultHeader = () => (
  <header className="header-area">
    <div className="header-top-bar top-bar-one dark-black-bg">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-left d-flex align-items-center">
              <span className="text">
                Welcome to CropVigil </span> &nbsp;&nbsp;|&nbsp;&nbsp; 
              <span className="text"> 
                Sustainable agriculture for a healthier world 
              </span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-6">
            <div className="top-bar-right">
              <span className="text">
                <i className="fas fa-map-marker-alt" />
                Location: University of Engineering and Technology Taxila
              </span>
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
    </div>
    {/* Header Navigation */}
    <div className="header-navigation navigation-three">
      <div className="nav-overlay" />
      <div className="container-fluid">
        <div className="primary-menu">
          {/* Site Branding */}
          <div className="site-branding">
            <Link href="/">
              <a className="brand-logo">
                <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
              </a>
            </Link>
            <Link href="/">
              <a className="sticky-logo">
                <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
              </a>
            </Link>
          </div>
          {/* Nav inner Menu */}
          <div className="nav-inner-menu">
            {/* Nav Menu */}
            <div className="nav-menu">
              {/*=== Mobile Logo ===*/}
              <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img src="assets/images/logo/favicon.png" alt="Site Logo" />CropVigil
                  </a>
                </Link>
              </div>
              {/*=== Navbar Call Button ===*/}
              <div className="call-button text-center">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+923445559784">+92 344 5559782</a>
                </span>
              </div>
              {/*=== Main Menu ===*/}
              <Menu />
              <MobileHeader />
              {/*=== Navbar Menu Button ===*/}
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
            </div>
            {/*=== Nav Right Item ===*/}
            <div className="nav-right-item d-flex align-items-center">
              <div className="call-button">
                <span>
                  <i className="far fa-phone" />
                  <a href="tel:+923445559784">+92 344 5559782</a>
                </span>
              </div>
              <div className="menu-button">
                <Link href="/contact">
                  <a className="main-btn btn-yellow">Get a Quote</a>
                </Link>
              </div>
              <div className="bar-item">
                <a href="#">
                  <img src="assets/images/bar.png" alt="" />
                </a>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Menu = () => (
  <nav className="main-menu d-none d-xl-block">
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/faqs">Faq</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);
