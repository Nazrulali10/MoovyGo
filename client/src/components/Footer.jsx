import React from 'react'

const Footer = () => {
  return (
    <div className='md:h-60 h-auto bg-black w-full  flex flex-col relative px-5 md:px-20 py-10 gap-5 md:justify-between mt-10'>
      <div className=' bg-gray-100 rounded-xl p-0 md:p-1 w-20 md:w-40 flex'><img className='h-8 md:h-10 object-contain' src='/icon.png'/></div>
    <div className='flex px-0 md:px-20'>
      <p className='text-gray-500 md:text-sm text-xs'> All ticket sales are final. No refunds, cancellations.Latecomers
              may not be admitted until a suitable break.Outside food and
              beverages are not allowed.Weapons, sharp objects, or any dangerous
              materials are strictly prohibited.Do not attend if you are feeling
              unwell or showing symptoms.The management is not responsible for
              any lost, stolen, or damaged tickets.</p>
    </div>
    <div className='flex items-center justify-center w-full'>
      <p className='text-gray-400 text-xs'>Copyright 2025 © MoovyGo All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer