import React from 'react';
import './Aboutus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const About = () => {
  return (
    <div className="main-contents">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-center mt-5"><b><span className="text-capitalize bg-dark text-white py-2 px-3">About Us</span></b></h2>
          <p className="text-muted text-center mb-5"></p>
          <section className="toolkit-section">
            <div className="row">
              <div className="col-md-4">
                <div className="card card1 mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Business Plan</h3>
                    <p className="card-text ">
                      Your roadmap to success. Develop a comprehensive business plan to guide your entrepreneurial journey.
                    </p>
                    <p className="card-text ">
                      Your business plan should include sections such as executive summary, market analysis, business model, marketing strategy, financial projections, and more.
                    </p>
                    <p className="card-text ">
                      Remember, a well-crafted business plan will help you attract investors, secure financing, and stay focused on your goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Mission</h3>
                    <p className="card-text">
                      Our mission is to empower entrepreneurs by providing them with the tools, resources, and support they need to turn their ideas into successful businesses.
                    </p>
                    <p className="card-text">
                      We believe in fostering innovation, creativity, and collaboration to drive positive change in the world through entrepreneurship.
                    </p>
                    <p className="card-text">
                      Join us on our mission to empower the next generation of visionary entrepreneurs and change-makers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card3 mb-4">
                  <div className="card-body">
                    <h3 className="card-title">Vision</h3>
                    <p className="card-text">
                      Our vision is to create a vibrant ecosystem where every entrepreneur has the opportunity to thrive and succeed.
                    </p>
                    <p className="card-text">
                      We envision a world where entrepreneurship is celebrated, supported, and accessible to all, regardless of background or circumstance.
                    </p>
                    <p className="card-text">
                      Together, let's build a future where entrepreneurship is a catalyst for positive change and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
