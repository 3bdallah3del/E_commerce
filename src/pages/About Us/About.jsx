import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Shelter from '../../components/Shelter/Shelter';

const aboutSections = [
  { img: '/about/a6.jpg' },
  { img: '/about/a5.jpg' },
  { img: '/about/a4.png' },
  { img: '/about/a3.png' },
  { img: '/about/a2.jpg' },
];

export default function About() {
  return (
    <div> 
        <Navbar/>
      {/* Page Header */}
      <section
        className="h-[40vh] bg-cover bg-no-repeat flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/about/banner.png')" }}
      >
        <h1 className="text-white text-6xl font-bold ">#KnowUS</h1>
        <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur</p>
      </section>

      {/* About Sections */}
      {aboutSections.map((section, index) => (
        <section key={index} className="flex gap-[50px] items-start p-8 flex-wrap md:flex-nowrap">
          <img src={section.img} alt="" className="w-full md:w-[45%]" />
          <div className="mt-[30px]">
            <h2 className="text-4xl font-bold mb-4"> Who We Are ? </h2>
            <p className="text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, dignissimos veniam, provident molestias,
              accusamus ea enim facilis consequuntur id voluptatum deserunt assumenda fugiat voluptate recusandae
              obcaecati inventore beatae suscipit quidem.lo Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci repudiandae deserunt nisi ad odit iusto deleniti ipsam iure? Excepturi, iste fugiat? Eum officiis
              corrupti nobis. Aperiam accusamus sunt ex perferendis.
            </p>
          </div>
        </section>
      ))}
       <Shelter/>
       <Footer/>
    </div>
  );
}
