import React from 'react'

const Features = () => {
    const features = [
        { img: "/features/f1.png", title: "Free shipping", bg: "bg-[#fddde4]" },
        { img: "/features/f2.png", title: "Online order", bg: "bg-[#cdebbc]" },
        { img: "/features/f3.png", title: "Save Money", bg: "bg-[#d1e8f2]" },
        { img: "/features/f4.png", title: "Promotions", bg: "bg-[#cdd4f8]" },
        { img: "/features/f5.png", title: "Happy Sell", bg: "bg-[#f6dbf6]" },
        { img: "/features/f6.png", title: "F 24/7 Support", bg: "bg-[#fff2e5]" },
      ];
  return (
    <section
        id="feature"
        className="flex flex-wrap items-center justify-between gap-2 px-4 py-10 md:justify-center md:gap-5"
    >
        {features.map((feature, index) => (
        <div
            key={index}
            className="w-[180px] p-6 border border-[#cce7d0] text-center shadow-md rounded-sm hover:shadow-lg transition-shadow duration-300 ease-in-out md:w-[45%] lg:w-[180px]  m-auto"
        >
            <img src={feature.img} alt="feature" className="w-full mb-3" />
            <h6 className={`inline-block px-2 py-2 leading-none rounded-sm text-Text-color text-sm font-semibold ${feature.bg}`}>
            {feature.title}
            </h6>
        </div>
        ))}
  </section>
  )
}

export default Features