import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features'
import Featured from '../../components/Featured-products/Featured'
import Banner from '../../components/Banner/Banner'
import NewArrivals from '../../components/NewArrivals/NewArrivals'
import Bannar2 from '../../components/Banner/Bannar2'
import Shelter from '../../components/Shelter/Shelter'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navgate = useNavigate()

  return (
    <div id='home'>
        <Navbar/>
        <section className="h-[90vh] w-full bg-cover bg-no-repeat bg-[url('/public/hero4.png')] bg-[top_25%_right_0] flex flex-col justify-center items-start px-10 md:px-20 ">
            <h4 className="pb-4 text-sm md:text-lg font-semibold">Trade-in-offer</h4>
            <h2 className=" text-xl md:text-3xl font-bold">Super Value deals</h2>
            <h1 className=" text-3xl md:text-5xl font-extrabold text-Text-color leading-normal">On All products</h1>
            <p className="mt-2 mb-6 text-lg text-basic leading-normal">save more with coupons & up to 70% off!</p>
            <button
              className="bg-[url('/public/button.png')] bg-no-repeat bg-transparent border-none font-bold text-[15px] py-[14px] px-[80px] pl-[65px] text-Text-color cursor-pointer"
              onClick={()=>navgate('/shop')}
            >
                Shop Now
            </button>
        </section>
        <Features/>
        <Featured/>
        <Banner/>
        <NewArrivals/>
        <Bannar2/>
        <Shelter/>
        <Footer/>

    </div>
  )
}

export default Home