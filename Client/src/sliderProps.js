import { doAnimations } from "./utils";

const Arrow = ({ arrowCls, onClick, icon }) => {
  return (
    <div className={arrowCls} onClick={onClick}>
      <i className={icon}></i>
    </div>
  );
};
export const heroSliderOne = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 400,
  fade: true,
  autoplay: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <Arrow arrowCls={"prev slick-arrow"} icon={"far fa-arrow-left"} />,
  nextArrow: (
    <Arrow arrowCls={"next slick-arrow"} icon={"far fa-arrow-right"} />
  ),
  responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: false,
      },
    },
  ],
  beforeChange: (current, next) => {
    const sliders = document.querySelectorAll("div.single-slider");
    for (let i = 0; i < sliders.length; i++) {
      const element = sliders[i];
      element.setAttribute(`data-slick-index`, next);
      doAnimations(element);
    }
  },
};
export const projectsSliderOne = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <Arrow arrowCls={"prev slick-arrow"} icon={"far fa-arrow-left"} />,
  nextArrow: (
    <Arrow arrowCls={"next slick-arrow"} icon={"far fa-arrow-right"} />
  ),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialSliderOne = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <Arrow arrowCls={"prev slick-arrow"} icon={"far fa-arrow-left"} />,
  nextArrow: (
    <Arrow arrowCls={"next slick-arrow"} icon={"far fa-arrow-right"} />
  ),
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const logoSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export const recentProductSlider = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const testimonialSliderTwo = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const heroSliderTwo = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  fade: true,
  autoplay: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
  appendDots: (dots) => {
    return (
      <div className="hero-dots">
        <ul>
          {dots.map((item, index) => {
            return <li key={index}>{item.props.children}</li>;
          })}
        </ul>
      </div>
    );
  },
};

export const projectsSliderThree = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export const testimonialSliderFive = {
  arrows: false,
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const projectsSliderTwo = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const serviceSliderOne = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <Arrow arrowCls={"prev slick-arrow"} icon={"far fa-arrow-left"} />,
  nextArrow: (
    <Arrow arrowCls={"next slick-arrow"} icon={"far fa-arrow-right"} />
  ),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
export const testimonialSliderThree = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <Arrow arrowCls={"prev slick-arrow"} icon={"far fa-arrow-left"} />,
  nextArrow: (
    <Arrow arrowCls={"next slick-arrow"} icon={"far fa-arrow-right"} />
  ),
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
