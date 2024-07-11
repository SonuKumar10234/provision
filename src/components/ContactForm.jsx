import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";

const ContactForm = () => {
  return (
    <section id='contact' className='py-8 lg:py-12'>
          <div className='text-center px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto pb-16 relative'>
            <h2 className='before:inline-block before:w-[50px] before:h-[2px] before:bg-accent before:mr-[15px] before:mb-[8px] after:inline-block after:w-[50px] after:h-[2px] after:bg-accent after:ml-[15px] after:mb-[8px] text-2xl font-semibold mb-2'>Contact</h2>
            <p>Get in touch with us.</p>
          </div>
          <div className='px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
            <div className='flex flex-wrap'>
              <div className='w-full max-w-full lg:w-5/12'>
                <div className='flex'>
                  <div className='mr-6 bg-accent text-white flex justify-center items-center h-[50px] w-[50px] rounded-full transition-all duration-200'>
                    <IoLocationOutline size={20} className='' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Address</h3>
                    <p className=''>F-50, Katwariya Sarai, New Delhi - 110067</p>
                  </div>
                </div>
                <div className='flex mt-[40px]'>
                  <div className='mr-6 bg-accent text-white flex justify-center items-center h-[50px] w-[50px] rounded-full transition-all duration-200'>
                    <IoCallOutline size={20} className='' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Call Us</h3>
                    <p>+91 8383026249</p>
                  </div>
                </div>
                <div className='flex mt-[40px]'>
                  <div className='mr-6 bg-accent text-white flex justify-center items-center h-[50px] w-[50px] rounded-full transition-all duration-200'>
                    <TfiEmail size={20} className='' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Email Us</h3>
                    <p>info@provisionconsultancy.in</p>
                  </div>
                </div>
              </div>
              <div className='w-full max-w-full lg:w-7/12'>
                <form className='h-full'>
                  <div className='flex flex-wrap'>
                    <div className='w-full max-w-full md:w-1/2 mt-6 lg:mt-0 md:px-3'>
                      <input type='text' name='name' placeholder='Your Name' required className='shadow-sm border border-gray-300 text-[#444444] rounded-md focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none block w-full p-2.5' />
                    </div>
                    <div className='w-full max-w-full md:w-1/2 mt-6 lg:mt-0 md:px-3'>
                      <input type='email' name='email' placeholder='Your Email' required className='shadow-sm border border-gray-300 text-[#444444] rounded-md focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none block w-full p-2.5' />
                    </div>
                    <div className='w-full max-w-full mt-6 md:px-3'>
                      <input type='text' name='subject' placeholder='Your Subject' required className='shadow-sm border border-gray-300 text-[#444444] rounded-md focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none block w-full p-2.5' />
                    </div>
                    <div className='w-full max-w-full mt-6 md:px-3'>
                      <textarea name='message' rows={6} placeholder='Your Message' required className='shadow-sm border border-gray-300 text-[#444444] rounded-md focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none block w-full p-2.5'></textarea>
                    </div>
                    <div className='w-full max-w-full mt-6 md:px-3'>
                      <button type='submit' className='px-6 py-3 text-white bg-accent hover:bg-secondary cursor-pointer transition-all duration-200 rounded-full '>Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ContactForm;