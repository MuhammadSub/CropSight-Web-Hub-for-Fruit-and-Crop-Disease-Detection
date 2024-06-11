import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });
  const thumbs = {
    dots: false,
    autoplay: true,
    speed: 800,
    speed: 500,
    arrows: false,
    focusOnSelect: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
    ],
  };
  const slider = {
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <Slider
          {...slider}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          className="testimonial-slider-four wow fadeInDown"
        >
          <div className="testimonial-item-three d-flex">
            <div className="author-thumb">
              <img src="assets/images/testimonial/subhantest.jpeg" alt="" />
            </div>
            <div className="testimonial-content">
              <p>
                With CropVigil services, farmers are empowered with state-of-the-art technology dedicated 
                to crop disease detection and management. By leveraging advanced tools and techniques, 
                we enable farmers to identify and address potential threats to their crops with greater 
                accuracy and efficiency. This not only enhances agricultural productivity but also ensures 
                the sustainable management of resources, leading to improved yields and economic outcomes 
                for farming communities.
              </p>
              <div className="author-title-qoute d-flex">
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
        </Slider>
      </div>
    </div>
  );
};
export default TestimonialSlider;
