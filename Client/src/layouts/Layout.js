import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
const Layout = ({ children, header, footer }) => {
  useEffect(() => {
    animation();
    niceSelect({ withoutwide: true });
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Header header={header} />
      {children}
      <Footer footer={footer} />
      <ScrollTop />
    </Fragment>
  );
};
export default Layout;
