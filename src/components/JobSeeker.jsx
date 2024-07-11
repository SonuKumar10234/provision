import React from 'react';

const JobSeeker = () => {
  return (
    <section id='job-seeker' className='py-8 lg:py-12 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
      <div className='text-center px-4 pb-12 relative'>
        <h2 className='before:inline-block before:w-[50px] before:h-[2px] before:bg-accent before:mr-[15px] before:mb-[8px] after:inline-block after:w-[50px] after:h-[2px] after:bg-accent after:ml-[15px] after:mb-[8px] text-2xl font-semibold mb-2'>Job Seekers</h2>
        <p>Provision Consultancy has been a reliable partner for businesses seeking cost-efficient and high-quality recruitment solutions.</p>
      </div>

    <div className='flex justify-center py-8 px-4 border border-[#dce3eb] sm:rounded-md shadow-md'>
      <ul className='space-y-2'>
        <li className=''>✓ Career Coaching: Guiding individuals on career paths, job search strategies, and professional growth.</li>
        <li className=''>✓ Resume and Cover Letter Writing: Assisting in crafting compelling job application materials.</li>
        <li className=''>✓ Interview Preparation: Providing tips, mock interviews, and feedback for interview success.</li>
        <li className=''>✓ Job Matching: Connecting candidates with suitable job opportunities aligned with their skills and goals.</li>
        <li className=''>✓ Networking Opportunities: Facilitating connections with potential employers and industry contacts.</li>
        <li className=''>✓ Skills Development: Offering workshops or training to enhance employability.</li>
        <li className=''>✓ Industry Insights: Providing information on market trends, in-demand skills, and salary expectations.</li>
      </ul>
    </div>
    
    </section>
  )
}

export default JobSeeker;