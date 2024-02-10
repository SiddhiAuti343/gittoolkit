import React from 'react';
import './BlogPage.css';


import bimg from 'C:/Users/pc/Desktop/Ty project/Entrepreneur/toolkit/src/Pages/Blogpage/Business2.jpeg';
import bimg2 from 'C:/Users/pc/Desktop/Ty project/Entrepreneur/toolkit/src/Pages/Blogpage/person1.jpg';
import bimg3  from 'C:/Users/pc/Desktop/Ty project/Entrepreneur/toolkit/src/Pages/Blogpage/person2.jpg';
import bimg4  from 'C:/Users/pc/Desktop/Ty project/Entrepreneur/toolkit/src/Pages/Blogpage/person3.jpg';
import bimg5  from 'C:/Users/pc/Desktop/Ty project/Entrepreneur/toolkit/src/Pages/Blogpage/picture4.jpg';
import bimg6  from 'C:/Users/pc/Desktop/Ty project/Entrepreneur/toolkit/src/Pages/Blogpage/picture5.jfif';

const BlogPage = () => {
  return (
    <div>
    <header className="main_header">
    <div className="d-flex justify-content-center align-items-center flex-column py-5">
      <h1 className="main_heading">Entrepreneur's Toolkit</h1>
      <p className="main_heading__para">Welcome To <span className="text-capitalize bg-dark text-white py-2 px-3">Our Blog Page</span></p>
    </div>
    <div className="main_header__div d-flex align-self-start justify-content-center pl-5 flex-column shadow">
      <div className="business2-overlay">
        <p className="overlay-text">Entrepreneur's Toolkit</p>
        <h2 className="animateWord overlay-subheading">
          <span className="ti">The ultimate, </span>
          <div className="business2-overlay-subheading">
            <ul className="flip">
              <li>your guide to success in business</li>
              <li>your go-to resource for navigating, strategizing, and achieving success in business.</li>
              <li>your essential companion for entrepreneurial growth, strategic planning, and business triumphs.</li>
            </ul>
          </div>
        </h2>
      </div>
    </div>
  </header>

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 mx-auto my-5">
        <div className="card p-4 shadow blog_left__div">
          <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
            <h1><b> Indian Startups and their Entrepreneurs</b></h1>
            <p className="blog-title"><span className="font-weight-bold">"Success Stories At Your Tip"</span></p>
          </div>
          <figure className="text-center">
            <img src={bimg} className="img-fluid shadow" alt="Business" />
          </figure>
          <p>
            <span className="font-weight-bold"></span>
            <b> Entrepreneur's Toolkit </b>comprises essential elements to foster
            a comprehensive and user-centric experience on our website.
            With a responsive chatbot at its core, users receive instant support and guidance,
            enhancing their navigation. The inclusion of a language translator
            ensures a global audience can seamlessly access our content,
            transcending linguistic barriers.
            Augmenting this, our educational resources within the toolkit provide users
            with valuable insights and learning opportunities, enriching their engagement
            with our platform. In essence, Entrepreneur's Toolkit forms the backbone of
            our commitment to delivering an interactive, informative,
            and globally accessible online environment.
          </p>
          <div className="row mt-3">
            <div className="col-md-6">
              <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 mx-auto my-5">
        <div className="card p-4 shadow blog_left__div">
          <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
            <h1><b> Indian Startups and their Entrepreneurs</b></h1>
            <p className="blog-title"><span className="font-weight-bold">"Success Stories At Your Tip"</span></p>
          </div>
          <figure className="text-center">
            <img src={bimg2} className="img-fluid shadow" alt="Business" />
          </figure>
          <p>
            <span className="font-weight-bold"></span>
            <b> Aman Gupta </b> is indeed one of the founders of boAt Lifestyle,
             a consumer electronics brand primarily known for its audio products such as earphones, 
             headphones, speakers, and wearable devices. Along with co-founder Sameer Mehta, 
             Aman Gupta established boAt in 2015.
             boAt has gained significant popularity in India and abroad for its stylish and 
             affordable audio accessories. The brand has capitalized on the growing demand 
             for quality audio products, especially among the youth demographic.
             Under Aman Gupta's leadership, boAt has expanded its product range 
             and market presence, becoming one of the leading audio brands in India. 
             The company has also engaged in various marketing initiatives, including
              partnerships with celebrities and influencers, to further enhance its brand visibility.
          </p>
          <div className="row mt-3">
            <div className="col-md-6">
              <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid">
  <div className="row">
    <div className="col-md-8 mx-auto my-5">
      <div className="card p-4 shadow blog_left__div">
        <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
          <h1><b> Indian Startups and their Entrepreneurs</b></h1>
          <p className="blog-title"><span className="font-weight-bold">"Success Stories At Your Tip"</span></p>
        </div>
        <figure className="text-center">
          <img src={bimg3} className="img-fluid shadow" alt="Business" />
        </figure>
        <p>
          <span className="font-weight-bold"></span>
          <b> Vijay Shekhar Sharma </b>is the founder of Paytm. 
          He founded Paytm (originally "Pay Through Mobile") in 2010. 
          Paytm started as a mobile recharge and utility bill payment 
          platform but later expanded into a full-fledged digital payments 
          and financial services company.Under Vijay Shekhar Sharma's leadership,
           Paytm has grown to become one of India's leading digital payment platforms, 
           offering a wide range of services including mobile recharges, bill payments,
            online shopping, ticket bookings, wealth management, and banking services
             through its subsidiary, Paytm Payments Bank.Vijay Shekhar Sharma's vision 
             and entrepreneurial spirit have been instrumental in Paytm's success and 
             its evolution into a multifaceted fintech giant in India.
        </p>
        <div className="row mt-3">
          <div className="col-md-6">
            <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid">
<div className="row">
  <div className="col-md-8 mx-auto my-5">
    <div className="card p-4 shadow blog_left__div">
      <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
        <h1><b> Indian Startups and their Entrepreneurs</b></h1>
        <p className="blog-title"><span className="font-weight-bold">"Success Stories At Your Tip"</span></p>
      </div>
      <figure className="text-center">
        <img src={bimg4} className="img-fluid shadow" alt="Business" />
      </figure>
      <p>
        <span className="font-weight-bold"></span>
        <b> Vidit Aatrey</b> is an Indian entrepreneur and the co-founder of Meesho, 
        a social commerce platform. He graduated from the Indian Institute of Technology (IIT) 
        Delhi with a degree in Electrical Engineering. Prior to founding Meesho in 2015, 
        Aatrey worked as a Software Development Engineer at InMobi, a global mobile advertising technology company.
        As the co-founder and CEO of Meesho, Vidit Aatrey has played a pivotal role in shaping the 
        company's growth and strategy. Meesho has become one of the leading social commerce platforms
        in India, empowering millions of small businesses and individuals to start their online stores
      and sell products through social media platforms.Under Aatrey's leadership, Meesho has 
      raised significant funding from prominent investors and has expanded its user base and 
      product offerings. His entrepreneurial journey and vision for Meesho have garnered 
      attention in India's startup ecosystem, and he continues to drive innovation and growth within the company.
      </p>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="container-fluid">
<div className="row">
  <div className="col-md-8 mx-auto my-5">
    <div className="card p-4 shadow blog_left__div">
      <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
        <h1><b> Indian Startups and their Entrepreneurs</b></h1>
        <p className="blog-title"><span className="font-weight-bold">"Success Stories At Your Tip"</span></p>
      </div>
      <figure className="text-center">
        <img src={bimg5} className="img-fluid shadow" alt="Business" />
      </figure>
      <p>
        <span className="font-weight-bold"></span>
        <b> Bhavish Agarwal</b>is an Indian entrepreneur 
        and the co-founder of Ola, one of the leading ride-hailing companies in India. 
        He was born on August 28, 1985, in Ludhiana, Punjab, India. Bhavish Aggarwal 
        co-founded Ola in December 2010 along with Ankit Bhati.
         Under Bhavish Aggarwal's leadership, Ola has grown to become a
          major player in the transportation and mobility sector in India. 
          Ola offers a range of services, including cab booking, auto-rickshaws,
           bike-sharing, and more. The company has expanded its operations not 
           only within India but also in various international markets.
        Bhavish Aggarwal is known for his entrepreneurial vision and efforts to 
        transform the way people commute in India. He has played a crucial role in
         shaping Ola's strategy and expanding its services to cater to diverse transportation needs. 
         As of my last knowledge update in January 2022, Bhavish Aggarwal continues to serve as the CEO of Ola.
      </p>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


<div className="container-fluid">
<div className="row">
  <div className="col-md-8 mx-auto my-5">
    <div className="card p-4 shadow blog_left__div">
      <div className="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
        <h1><b> Indian Startups and their Entrepreneurs</b></h1>
        <p className="blog-title"><span className="font-weight-bold">"Success Stories At Your Tip"</span></p>
      </div>
      <figure className="text-center">
        <img src={bimg6} className="img-fluid shadow" alt="Business" />
      </figure>
      <p>
        <span className="font-weight-bold"></span>
        <b>Aadithyan Rajesh </b>another youthful Indian business person,
         made his most memorable versatile application at nine years old.
          He used to make logos and site interfaces as a leisure activity 
          before beginning his firm, Trinet Solutions. Slowly, he started coding 
          and delivering games, and he made his most memorable programming,
           ‘Ashirwad,’ which is an internet browser similar to Google Chrome.
            The application was made in Android Studio and distributed in the Aptoide store. 
            Rajesh is a fruitful YouTuber as well as running his own IT organization.
             He runs the channel ‘A Craze,’ where he posts video blogs on innovation, 
             coding, gaming, and website architecture
      </p>
      <div className="row mt-3">
        <div className="col-md-6">
          <button className="left_div__like" id="like_btn"><i className="fa fa-thumbs-up"></i>Like</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  );
};

export default BlogPage;








   

