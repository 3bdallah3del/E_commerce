import React from 'react'

const Shelter = () => {
  return (
    <section className="flex justify-between items-center flex-wrap bg-[#041e42] bg-no-repeat bg-[url('/banner/b14.png')] bg-[20%_30%] p-4 md:p-14  ">
      <div className=" max-md:items-center">
        <h4 className="text-white text-xl font-bold">Sign Up For Newsletters</h4>
        <p className="text-[#818ea0] text-sm font-semibold">
          Get E-mail updates about our latest shop and{' '}
          <span className="text-[#ffbd27]">special offers.</span>
        </p>
      </div>
      <div className="flex md:w-2/5 w-full ">
        <input
          type="text"
          placeholder="Your email address"
          className=" text-sm  border-transparent rounded-l-md focus:outline-none h-12 w-full py-0 px-5"
        />
        <button className="bg-[#088178] text-white p-2 rounded-r-md h-12 whitespace-nowrap">
          Sign Up
        </button>
      </div>
    </section>
  )
}

export default Shelter