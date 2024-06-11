import Link from "next/link";
import Slider from "react-slick";
import OrgariumCounter from "../src/components/OrgariumCounter";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layouts/Layout";
import { logoSlider, testimonialSliderOne } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-section p-r z-1 pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
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
                <div className="choose-item-list wow fadeInDown">
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>100% Healthy Foods</h5>
                      <p>
                      CropVigil guarantees 100% healthy foods, meticulously cultivated and monitored using cutting-edge agricultural 
                      technology, for a nourished and thriving global community.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="single-choose-item mb-30">
                    <div className="text">
                      <h5>Precision Farming</h5>
                      <p>
                      Precision farming involves leveraging advanced technologies like GPS, sensors, and 
                      data analytics to optimize agricultural practices, ensuring maximum efficiency, sustainability, 
                      and productivity across crops and farmlands.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link href="/about">
                    <a className="main-btn btn-yellow">Learn More Us</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInRight">
                <img
                  src="assets/images/about/img-2.jpg"
                  className="about-img_one"
                  alt=""
                />
                <img
                  src="assets/images/about/4.jpg"
                  className="about-img_two"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Why choose Section ======*/}
      <section className="why-choose-two p-r z-1 pt-50 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-12">
              <div className="choose-two_content-box">
                <div className="section-title section-title-left mb-40 wow fadeInLeft">
                  <span className="sub-title">Why Choose Us</span>
                  <h2>Very Much Professional Growing Company</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              <div className="row pl-lg-70">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInUp">
                    <ProgressBar value={84} color="#eece38" />
                    <div className="text">
                      <h5>Vegetable Freshness Detection</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInDown">
                    <ProgressBar value={91} color="#eece38" />
                    <div className="text">
                      <h5>Crop Disease Detection System</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single-chart-item text-center mb-40 wow fadeInUp">
                    <ProgressBar value={73} color="#eece38" />
                    <div className="text">
                      <h5>Fruit Freshness Detection</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Why choose Section ======*/}
      {/*====== Start Partners Section ======*/}
      <section className="partners-section">
        <div className="container-1350">
          <div className="partners-wrap-two yellow-bg pb-60 pt-50 p-r z-1">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-30 wow fadeInUp">
                  <h4>We Have More Then 100+ Global Partners</h4>
                </div>
              </div>
            </div>
            <Slider
              {...logoSlider}
              className="partner-slider-one wow fadeInDown"
            >
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-1.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-2.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-3.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-4.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-5.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-6.png"
                    alt="partner image"
                  />
                </div>
              </div>
              <div className="partner-item">
                <div className="partner-img">
                  <img
                    src="assets/images/partner/img-3.png"
                    alt="partner image"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>{" "}
      {/*====== End Partners Section ======*/}
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
                <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section pt-130">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Clients Say About Our CropVigil</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSliderOne} className="testimonial-slider-one">
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/subhan1.png"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “With CropVigil services, farmers gain access to advanced technology for crop 
                  disease detection and management, enhancing agricultural productivity.”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Muhammad Subhan</h4>
                  <p className="position">CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/subhan2.png"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “CropVigil provides a comprehensive solution that integrates machine learning 
                  to revolutionize crop health monitoring, benefiting both farmers and consumers.”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Subhan Ali</h4>
                  <p className="position">Director</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/ali.png"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “I have been incredibly impressed with CropVigil innovative approach to crop management. 
                  Their technology has truly revolutionized the way approach agriculture.”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Ali Raza</h4>
                  <p className="position">Agricultural Scientist</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInUp">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/sufi.png"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “CropVigil platform has been invaluable for optimizing our crop yield. 
                  Their dedication to technological advancement is truly commendable.”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Sufyan</h4>
                  <p className="position">Farm Owner</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item text-center wow fadeInDown">
              <div className="author-thumb">
                <img
                  src="assets/images/testimonial/jerry.png"
                  alt="author Image"
                />
              </div>
              <div className="testimonial-content">
                <p>
                  “CropVigil commitment to sustainability and precision agriculture is unmatched. 
                  Their platform has been instrumental in optimizing our farming practices.”{" "}
                </p>
                <div className="quote">
                  <i className="fas fa-quote-right" />
                </div>
                <div className="author-title">
                  <h4>Jawad Asghar</h4>
                  <p className="position">Environmental Scientist</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Counter Section ======*/}
      <section className="fun-fact-one pt-30 pb-130">
        <div className="big-text mb-75 wow fadeInUp">
          <h2>Statistics</h2>
        </div>
        <div className="container">
          <div className="counter-wrap-one wow fadeInDown">
            <div className="counter-inner-box">
              <OrgariumCounter />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
