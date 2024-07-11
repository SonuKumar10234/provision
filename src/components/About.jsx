import React from 'react';
import aboutBg from '/about-image.jpg';

const About = () => {
  return (
    <section id='about' className='w-full flex flex-col items-center py-8 lg:py-12'>
    <div className='text-center px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto pb-12 lg:pb-16 relative'>
      <h2 className='before:inline-block before:w-[50px] before:h-[2px] before:bg-accent before:mr-[15px] before:mb-[8px] after:inline-block after:w-[50px] after:h-[2px] after:bg-accent after:ml-[15px] after:mb-[8px] text-2xl font-semibold mb-2'>About Us</h2>
      <p>At Pro Vision Consultancy, we excel in matching exceptional candidates with thriving companies, fostering long-term success and growth for everyone.</p>
    </div>
    <div className='px-4 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
      <div className='flex flex-wrap items-start gap-6 lg:gap-0'>
        <div className='flex flex-col w-full lg:w-1/2'>
          <h1 className='text-3xl font-semibold text-gray-600'>About Provision Consultancy</h1>
          <p className='my-2'>Welcome to Pro Vision Consultancy, a cornerstone of excellence in the recruitment industry. With a rich history of dedication and success, we have become experts in connecting exceptional talent with top-tier organizations. Our journey is marked by hard work, industry knowledge, and a relentless pursuit of excellence, enabling us to deliver remarkable results.</p>
          <p>Our extensive experience has allowed us to build lasting relationships with a diverse clientele, from global corporations to dynamic startups. We have mastered the intricacies of the recruitment landscape, consistently providing top talent that drives our clients' success. Our comprehensive services include talent acquisition, executive search, and market insights, ensuring that our clients secure the best candidates who align with their strategic goals.</p>
          <p>We go beyond traditional recruitment by offering career coaching, resume writing, interview preparation, and skills development, helping candidates enhance their career prospects. Through our job matching and networking opportunities, we connect candidates with roles that match their skills and aspirations.</p>
          <p className='mt-2 mb-6'>At Pro Vision Consultancy, our legacy is built on trust, integrity, and unparalleled success. We are dedicated to fostering success for both our clients and candidates, making us a leader in the recruitment field. We look forward to continuing our tradition of delivering exceptional recruitment solutions and contributing to the growth and success of businesses and professionals alike.</p>
          <div className='flex'>
            <a className='px-6 py-2 rounded-full bg-accent hover:bg-secondary text-white transition-all duration-200 cursor-pointer'>Get Started</a>
          </div>
        </div>
        <div className='flex flex-col justify-center w-full lg:w-1/2 lg:pl-4'>
          <img src={aboutBg} alt='' className='w-full h-full object-cover object-center rounded-md' />
        </div>
      </div>

    </div>
  </section>
  )
}

export default About;