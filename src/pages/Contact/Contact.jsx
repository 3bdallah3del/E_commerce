import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { FaMapLocationDot, FaPhone, FaRegClock } from 'react-icons/fa6';
import { FaRegEnvelope } from 'react-icons/fa';
import Shelter from '../../components/Shelter/Shelter';
import Footer from '../../components/Footer/Footer';
export default function Contact() {
  const team = [
    {
      img: '/public/people/1.png',
      name: 'John Doe',
      role: 'Senior Marketing Manager',
      phone: '+000 123 000 77 88',
      email: 'contact@example.com',
    },
    {
      img: '/people/2.png',
      name: 'William Smith',
      role: 'Senior Marketing Manager',
      phone: '+000 123 000 77 88',
      email: 'contact@example.com',
    },
    {
      img: '/people/3.png',
      name: 'Emma Stone',
      role: 'Senior Marketing Manager',
      phone: '+000 123 000 77 88',
      email: 'contact@example.com',
    },
  ];

  return (
    <div>
      <Navbar/>
      {/* Header Section */}
      <section
        className="h-[40vh] bg-cover bg-no-repeat flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/about/banner.png')" }}
      >
        <h1 className="text-white text-4xl font-bold">#Let's _talk</h1>
        <p className="text-white text-lg">Leave message , we love to hear from You!</p>
      </section>

      {/* Contact Details */}
      <section className="flex flex-wrap md:flex-nowrap justify-between items-center p-8 gap-8">
        {/* Details */}
          <div className="w-full md:w-[40%] space-y-4">
            <span className="text-xl font-bold text-gray-800">GET IN TOUCH</span>
            <h2 className="text-2xl py-5">Visit one of our agency locations or contact us today</h2>
            <h3 className="text-xl text-gray-600 font-semibold">Head Office</h3>
            <ul className="list-none mt-4 space-y-4">
              <li className="flex  text-sm text-gray-600">
                <FaMapLocationDot className="text-base mr-3 " />
                <p>56 Glassford Street Glasgow G1 1UL New York</p>
              </li>
              <li className="flex  text-sm text-gray-600">
                <FaRegClock className="text-base mr-3 " />
                <p>56 Glassford Street Glasgow G1 1UL New York</p>
              </li>
              <li className="flex  text-sm text-gray-600">
                <FaPhone className="text-base mr-3 " />
                <p>56 Glassford Street Glasgow G1 1UL New York</p>
              </li>
              <li className="flex  text-sm text-gray-600">
                <FaRegEnvelope className="text-base mr-3 " />
                <p>56 Glassford Street Glasgow G1 1UL New York</p>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full md:w-[40%] hidden md:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.330599451683!2d31.356261624506118!3d31.044894870479588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd4295c80e9%3A0x29c566a018cecb77!2z2KzYp9mF2LnYqSDYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1733926722820!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
      </section>

      {/* Contact Form & Team */}
      <section className="flex flex-col md:flex-row p-8 gap-8 ">
        {/* Form */}
        <div className="flex w-[60%] max-md:w-full md:mr-5 flex-col">
          <h2 className="text-2xl md:text-4xl mb-5 font-bold">We love to hear from you</h2>
          <form className="flex flex-col space-y-4 w-full">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full md:w-[80%] p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full md:w-[80%] p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full md:w-[80%] p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="w-full md:w-[80%] p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full md:w-[80%] bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
        {/* Team */}
        <div className="w-[40%] max-md:w-full space-y-6 items-end mt-10 md:mt-0">
          {team.map((member, index) => (
            <div key={index} className="flex items-start gap-4">
              <img src={member.img} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h4 className="text-base font-semibold">{member.name}</h4>
                <p className="text-sm">{member.role}</p>
                <p className="text-sm">{member.phone}</p>
                <p className="text-sm">{member.email}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
      <Shelter/>
      <Footer/>
    </div>
  );
}
