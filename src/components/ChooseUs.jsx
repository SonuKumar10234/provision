import React from 'react';
import { provision } from '../utils/constant';
import Card from './Card';

const ChooseUs = () => {
    return (
        <section id='why-Us' className='py-8 lg:py-12'>
            <div className='text-center px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto pb-12 relative'>
                <h2 className='before:inline-block before:w-[50px] before:h-[2px] before:bg-accent before:mr-[15px] before:mb-[8px] after:inline-block after:w-[50px] after:h-[2px] after:bg-accent after:ml-[15px] after:mb-[8px] text-2xl font-semibold mb-2'>Why Choose Us?</h2>
                <p>Why Provision Consultancy?</p>
            </div>
            <div className='px-4 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto'>
                <div className='grid grid-cols-12 gap-x-3 gap-y-3'>
                    {
                        provision.map((item) => (
                            <div className={`col-span-12 md:col-span-6 xl:col-span-3 ${item.bgColor} rounded-md`} key={item.title}>
                                <Card data={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}

export default ChooseUs;