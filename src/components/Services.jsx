import React from 'react';
import { BsBoundingBoxCircles } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import image from '/image.jpg'

const Services = () => {
  return (
    <section id='services' className='services py-8 lg:py-12 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
      <div className='text-center px-4 pb-12 relative'>
        <h2 className='before:inline-block before:w-[50px] before:h-[2px] before:bg-accent before:mr-[15px] before:mb-[8px] after:inline-block after:w-[50px] after:h-[2px] after:bg-accent after:ml-[15px] after:mb-[8px] text-2xl font-semibold mb-2'>Our Services</h2>
        <p>Provision Consultancy has been a reliable partner for businesses seeking cost-efficient and high-quality recruitment solutions.</p>
      </div>

      <div className='px-4 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
        <div className='flex flex-wrap gap-6 lg:gap-0'>
          <div className='flex flex-col w-full lg:w-1/2'>
            <ul className='space-y-2'>
              <li className=''>✓ Retail</li>
              <li className=''>✓ QSR (Quick Service Restaurants)</li>
              <li className=''>✓ FMCG (Fast-Moving Consumer Goods)</li>
              <li className=''>✓ NGOs (Non-Governmental Organizations)</li>
              <li className=''>✓ Automobile</li>
              <li className=''>✓ Manufacturing</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center w-full lg:w-1/2 lg:pl-4'>
            <img src={image} alt='' className='w-full h-full object-cover object-center rounded-md' />
          </div>
        </div>

      </div>

      <div className='grid grid-cols-12 gap-x-4 gap-y-4 px-4 pt-12'>
        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
          <div className='py-8 px-4 shadow-md xl:h-[28rem] h-fit overflow-hidden transition-all duration-400 ease-in-out relative rounded-md service-item'>
            <div className='flex items-center gap-4'>
              <div className='bg-accent text-white flex justify-center items-center h-[50px] w-[50px] min-w-[50px] rounded-full transition-all duration-200 icon-box'>
                <FaCode size={23} className='' />
              </div>
              <h2 className='text-2xl font-medium'>Talent Acquisition Services</h2>
            </div>
            <div className='mt-4'>
              <p>Our talent acquisition services are designed to source and recruit top talent for various positions within your organization. We specialize in identifying candidates who not only possess the necessary skills and qualifications but also align with your company culture and specific needs. Through targeted strategies and thorough screening processes, we ensure that you get the best candidates who contribute to your team's success.</p>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
          <div className='py-8 px-4 shadow-md xl:h-[28rem] h-fit overflow-hidden transition-all duration-400 ease-in-out relative rounded-md service-item'>
            <div className='flex items-center gap-4'>
              <div className='bg-accent text-white flex justify-center items-center h-[50px] w-[50px] min-w-[50px] rounded-full transition-all duration-200 icon-box'>
                <BsBoundingBoxCircles size={23} className='' />
              </div>
              <h2 className='text-2xl font-medium'>Executive Search Expertise</h2>
            </div>
            <div className='mt-4'>
              <p>With our executive search service, we focus on identifying and recruiting senior-level and executive professionals who are instrumental in driving your organization's success. Leveraging our extensive network, industry expertise, and proven methodologies, we target individuals with a track record of leadership and strategic impact. Whether you need C-suite executives, directors, or other senior management roles, we're dedicated to finding the right leaders who align with your vision and goals.</p>
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 xl:col-span-4'>
          <div className='py-8 px-4 shadow-md xl:h-[28rem] h-fit overflow-hidden transition-all duration-400 ease-in-out relative rounded-md service-item'>
            <div className='flex items-center gap-4'>
              <div className='bg-accent text-white flex justify-center items-center h-[50px] w-[50px] min-w-[50px] rounded-full transition-all duration-200 icon-box'>
                <BsBoundingBoxCircles size={23} className='' />
              </div>
              <h2 className='text-2xl font-medium'>Market Research and Insights</h2>
            </div>
            <div className='mt-4'>
              <p>Gain access to valuable market research and industry insights that empower your hiring decisions. Our comprehensive analysis covers market trends, salary benchmarks, talent availability, and competitive landscapes. Armed with this data-driven information, you can make informed choices regarding talent acquisition, compensation strategies, and workforce planning. Stay ahead of the curve with our up-to-date market intelligence tailored to your industry and organizational needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;

/**
 * <div className='py-8 px-4 shadow-md h-[19rem] overflow-hidden transition-all duration-400 ease-in-out relative service-item'>
          <div className='flex items-center gap-4'>
            <div className='bg-[#3489db] text-white flex justify-center items-center h-[56px] w-[56px] rounded-full transition-all duration-200 icon-box'>
              <BsBoundingBoxCircles size={23} className='' />
            </div>
            <h2 className='text-2xl font-medium'>Executive Search Expertise</h2>
          </div>
          <div className='mt-4'>
            <p>With our executive search service, we focus on identifying and recruiting senior-level and executive professionals who are instrumental in driving your organization's success. Leveraging our extensive network, industry expertise, and proven methodologies, we target individuals with a track record of leadership and strategic impact. Whether you need C-suite executives, directors, or other senior management roles, we're dedicated to finding the right leaders who align with your vision and goals.</p>
          </div>
        </div>
 */