import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">Services</a>
          <ul className="sub-menu" style={activeLi("Services")}>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/service-details">Service Details</Link>
            </li>
          </ul>
          <span
            className="dd-trigger"
            onClick={() => activeMenuSet("Services")}
          >
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
          <a href="#">Blog</a>
          <ul className="sub-menu" style={activeLi("Blog")}>
            <li>
              <Link href="/blog-standard">Blog Standard</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Blog")}>
            <i className="far fa-angle-down" />
          </span>
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
};
export default MobileHeader;
