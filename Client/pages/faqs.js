import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import OrgariumAcc from "../src/components/OrgariumAcc";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { testimonialSliderThree } from "../src/sliderProps";
const Faqs = () => {
  const faqsData = [
    {
      title: "What is CropVigil and how does it benefit farmers ?",
    },
    { title: "How does CropVigil utilize technology for crop disease detection ?" },
    ,
    { title: "Can CropVigil detect multiple types of crop diseases ?" },
    { title: "What kind of data does CropVigil analyze to ensure crop health ?" },
    { title: "How accurate is CropVigil in detecting crop diseases ?" },
    { title: "Does CropVigil offer real-time monitoring of crop health ?" },
    { title: "Is CropVigil compatible with different types of crops and farming environments ?" },
    { title: "How user-friendly is the CropVigil platform for farmers ?" },
    { title: "Can CropVigil integrate with existing farming equipment and systems ?" },
    { title: "How can farmers access and utilize CropVigil's services and support ?" },
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Faqs"} />
      <section className="faq-section pt-170 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInUp">
                <span className="sub-title">Asked Questions</span>
                <h2>Have Any Question On Minds! Asked Question</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="faq-one_content-box wow fadeInDown">
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="accordionOne"
                >
                  {faqsData.map((faq, i) => (
                    <OrgariumAcc
                      title={faq.title}
                      key={i}
                      event={`collapse${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-two p-r z-1 pt-130">
        <div
          className="contact-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/contact/bg-2.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="offset-lg-6 col-l-g-6">
              <div className="contact-two_content-box p-r z-1 wow fadeInRight">
                <div className="section-title mb-40">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Need CropVigil Help! Send Us Message</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        placeholder="Write Message"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-yellow">
                        Send Us Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-four pt-130 pb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Clients Feedback</span>
                <h2>What’s Our Clients Say About Our CropVigil</h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialSliderThree}
            className="testimonial-slider-three"
          >
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
                  <p className="position">Senior Manager</p>
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
                  <p className="position">Director</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
    </Layout>
  );
};
export default Faqs;
