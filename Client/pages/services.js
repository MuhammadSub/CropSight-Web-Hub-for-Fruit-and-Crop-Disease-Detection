import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/sliders/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import { logoSlider, projectsSliderTwo } from "../src/sliderProps";

const Services = () => {
  // State variables for prediction functionality
  const [selectedModel, setSelectedModel] = useState(null);
  const [imageInput, setImageInput] = useState(null);
  const [apiResponse, setapiResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Event handlers for prediction functionality
  const handleModelSelection = (model) => {
    setSelectedModel(model);
  };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    setImageInput(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById("selectedImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePredict = async () => {
    setLoading(true);
    const predictionResult = await predictModel(selectedModel, imageInput);
    setapiResponse(predictionResult);
    setLoading(false);
  };

  const predictModel = async (model, image) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch(`http://localhost:5000/api/${model}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Prediction failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error calling prediction API:", error);
    }

    setLoading(false);
  };

  return (
    <Fragment>
      <Head>
        <title>CropVigil</title>
      </Head>
      <Layout>
        <PageBanner pageName={"Services"} />
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
        {/*====== End Service Section ======*/}
        {/*====== Start Prediction section ======*/}
        <section className="prediction-section pt-lg-130">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-50 wow fadeInDown">
                  <span className="sub-title">Predicting</span>
                  <h3>Utilizing AI to safeguard crops by predicting diseases, and ensuring the freshness of fruits 
                  and vegetables through advanced detection.</h3>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="prediction-box">
                      <div className="center mb-20">
                        <label className="predict-label">Select detection type:</label>
                        <div className="text-center">
                          <button
                            className={`main-btn btn-yellow model-btn ${selectedModel === "crop" ? "selected" : ""}`}
                            onClick={() => handleModelSelection("crop")}
                          >
                            Crop Disease Detection
                          </button>
                          <button
                            className={`main-btn btn-yellow model-btn ${selectedModel === "fruit_veg" ? "selected" : ""}`}
                            onClick={() => handleModelSelection("fruit_veg")}
                          >
                            Fruit and Vegetable Detection
                          </button>
                        </div>
                      </div>
                      {selectedModel && (
                        <div>
                          <label className="predict-label" htmlFor="imageInput">
                            Upload Image 📂
                          </label>
                          <div>
                            <input type="file" id="imageInput" onChange={handleImageInputChange} /><br />
                          </div>
                        </div>
                      )}
                      <div className="text-center">
                        {imageInput && (
                            <div className="uploaded-image">
                              <img src={imageInput} id="selectedImage" alt="Selected" />
                            </div>
                        )}
                      </div><br />
                      <div className="text-center">
                        <button onClick={handlePredict} disabled={loading} className="main-btn btn-yellow">
                          {loading ? "Predicting..." : "Predict"}
                        </button>
                      </div>
                    </div>
                  </div>
                  {apiResponse && (
                    <div className="col-lg-6">
                      <div className="prediction-box">
                        <p className="predicted-class">
                          <label className="predict-label">Predicted Disease Class:</label>{" "}
                          {apiResponse.predicted_class.replace(/_/g, " ")}
                        </p><br />
                        <p className="disease-details">
                          <label className="predict-label">Disease Details:</label>
                          {apiResponse.disease_details}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== End Prediction section ====== */}
        {/*====== Start Skill Section ======*/}
        <section className="skill-section-two pt-lg-130">
          <div className="container-fluid">
            <div
              className="skill-wrapper-one pb-90 bg_cover"
              style={{ backgroundImage: "url(assets/images/bg/skill-bg-2.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="skill-two_content-box content-box-gap mb-40 wow fadeInUp">
                      <div className="section-title section-title-left mb-30">
                        <span className="sub-title">Experience</span>
                        <h2>We are Leading the Advanced Agriculture Technology</h2>
                      </div>
                      <p>
                        CropVigil offers a seamless integration of advanced agricultural technology, 
                        ensuring precise detection of crop diseases and real-time monitoring capabilities. 
                        With its user-friendly interface, CropVigil provides farmers with easy navigation 
                        and proactive management solutions.
                      </p>
                      <div className="skill-bar">
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
                      <div className="skill-bar">
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
                      <div className="skill-button">
                        <Link href="/about">
                          <a className="main-btn bordered-btn">Learn More Us</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End Skill Section ======*/}
        {/*====== Start Partners Section ======*/}
        <section className="partners-section">
          <div className="container-1350">
            <div className="partners-wrap-three yellow-bg pb-60 pt-50 p-r z-1">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section-title text-center mb-30 wow fadeInUp">
                    <h4>We Have More Then 1235+ Global Partners</h4>
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
        {/*====== Start Testimonial Section ======*/}
        <section className="testimonial-three pt-130 pb-130">
          <div className="container">
            <TestimonialSlider />
          </div>
        </section>
      </Layout>
    </Fragment>
  );
};

export default Services;
