"use strict";
exports.id = 460;
exports.ids = [460];
exports.modules = {

/***/ 8974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-nice-select"
var external_react_nice_select_ = __webpack_require__(9051);
var external_react_nice_select_default = /*#__PURE__*/__webpack_require__.n(external_react_nice_select_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layouts/Footer.js


const Footer = ({ footer  })=>{
    switch(footer){
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {});
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer4, {});
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {});
    }
};
/* harmony default export */ const layouts_Footer = (Footer);
const DefaultFooter = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer-default footer-white dark-black-bg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-top wow fadeInUp",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-12 footer-contact-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "contact-info d-flex justify-content-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "site-logo text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "brand-logo",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/favicon.png",
                                                        alt: "Footer Logo"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: "CropVigil"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-12 footer-contact-item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-info d-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "flaticon-placeholder"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Locations"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: "University of Engineering and Technology Taxila"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-md-12 footer-contact-item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-info d-flex",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "flaticon-placeholder"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    children: "Email Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "mailto:m.subhan.con@gmail.com",
                                                        children: "m.subhan.contact@gmail.com"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-widget pt-70 pb-25",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterMenu, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-newsletter footer-newsletter-one text-white wow fadeInUp",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-text",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Subscrive To Get More Updates"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "newsletter-form",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-5",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Email Address",
                                                            name: "email",
                                                            required: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            className: "form_control",
                                                            placeholder: "Phone",
                                                            name: "phone",
                                                            required: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Subscribe Now"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-copyright",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyright-text text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xa9 2024 CropVigil. All Rights Reserved"
                            })
                        })
                    })
                })
            ]
        })
    });
const Footer3 = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer-bg bg_cover p-r z-1 footer-white",
        style: {
            backgroundImage: "url(assets/images/bg/footer-bg-1.jpg)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-newsletter footer-newsletter-two yellow-bg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-text",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "To Get More Updates"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "newsletter-form",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-5",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Email Address",
                                                            name: "email",
                                                            required: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            className: "form_control",
                                                            placeholder: "Phone",
                                                            name: "phone",
                                                            required: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "main-btn bordered-btn",
                                                            children: "Subscribe Now"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-widget pb-25",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterMenu, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-copyright border-top-white-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyright-text text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xa9 2024 CropVigil. All Rights Reserved"
                            })
                        })
                    })
                })
            ]
        })
    });
const Footer4 = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer-default footer-white dark-black-bg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-newsletter footer-newsletter-two yellow-bg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-text",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "Subscrive To Get More Updates"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-9",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "newsletter-form",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                        onSubmit: (e)=>e.preventDefault(),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-5",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            className: "form_control",
                                                            placeholder: "Email Address",
                                                            name: "email",
                                                            required: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            className: "form_control",
                                                            placeholder: "Phone",
                                                            name: "phone",
                                                            required: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-3",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "form_group",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "main-btn bordered-btn",
                                                            children: "Subscribe Now"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-widget pb-25",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterMenu, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-copyright border-top-white-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "copyright-text text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xa9 2024 CropVigil. All Rights Reserved"
                            })
                        })
                    })
                })
            ]
        })
    });
const FooterMenu = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-xl-4 col-lg-4 col-md-5 col-sm-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-widget about-widget mb-40 wow fadeInDown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "widget-title",
                            children: "About Us"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-about-content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Empowering farmers with AI-driven crop and produce health solutions for a sustainable future. CropVigil - Your partner in protecting crops and ensuring food chain efficiency."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "mb-15",
                                            children: "Follow On"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-lg-4 col-md-7 col-sm-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-widget footer-nav-widget mb-40 wow fadeInUp",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "widget-title",
                            children: "Services"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-about-content",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Vegetable Freshness Detection"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Fruit Freshness Detection"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Crop Health Surveillance"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Optimizing Agricultural"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-lg-4 col-md-6 col-sm-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "footer-widget recent-post-widget mb-40 wow fadeInDown",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "widget-title",
                            children: "Our Mission"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-about-content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "CropVigil mission is to revolutionize agriculture through advanced technology, ensuring sustainable practices and superior produce quality for a healthier world."
                            })
                        })
                    ]
                })
            })
        ]
    });

;// CONCATENATED MODULE: ./src/useWindowSize.js

function useWindowSize() {
    const isSSR = "undefined" === "undefined";
    const [windowSize, setWindowSize] = external_react_default().useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight
    });
    function changeWindowSize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    external_react_default().useEffect(()=>{
        window.addEventListener("resize", changeWindowSize);
        return ()=>{
            window.removeEventListener("resize", changeWindowSize);
        };
    }, []);
    return windowSize;
}

;// CONCATENATED MODULE: ./src/layouts/MobileHeader.js



const MobileHeader = ()=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "main-menu d-block d-xl-none",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Services"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
                            style: activeLi("Services"),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/services",
                                        children: "Our Services"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/service-details",
                                        children: "Service Details"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "dd-trigger",
                            onClick: ()=>activeMenuSet("Services"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "far fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "menu-item has-children",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "sub-menu",
                            style: activeLi("Blog"),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog-standard",
                                        children: "Blog Standard"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/blog-details",
                                        children: "Blog Details"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "dd-trigger",
                            onClick: ()=>activeMenuSet("Blog"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "far fa-angle-down"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/faqs",
                        children: "Faq"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: "Contact"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_MobileHeader = (MobileHeader);

;// CONCATENATED MODULE: ./src/layouts/OffcanvasPanel.js


const OffcanvasPanel = ({ overlyPanel , togglePanel  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `offcanvas-panel ${overlyPanel ? "panel-on" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "panel-overlay",
                onClick: ()=>togglePanel()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "offcanvas-panel-inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "panel-logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/logo/logo-1.png",
                                    alt: "Logo"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "about-us",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "panel-widget-title",
                                children: "About Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsam alias quae cupiditate quas, neque eum magni impedit asperiores."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "contact-us",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "panel-widget-title",
                                children: "Contact Us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fal fa-map-marker-alt"
                                            }),
                                            "121 King St, Melbourne VIC 3000, Australia."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fal fa-envelope-open"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:hello@barky.com",
                                                children: " hello@barky.com"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:info@barky.com",
                                                children: "info@barky.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fal fa-phone"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:(312)-895-9800",
                                                children: "(312) 895-9800"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:(312)-895-9888",
                                                children: "(312) 895-9888"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        className: "panel-close",
                        onClick: (e)=>{
                            e.preventDefault();
                            togglePanel();
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "fal fa-times"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layouts_OffcanvasPanel = (OffcanvasPanel);

;// CONCATENATED MODULE: ./src/layouts/Header.js







const Header = ({ header  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* stickyNav */.h4)();
    }, []);
    const { 0: overlayPanel , 1: setOverlayPanel  } = (0,external_react_.useState)(false);
    const togglePanel = ()=>setOverlayPanel(!overlayPanel);
    const { width  } = useWindowSize();
    (0,external_react_.useEffect)(()=>{
        const headers = document.querySelectorAll(".header-navigation");
        headers.forEach((header)=>{
            if (width <= 1199) {
                header.classList.add("breakpoint-on");
            } else {
                header.classList.remove("breakpoint-on");
            }
            // toggle
            const toggleBtn = header.getElementsByClassName("navbar-toggler")[0], overlay = header.getElementsByClassName("nav-overlay")[0], menu = header.getElementsByClassName("nav-menu")[0];
            toggleBtn.addEventListener("click", ()=>{
                overlay.classList.add("active");
                menu.classList.add("menu-on");
            });
            overlay.addEventListener("click", ()=>{
                overlay.classList.remove("active");
                menu.classList.remove("menu-on");
            });
        });
    }, [
        width
    ]);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header1, {});
        case 2:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header2, {});
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                overlayPanel: overlayPanel,
                togglePanel: ()=>togglePanel()
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header4, {
                overlayPanel: overlayPanel,
                togglePanel: ()=>togglePanel()
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultHeader, {});
    }
};
/* harmony default export */ const layouts_Header = (Header);
const Header1 = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header-area",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-bar top-bar-one dark-black-bg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-bar-left d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: "Welcome to CropVigil "
                                        }),
                                        " \xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: " Sustainable agriculture for a healthier world"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-bar-right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-map-marker-alt"
                                                }),
                                                "Location: University of Engineering and Technology Taxila"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-middle",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-1350",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-4 d-xl-block d-lg-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-branding d-lg-block d-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "brand-logo",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo/favicon.png",
                                                    alt: "Site Logo"
                                                }),
                                                "CropVigil"
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-8 col-lg-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "contact-information",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "information-item_one d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "flaticon-placeholder"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "mb-1",
                                                            children: "Locations"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "University of Engineering and Technology Taxila"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "information-item_one d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "flaticon-email"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            className: "mb-1",
                                                            children: "Email Us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:m.subhan.con@gmail.com",
                                                                children: "m.subhan.con@gmail.com"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "button text-md-right text-sm-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "main-btn btn-yellow",
                                                    children: "Get a Quote"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-navigation navigation-one",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-1350",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary-menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-branding",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "brand-logo",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo/favicon.png",
                                                    alt: "Site Logo"
                                                }),
                                                "CropVigil"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-inner-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-logo mb-30 d-block d-xl-none text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "brand-logo",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logo/favicon.png",
                                                                    alt: "Site Logo"
                                                                }),
                                                                "CropVigil"
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(layouts_MobileHeader, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "nav-right-item",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-toggler",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
const Header2 = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header-area",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-bar top-bar-one dark-black-bg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-bar-left d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: "Welcome to CropVigil "
                                        }),
                                        " \xa0\xa0\xa0\xa0|\xa0\xa0\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: " Sustainable agriculture for a healthier world"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-bar-right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-map-marker-alt"
                                                }),
                                                "Location: University of Engineering and Technology Taxila"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-navigation navigation-two",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary-menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "site-branding d-lg-block d-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            className: "brand-logo",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logo/favicon.png",
                                                    alt: "Site Logo"
                                                }),
                                                "CropVigil"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-inner-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-logo mb-30 d-block d-xl-none text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "brand-logo",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logo/favicon.png",
                                                                    alt: "Site Logo"
                                                                }),
                                                                "CropVigil"
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "call-button text-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-phone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:+923445559784",
                                                                children: "+92 344 5559782"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(layouts_MobileHeader, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Get a Quote"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-right-item d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "call-button",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-phone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:+923445559784",
                                                                children: "+92 344 5559782"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Get a Quote"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "navbar-toggler",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
const Header3 = ({ overlayPanel , togglePanel  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_OffcanvasPanel, {
                overlyPanel: overlayPanel,
                togglePanel: togglePanel
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "header-area",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header-navigation navigation-three",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-overlay"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "primary-menu",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "site-branding",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "brand-logo",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo/favicon.png",
                                                            alt: "Site Logo"
                                                        }),
                                                        "CropVigil"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "sticky-logo",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/logo/favicon.png",
                                                            alt: "Site Logo"
                                                        }),
                                                        "CropVigil"
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "nav-inner-menu",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "nav-menu",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo mb-30 d-block d-xl-none text-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "brand-logo",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logo/favicon.png",
                                                                    alt: "Site Logo"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "call-button text-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-phone"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "tel:+923445559784",
                                                                    children: "+92 344 5559782"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layouts_MobileHeader, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "menu-button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "main-btn btn-yellow",
                                                                children: "Get a Quote"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "nav-right-item d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "call-button",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-phone"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "tel:+923445559784",
                                                                    children: "+92 344 5559782"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "menu-button",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "main-btn btn-yellow",
                                                                children: "Get a Quote"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "bar-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "c-pointer",
                                                            onClick: ()=>togglePanel(),
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/bar.png",
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "navbar-toggler",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
const Header4 = ({ overlayPanel , togglePanel  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_OffcanvasPanel, {
                overlyPanel: overlayPanel,
                togglePanel: togglePanel
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "header-area",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header-top-bar top-bar-two dark-black-bg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container-fluid",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "top-bar-left d-flex align-items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Welcome to CropVigil"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "top-bar-right",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-map-marker-alt"
                                                        }),
                                                        "Location: University of Engineering and Technology Taxila"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "social-link",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-facebook-f"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-twitter"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-linkedin"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fab fa-youtube"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-navigation navigation-four",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-overlay"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container-fluid",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "primary-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "site-branding",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "brand-logo",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/logo/favicon.png",
                                                                alt: "Site Logo"
                                                            })
                                                        }),
                                                        "CropVigil"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/index-4",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "sticky-logo",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/logo/favicon.png",
                                                                alt: "Site Logo"
                                                            }),
                                                            "CropVigil"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-inner-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bar-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "c-pointer",
                                                        onClick: ()=>togglePanel(),
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/bar-2.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "nav-menu",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mobile-logo mb-30 d-block d-xl-none text-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "brand-logo",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "assets/images/logo/favicon.png",
                                                                            alt: "Site Logo"
                                                                        }),
                                                                        "CropVigil"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "call-button text-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-phone"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "tel:+923445559784",
                                                                        children: "+92 344 5559782"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(layouts_MobileHeader, {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "menu-button",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/contact",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "main-btn bordered-btn",
                                                                    children: "Get a Quote"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "nav-right-item d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "call-button",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-phone"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        href: "tel:+923445559784",
                                                                        children: "+92 344 5559782"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "menu-button",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/contact",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "main-btn bordered-btn bordered-yellow",
                                                                    children: "Get a Quote"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "navbar-toggler",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
const DefaultHeader = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header-area",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top-bar top-bar-one dark-black-bg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-bar-left d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: "Welcome to CropVigil "
                                        }),
                                        " \xa0\xa0|\xa0\xa0",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: "Sustainable agriculture for a healthier world"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 col-lg-12 col-md-12 col-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-bar-right",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-map-marker-alt"
                                                }),
                                                "Location: University of Engineering and Technology Taxila"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "social-link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-linkedin"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header-navigation navigation-three",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "nav-overlay"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "primary-menu",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "site-branding",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "brand-logo",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/favicon.png",
                                                        alt: "Site Logo"
                                                    }),
                                                    "CropVigil"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "sticky-logo",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logo/favicon.png",
                                                        alt: "Site Logo"
                                                    }),
                                                    "CropVigil"
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "nav-inner-menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-logo mb-30 d-block d-xl-none text-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "brand-logo",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logo/favicon.png",
                                                                    alt: "Site Logo"
                                                                }),
                                                                "CropVigil"
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "call-button text-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-phone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:+923445559784",
                                                                children: "+92 344 5559782"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(layouts_MobileHeader, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Get a Quote"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-right-item d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "call-button",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-phone"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "tel:+923445559784",
                                                                children: "+92 344 5559782"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "menu-button",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "main-btn btn-yellow",
                                                            children: "Get a Quote"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "bar-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/bar.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "navbar-toggler",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
const Menu = ()=>/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "main-menu d-none d-xl-block",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/services",
                        children: "Services"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/faqs",
                        children: "Faq"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/contact",
                        children: "Contact"
                    })
                })
            ]
        })
    });

;// CONCATENATED MODULE: ./src/layouts/ScrollTop.js



const ScrollTop = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* scrollTopFun */.h1)();
    }, []);
    const onClick = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "#",
        className: "back-to-top",
        onClick: ()=>onClick(),
        id: "scroll-top",
        style: {
            display: "inline-block"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "far fa-angle-up"
        })
    });
};
/* harmony default export */ const layouts_ScrollTop = (ScrollTop);

;// CONCATENATED MODULE: ./src/layouts/Layout.js









const Layout = ({ children , header , footer  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* animation */.oQ)();
        external_react_nice_select_default()({
            withoutwide: true
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Header, {
                header: header
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Footer, {
                footer: footer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_ScrollTop, {})
        ]
    });
};
/* harmony default export */ const layouts_Layout = (Layout);


/***/ }),

/***/ 5968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ak": () => (/* binding */ logoSlider),
/* harmony export */   "cg": () => (/* binding */ heroSliderOne),
/* harmony export */   "kH": () => (/* binding */ testimonialSliderOne),
/* harmony export */   "m4": () => (/* binding */ testimonialSliderThree),
/* harmony export */   "pP": () => (/* binding */ testimonialSliderTwo)
/* harmony export */ });
/* unused harmony exports projectsSliderOne, recentProductSlider, heroSliderTwo, projectsSliderThree, testimonialSliderFive, projectsSliderTwo, serviceSliderOne */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const Arrow = ({ arrowCls , onClick , icon  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: arrowCls,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon
        })
    });
};
const heroSliderOne = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 400,
    fade: true,
    autoplay: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "prev slick-arrow",
        icon: "far fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "next slick-arrow",
        icon: "far fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }, 
    ],
    beforeChange: (current, next)=>{
        const sliders = document.querySelectorAll("div.single-slider");
        for(let i = 0; i < sliders.length; i++){
            const element = sliders[i];
            element.setAttribute(`data-slick-index`, next);
            (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .doAnimations */ .d3)(element);
        }
    }
};
const projectsSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "prev slick-arrow",
        icon: "far fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "next slick-arrow",
        icon: "far fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderOne = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "prev slick-arrow",
        icon: "far fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "next slick-arrow",
        icon: "far fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const logoSlider = {
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
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const recentProductSlider = {
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
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderTwo = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
const heroSliderTwo = {
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
                dots: false
            }
        }, 
    ],
    appendDots: (dots)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "hero-dots",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: dots.map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: item.props.children
                    }, index);
                })
            })
        });
    }
};
const projectsSliderThree = {
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
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderFive = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const projectsSliderTwo = {
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
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, 
    ]
};
const serviceSliderOne = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "prev slick-arrow",
        icon: "far fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "next slick-arrow",
        icon: "far fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};
const testimonialSliderThree = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "prev slick-arrow",
        icon: "far fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        arrowCls: "next slick-arrow",
        icon: "far fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }, 
    ]
};


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d3": () => (/* binding */ doAnimations),
/* harmony export */   "h1": () => (/* binding */ scrollTopFun),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oQ": () => (/* binding */ animation)
/* harmony export */ });
/* unused harmony exports getPagination, pagination */
const doAnimations = (elements)=>{
    var animationEndEvents = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
// console.log(elements.getData());
// var $animationDelay = elements.data("delay");
// var $animationType = "animated " + elements.data("animation");
// elements.css({
//   "animation-delay": $animationDelay,
//   "-webkit-animation-delay": $animationDelay,
// });
// elements.classList.add($animationType).one(animationEndEvents, function () {
//   elements.classList.remove($animationType);
// });
};
// Animation with wowjs
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".header-navigation");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("sticky");
                } else {
                    stick.classList.remove("sticky");
                }
            }
        }
    });
};
// Pagination
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
// change pagination and update pagination and content
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const scrollTopFun = ()=>{
    let scrollUp = document.getElementById("scroll-top"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st < 600) {
            scrollUp.style.display = "none";
        } else {
            scrollUp.style.display = "inline-block";
        }
    });
};


/***/ })

};
;