import Link from "next/link";

const PageBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-banner bg_cover position-relative z-1"
      style={{ backgroundImage: "url(assets/images/bg/page-bg-2.jpg)" }}
    >
      <div className="brand-card text-center">
        <img src="assets/images/icon/favicon.png" alt="icon" />
        <p>CropVigil</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="page-title">
              <h1>{pageTitle ? pageTitle : pageName}</h1>
              <ul className="breadcrumbs-link">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="active">{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
