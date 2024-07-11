// import React from 'react'

// const Home = () => {
//     return (
//         <section id='home' className="bg-[url('/bg-home.jpg')] bg-center bg-cover w-full h-[calc(100vh_-_72px)] before:absolute before:bottom-0 before:top-0 before:left-0 before:right-0 before:bg-gray-600 before:opacity-60 flex flex-col items-center justify-center relative">
//             <div className='text-center px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto z-20'>
//                 <h1 className='text-3xl font-semibold text-gray-600 text-white'>Welcome to Provision Consultancy</h1>
//                 <p className='mt-2 mb-6 text-white opacity-80'>Provision Consultancy is a premier recruitment agency based in New Delhi, offering specialized recruitment services across PAN India. We excel in Non-IT and IT mandates, catering to various industries including Retail, QSR, FMCG, NGO, Automobile, Manufacturing, and more.</p>
//                 <a className='px-4 xl:px-6 py-3 rounded-full bg-teal-400 text-white transition-all duration-200 cursor-pointer hover:bg-teal-500'>Get Started</a>
//             </div>
//         </section>
//     )
// }

// export default Home;

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
      };

    return (
        <section id="home" className='h-screen w-full relative overflow-hidden z-10 '>
        <div className="hero-container w-full">
          <Slider {...settings} className='absolute inset-0'>
            <div
              className="carousel-item h-screen bg-cover bg-center bg-[url('/bg-home-2.jpg')] before:absolute before:bottom-0 before:top-0 before:left-0 before:right-0 before:bg-gray-600 before:opacity-60"
              
            >
              <div className="carousel-container absolute top-[70px] bottom-0 left-[50px] right-[50px]">
                <div className="container flex flex-col justify-center items-center h-full">
                  <h2 className="text-center text-white text-2xl font-semibold">Pro Vision Consultancy</h2>
                  <span className='text-white text-center mb-6'>(Connecting Talent with Opportunities) </span>
                  <p className="text-lg text-center text-gray-200 mb-7 w-full lg:w-[60%]">
                  Discover the Future of Recruitment: Harnessing AI and Market Insights to Connect Exceptional Talent with Industry-Leading Opportunities.
                  </p>
                  <a href="#about" className="bg-accent hover:bg-secondary text-white px-5 py-3 rounded-md transition-all duration-200 scrollto animate__animated animate__fadeInUp">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            
            <div
              className="carousel-item h-screen bg-cover bg-center bg-[url('/bg-home-1.jpg')] before:absolute before:bottom-0 before:top-0 before:left-0 before:right-0 before:bg-gray-600 before:opacity-60"
              
            >
              <div className="carousel-container absolute top-[70px] bottom-0 left-[50px] right-[50px]">
                <div className="container flex flex-col justify-center items-center h-full">
                  <h2 className="text-center text-white mb-6 text-2xl font-semibold">Strategic Recruitment for the Modern Workforce</h2>
                  <p className="text-lg text-center text-gray-200 mb-7 w-full lg:w-[60%]">
                  Unlock top talent with our data-driven, strategic approach, tailored for the modern workforce. Let us connect you with the professionals who drive success and innovation in your industry.
                  </p>
                  <a href="#about" className="bg-accent hover:bg-secondary text-white px-5 py-3 rounded-md transition-all duration-200 scrollto animate__animated animate__fadeInUp">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    )
}

export default Home;