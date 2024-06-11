import Link from "next/link";
import Slider from "react-slick";
import { OrgariumCounter2 } from "../src/components/OrgariumCounter";
import Layout from "../src/layouts/Layout";
import {
  heroSliderOne,
  logoSlider,
  recentProductSlider,
  testimonialSliderTwo,
} from "../src/sliderProps";
const Index2 = () => {
  return (
    <Layout header={2}>
      <section className="hero-area-two">
        <Slider {...heroSliderOne} className="hero-slider-one">
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/Fresh.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-content-inner">
                    <div className="hero-content text-center">
                      <span
                        className="tag-line"
                        data-animation="fadeInDown"
                        data-delay=".4s"
                      >
                        CropVigil
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".5s">
                        Organic &amp; Fresh Testy Foods
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link href="/about">
                          <a className="main-btn btn-yellow">Learn About Us</a>
                        </Link>
                        <Link href="/services">
                          <a className="main-btn bordered-btn">
                            Services
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/agriculture.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-content-inner">
                    <div className="hero-content text-center">
                      <span
                        className="tag-line"
                        data-animation="fadeInDown"
                        data-delay=".4s"
                      >
                        CropVigil
                      </span>
                      <h1 data-animation="fadeInUp" data-delay=".5s">
                        Agriculture &amp; Organic Farms
                      </h1>
                      <div
                        className="hero-button"
                        data-animation="fadeInDown"
                        data-delay=".6s"
                      >
                        <Link href="/about">
                          <a className="main-btn btn-yellow">Learn About Us</a>
                        </Link>
                        <Link href="/services">
                          <a className="main-btn bordered-btn">
                            Services
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End About section ======*/}
      {/*====== Start About section ======*/}
      <section className="about-section overflow-hidden pt-130 pb-80 p-r z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap pr-lg-70 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Us</span>
                  <h2>Leading the Way in Agriculture &amp; Technology</h2>
                </div>
                <p>
                At CropVigil, we lead the charge in agricultural innovation, leveraging cutting-edge organic technology 
                to redefine farming practices. Our mission is to revolutionize the industry, promoting sustainability 
                through advanced solutions tailored for modern agriculture. With a focus on pioneering organic technology, 
                we aim to empower farmers with tools for enhanced productivity and environmental stewardship. Join us in 
                shaping the future of farming through innovation and sustainability.
                </p>
                <div className="skill-bar wow fadeInDown">
                  <div className="skill-title">
                    <h5>
                      Precision Farming<span>90%</span>
                    </h5>
                  </div>
                  <div
                    className="progress-bar wow slideInLeft"
                    style={{ width: "90%" }}
                  />
                  <div className="progress" />
                </div>
                <div className="skill-bar wow fadeInUp">
                  <div className="skill-title">
                    <h5>
                      Healthy Foods<span>95%</span>
                    </h5>
                  </div>
                  <div
                    className="progress-bar wow slideInLeft"
                    style={{ width: "95%" }}
                  />
                  <div className="progress" />
                </div>
                <div className="about-button mt-60 wow fadeInDown">
                  <Link href="/about">
                    <a className="main-btn bordered-btn">Learn More Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two_image-box p-r z-1 mb-50 wow fadeInRight">
                <img src="assets/images/about/about-2.png" alt="" />
                <div className="theme-user-card bg-white">
                  <h3>Agriculture &amp; Technology</h3>
                  <img src="assets/images/subhan.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About section ======*/}
      {/*====== Start Category section ======*/}
      <section className="category-one p-r z-1 pt-120">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Precision Farming</span>
                <h2>What We Provide For Your Better Agriculture</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-category-item mb-25 wow fadeInDown">
                <div className="category-img">
                  <img src="assets/images/category/freshveg.jpg" alt="category" />
                </div>
                <div className="category-info d-flex justify-content-between align-items-center">
                  <h3 className="title">
                    <a href="#">Vegetable Freshness Detection</a>
                  </h3>
                  <a href="#" className="arrow-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-category-item mb-25 wow fadeInUp">
                <div className="category-img">
                  <img src="assets/images/category/frestfruit.jpg" alt="category" />
                </div>
                <div className="category-info d-flex justify-content-between align-items-center">
                  <h3 className="title">
                    <a href="#">Fruit Freshness Detection</a>
                  </h3>
                  <a href="#" className="arrow-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-category-item mb-25 wow fadeInDown">
                <div className="category-img">
                  <img src="assets/images/category/cropdisease.jpg" alt="category" />
                </div>
                <div className="category-info d-flex justify-content-between align-items-center">
                  <h3 className="title">
                    <a href="#">Crop Health Surveillance</a>
                  </h3>
                  <a href="#" className="arrow-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="single-category-item mb-25 wow fadeInUp">
                <div className="category-img">
                  <img src="assets/images/category/planthealth.jpg" alt="category" />
                </div>
                <div className="category-info d-flex justify-content-between align-items-center">
                  <h3 className="title">
                    <a href="#">Optimizing Agricultural</a>
                  </h3>
                  <a href="#" className="arrow-btn">
                    <i className="far fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Category section ======*/}
      {/*====== Start Offer section ======*/}
      <section
        className="intro-video-one bg_cover p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/intro-bg-2.jpg)" }}
      >
        <div className="container-1350">
          <div className="services-wrap-one yellow-bg pt-65 pb-45 p-r z-1">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <div className="section-title text-center mb-50 wow fadeInUp">
                  <span className="sub-title">What We Offers</span>
                  <h2>People Choose Us For Our Great Offers</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12">
            <div className="play-content-box text-center wow fadeInDown">
              <a
                href="https://www.youtube.com/watch?v=UBoEYY6JRK8&pp=ygUWYWdyaWN1bHR1cmUgdGVjaG5vbG9neQ%3D%3D"
                className="video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="counter-wrap-two text-white pt-35 wow fadeInUp">
          <div className="container">
            <OrgariumCounter2 />
          </div>
        </div>
      </section>
      {/*====== End Offer section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-two dark-black-bg p-r z-1 pt-130 pb-90">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/tree3.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title section-title-white section-title-left pr-lg-70 mb-40 wow fadeInLeft">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Client Say About CropVigil</h2>
              </div>
              <div className="testimonial-dots mb-40" />
            </div>
            <div className="col-lg-7">
              <Slider
                {...testimonialSliderTwo}
                className="testimonial-slider-two mb-40 wow fadeInRight"
              >
                <div className="testimonial-item-two d-flex">
                  <div className="author-thumb">
                    <img src="assets/images/testimonial/subhantest.jpeg" alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “With CropVigil services, farmers gain access to advanced technology for crop 
                      disease detection and management, enhancing agricultural productivity.”
                    </p>
                    <div className="author-title-quote d-flex">
                      <div className="quote">
                        <i className="fas fa-quote-right" />
                      </div>
                      <div className="author-title">
                        <h4>Muhammad Subhan</h4>
                        <p className="position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-two d-flex">
                  <div className="author-thumb">
                    <img src="assets/images/testimonial/subhantest2.jpg" alt="" />
                  </div>
                  <div className="testimonial-content">
                    <p>
                      “CropVigil provides a comprehensive solution that integrates machine learning 
                      to revolutionize crop health monitoring, benefiting both farmers and consumers.”
                    </p>
                    <div className="author-title-quote d-flex">
                      <div className="quote">
                        <i className="fas fa-quote-right" />
                      </div>
                      <div className="author-title">
                        <h4>Subhan Ali</h4>
                        <p className="position">Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Why Choose Section ======*/}
      <section className="why-choose-one p-r z-1 pt-130">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-one_img-box p-r mb-40 wow fadeInLeft">
                <img
                  src="assets/images/choose/img-1.jpg"
                  className="choose-img_one"
                  alt=""
                />
                <img
                  src="assets/images/choose/img-2.jpg"
                  className="choose-img_two"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-one_content-box pl-lg-70 mb-40">
                <div className="section-title section-title-left mb-40 wow fadeInDown">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Trusted Advanced Agriculture Technology - CropVigil</h2>
                </div>
                <div className="choose-item-list wow fadeInUp">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>100% Crop Disease Detection</h5>
                      <p>
                      Advanced technology ensures comprehensive crop disease 
                      detection for optimal agricultural health.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Fruit Freshness Detection</h5>
                      <p>
                      State-of-the-art systems precisely assess the freshness of 
                      fruits, ensuring quality and satisfaction.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Vegetable Freshness Detection</h5>
                      <p>
                      Cutting-edge technology accurately evaluates the freshness 
                      of vegetables, guaranteeing optimal quality and taste.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="choose-button wow fadeInUp">
                  <Link href="/about">
                    <a className="main-btn bordered-btn bordered-yellow">
                      Learn About Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Why Choose Section ======*/}
      {/*====== Start Farmers Section ======*/}
      <section className="farmers-team_two light-gray-bg pb-90">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Our Team</span>
                <h2>We Have Lot’s Of Experience Team Members</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-button float-lg-right mb-60 wow fadeInRight">
                <Link href="/about">
                  <a className="main-btn bordered-btn bordered-yellow">
                    Learn About Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/subhantest.jpeg" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/about">
                      <a>Muhammad Subhan</a>
                    </Link>
                  </h3>
                  <p className="position">Team Head</p>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/jawad.png" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/about">
                      <a>Jawad Asghar</a>
                    </Link>
                  </h3>
                  <p className="position">Team Member</p>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInUp">
                <div className="member-img">
                  <img src="assets/images/team/sufi.png" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/about">
                      <a>Sufyan Iqbal</a>
                    </Link>
                  </h3>
                  <p className="position">Team Member</p>
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
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="team-member_one text-center mb-40 wow fadeInDown">
                <div className="member-img">
                  <img src="assets/images/team/wahab.png" alt="" />
                </div>
                <div className="member-info">
                  <h3 className="title">
                    <Link href="/about">
                      <a>Abdul Wahab</a>
                    </Link>
                  </h3>
                  <p className="position">Team Member</p>
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
      </section>
      {/*====== End Farmers Section ======*/}
    </Layout>
  );
};
export default Index2;
