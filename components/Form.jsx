import React from 'react'

const Form = () => {
  return (
    <div className='bg-primary p-10 flex flex-row h-full'>
        <div className='left h-full w-1/2'>
        <iframe src='https://my.spline.design/macbookprocopy-c8f61670160b1a5180561fab7c0596d7/' frameBorder='0' width='100%' height='100%'></iframe>
        </div>
        <div className='right h-full p-10 w-1/2'>
          <h1 className='text-white text-5xl'>Contact <span className="text-heading">Us</span> </h1>
          <form action="" className='w-full'>
            <div className='w-4/5 my-4'>
                <input className='bg-secondary px-6 py-5 rounded-xl outline-none border-none text-white w-full text-lg' type="text" placeholder='"Enter Your First Name' />
            </div>
            <div className='w-4/5 mb-4'>
                <input className='bg-secondary px-6 py-5 rounded-xl outline-none border-none text-white w-full text-lg'  type="text" placeholder='Enter Your Last Name' />
            </div>
            <div className='w-4/5 mb-4' >
                <input className='bg-secondary px-6 py-5 rounded-xl outline-none border-none text-white w-full text-lg'  type="text" placeholder='"Enter Your Email' />
            </div>
            <div className='w-4/5 mb-4'>
                <input className='bg-secondary px-6 py-5 rounded-xl outline-none border-none text-white w-full text-lg'  type="text" placeholder='"Enter Your Query' />
            </div>
            <button className='cv_button w-4/5'>Connect With Us</button>
          </form>

         </div>
    </div>
  )
}

export default Form