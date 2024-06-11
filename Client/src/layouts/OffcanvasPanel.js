import Link from "next/link";
const OffcanvasPanel = ({ overlyPanel, togglePanel }) => {
  return (
    <div className={`offcanvas-panel ${overlyPanel ? "panel-on" : ""}`}>
      <div className="panel-overlay" onClick={() => togglePanel()} />
      <div className="offcanvas-panel-inner">
        <div className="panel-logo">
          <Link href="/">
            <a>
              <img src="assets/images/logo/logo-1.png" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="about-us">
          <h5 className="panel-widget-title">About Us</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            ipsam alias quae cupiditate quas, neque eum magni impedit
            asperiores.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="panel-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="fal fa-map-marker-alt" />
              121 King St, Melbourne VIC 3000, Australia.
            </li>
            <li>
              <i className="fal fa-envelope-open" />
              <a href="mailto:hello@barky.com"> hello@barky.com</a>
              <a href="mailto:info@barky.com">info@barky.com</a>
            </li>
            <li>
              <i className="fal fa-phone" />
              <a href="tel:(312)-895-9800">(312) 895-9800</a>
              <a href="tel:(312)-895-9888">(312) 895-9888</a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="panel-close"
          onClick={(e) => {
            e.preventDefault();
            togglePanel();
          }}
        >
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default OffcanvasPanel;
