import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";
import { heroSliderTwo } from "../../sliderProps";
export default class Hero4Slider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="hero-area-four">
        <Slider
          {...heroSliderTwo}
          ref={(c) => (this.slider = c)}
          className="hero-slider-two"
        >
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-four-slider-1.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Fresh Dairy Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Trusted Dairy Farming
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-grid">
                        <a className="main-btn btn-white">Latest Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=gOZ26jO6iXE"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-four-slider-2.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Fresh Dairy Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Trusted Dairy Farming
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-grid">
                        <a className="main-btn btn-white">Latest Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center wow fadeInRight"
                    data-animation="fadeInRight"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=gOZ26jO6iXE"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero-four-slider-3.jpg)",
              }}
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Fresh Dairy Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Trusted Dairy Farming
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-grid">
                        <a className="main-btn btn-white">Latest Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-4">
                  <div
                    className="hero-play-box float-lg-right text-md-center"
                    data-animation="fadeInRight"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=gOZ26jO6iXE"
                      className="video-popup"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="hero-arrows">
          <div className="prev slick-arrow" onClick={this.previous}>
            <i className="far fa-arrow-left" />
          </div>
          <div className="next slick-arrow" onClick={this.next}>
            <i className="far fa-arrow-right" />
          </div>
        </div>
      </section>
    );
  }
}
