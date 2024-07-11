import React from 'react';
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Achievements from './components/Achievements';
import ChooseUs from './components/ChooseUs';
import ContactForm from './components/ContactForm';
import JobSeeker from './components/JobSeeker';

function App() {

  return (
    <>
      <Header />

      <main>

        <Home />

        <About />

        <Services />

        <JobSeeker />

        <Achievements />

        <ChooseUs />

        <ContactForm />
      </main>

      <footer className='py-8 relative border-t border-gray-200 bg-darkBlue'>
        <div className='sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
          <div className='text-center'>
            <p className='text-white'>© <span>2024</span> <strong className="px-1 sitename">Provision Consultancy.</strong> <span>All Rights Reserved.</span></p>
          </div>
        </div>
      </footer>
    </>


  )
}

export default App
