import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import Modal from '../Modal/Modal';
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="flex flex-wrap justify-between p-4 px-6 md:px-20">
        <div className="flex flex-col mb-5">
            <img className="logo mb-3" src="/logo.png" alt="logo" />
            <h4 className="text-sm pb-5 font-bold">Contact :</h4>
            <p className="text-xs mb-2 text-[#465b52]">
                <strong className="font-bold text-black">Address:</strong> 56, Street 32, Mansoura
            </p>
            <p className="text-xs mb-2 text-[#465b52]">
                <strong className="font-bold text-black">Phone:</strong> +01 2222 365/(+91) 01 2345 6789
            </p>
            <p className="text-xs mb-2 text-[#465b52]">
                <strong className="font-bold text-black">Hours:</strong> 10:00-18:00, Mon - Sat
            </p>
            <div className="follow mt-3">
                <h4 className="text-sm pb-5 font-bold">Follow us</h4>
                <div className="icon flex">
                <FaFacebookF className="text-[#465b52] p-1 cursor-pointer hover:text-blue" size={23}/>
                <FaTwitter className="text-[#465b52] p-1 cursor-pointer hover:text-blue" size={23}/>
                <FaInstagram className="text-[#465b52] p-1 cursor-pointer hover:text-blue" size={23}/>
                <FaPinterestP className="text-[#465b52] p-1 cursor-pointer hover:text-blue" size={23}/>
                <FaYoutube className="text-[#465b52] p-1 cursor-pointer hover:text-blue" size={23}/>
                </div>
            </div>
        </div>
    <div className="flex flex-col mb-5">
      <h4 className="text-sm pb-5 font-bold">About</h4>
      <a href="#" className="text-sm text-[#465b52] mb-2">About Us</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">Delivery Information</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">Privacy Policy</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">Terms & Conditions</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">Contact Us</a>
    </div>
    <div className=" flex flex-col mb-5">
      <h4 className="text-sm pb-5 font-bold">Install App</h4>
      <a href="#" className="text-sm text-[#465b52] mb-2">Sign In</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">View Cart</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">My Wishlist</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">Track My Order</a>
      <a href="#" className="text-sm text-[#465b52] mb-2">Help</a>
    </div>
    <div className=" flex flex-col mb-5">
      <h4 className="text-sm pb-5 font-bold">My Account</h4>
      <p className="text-md mb-2 text-[#465b52] tracking-wide">From App Store or Google Play</p>
      <div className="row flex w-[115px]">
        <img className="border border-[#088178] rounded-lg m-2" src="/pay/app.jpg" alt="pay" />
        <img className="border border-[#088178] rounded-lg m-2" src="/pay/play.jpg" alt="pay" />
      </div>
      <p className="text-xs mb-2 text-[#465b52]">Secured Payment Gateways</p>
      <img className="mb-2 " src="/pay/pay.png" alt="" />
    </div>
    <div className="copyright w-full text-center">
      <p className="text-md  text-[#465b52]">© 2025 - HTML CSS Ecommerce Template</p>
    </div>

    {/* <button onClick={() => setIsOpen(true) }>بسيبسيبس </button>
    {isOpen? (
      <Modal>
       <div className="bg-white w-[320px] sm:w-[550px] text-center p-5 rounded-lg  flex flex-col items-center justify-center relative  ">
        <p onClick={()=>setIsOpen(false)}>X</p>
       </div>
      </Modal>
    ):null} */}
  </footer>
  )
}

export default Footer