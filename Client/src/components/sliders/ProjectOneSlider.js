import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";
import { projectsSliderOne } from "../../sliderProps";
export default class ProjectOneSlider extends Component {
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
      <section className="projects-section pt-130 pb-95 p-r z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-9">
              <div className="section-title section-title-left mb-60 wow fadeInLeft">
                <span className="sub-title">Project Gallery</span>
                <h2>
                  We’ve Done Many Other Projects Let’s See Gallery Insights
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="project-arrows mb-60 float-md-right wow fadeInRight">
                <div className="prev slick-arrow" onClick={this.previous}>
                  <i className="far fa-angle-left" />
                </div>
                <div className="next slick-arrow" onClick={this.next}>
                  <i className="far fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <Slider
            ref={(c) => (this.slider = c)}
            {...projectsSliderOne}
            className="projects-slider-one"
          >
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-1.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-2.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/portfolio/img-3.jpg"
                  alt="Gallery Image"
                />
                <div className="hover-portfolio">
                  <div className="hover-content">
                    <h3 className="title">
                      <Link href="/portfolio-details">
                        <a>Golder Wheat</a>
                      </Link>
                    </h3>
                    <p>
                      <a href="#">Agriculture</a>,<a href="#">Foods</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
