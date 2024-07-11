import React from 'react'

const Card = ({data}) => {
    return (
        <div className='achievement-item py-8 px-4 relative text-center border border-[#dce3eb] rounded-md'>
            <h4 className='font-semibold text-lg text-gray-500'>{data.title}</h4>
            <p>{data.desc}</p>
        </div>
    )
}

export default Card;