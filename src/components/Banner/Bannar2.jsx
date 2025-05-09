import React from "react";

const Bannar2 = () => {
  return (
    <>
      {/* sm-banner section */}
      <section className="flex flex-wrap justify-between gap-5 px-4 md:px-10 " id="sm-banner">
            {/* Box 1 */}
            <div
                className="flex flex-col justify-center items-start bg-cover bg-center w-full md:w-[650px] md:m-auto h-[50vh] px-4 md:px-10 transition-all duration-300 ease-in-out"
                style={{ backgroundImage: "url('/banner/b17.jpg')" }}
            >
                <h4 className="text-white text-[16px] md:text-[20px]">crazy deals</h4>
                <h2 className="text-white text-[30px] md:text-[50px] mt-[10px] md:mt-[15px]">buy 1 get 1 free</h2>
                <span className="text-white text-[16px] md:text-[20px] mt-[10px] md:mt-[15px]">
                    The best classic dress is on sale at cara
                </span>
                <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 border border-white text-white hover:bg-[#138176] hover:border-[#138176] transition">
                    Learn More
                </button>
            </div>

            {/* Box 2 */}
            <div
                className="flex flex-col justify-center items-start bg-cover bg-center w-full md:w-[650px] md:m-auto h-[50vh] px-4 md:px-10 transition-all duration-300 ease-in-out"
                style={{ backgroundImage: "url('/banner/b10.jpg')" }}
            >
                <h4 className="text-white text-[16px] md:text-[20px]">Spring/Summer</h4>
                <h2 className="text-white text-[30px] md:text-[50px] mt-[10px] md:mt-[15px]">Upcoming season</h2>
                <span className="text-white text-[16px] md:text-[20px] mt-[10px] md:mt-[15px]">
                    The best classic dress is on sale at cara
                </span>
                <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 border border-white text-white hover:bg-[#138176] hover:border-[#138176] transition">
                    Collection
                </button>
            </div>
        </section>

      {/* banner3 section */}
      <section className="flex flex-wrap justify-between px-4 md:px-[85px] mt-6 w-full" id="banner3">
        {[
          "/banner/b7.jpg",
          "/banner/b4.jpg",
          "/banner/b18.jpg"
        ].map((bg, i) => (
          <div
            key={i}
            className="flex justify-center items-center flex-col w-[30%] md:flex-row  max-md:w-full h-[30vh] p-5 mb-5 bg-center bg-cover"
            style={{ backgroundImage: `url('${bg}')` }}
          >   
          <div>
            <h2 className="text-white font-black text-[22px] sm:text-[20px] xs:text-[16px]">SEASONAL SALE</h2>
            <h3 className="text-[#ec544e] font-extrabold text-[15px] sm:text-[14px] xs:text-[12px]">
              Winter collection -50% OFF
            </h3>

          </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Bannar2;
