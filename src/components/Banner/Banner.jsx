import React from 'react'

const Banner = () => {
  return (
    <section
        id="banner"
        className="flex flex-col justify-center items-center h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/public/banner/b2.jpg')" }}
>
        <h4 className="text-white text-sm">Repair services</h4>
        <h2 className="text-white text-2xl text-center py-2">
            Up To <span className="text-red-600">70% off </span>-All t-Shirts & Accessorise
        </h2>
        <button className="bg-white text-black px-4 py-2 mt-2 hover:bg-transparent border hover:text-white transition text-md font-semibold">
            Explore More
        </button>
    </section>
  )
}

export default Banner