import { useEffect } from "react";
import { scrollTopFun } from "../utils";

const ScrollTop = () => {
  useEffect(() => {
    scrollTopFun();
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className="back-to-top"
      onClick={() => onClick()}
      id="scroll-top"
      style={{ display: "inline-block" }}
    >
      <i className="far fa-angle-up" />
    </a>
  );
};
export default ScrollTop;
