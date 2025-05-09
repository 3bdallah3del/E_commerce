import { IoClose } from "react-icons/io5";
import { Link, Links } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar_Mobile = ({ setOpenMenu }) => {
  return (
    <div className="block md:hidden fixed right-0 bottom-0 z-40 h-full w-[300px] bg-light drop-shadow-md">
      <div className="flex justify-end p-4">
        <button>
          <IoClose
            size={30}
            className="block md:hidden mt-4 cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </button>
      </div>

      <div>
        <div className="flex font-semibold flex-col gap-8 pt-6 items-center justify-center">
          <Link className="hover:text-blue" to='/'>Home</Link>
          <Link className="hover:text-blue"to="/shop" >Shop</Link>
          <Link className="hover:text-blue" to="/about">About Us</Link>
          <Link className="hover:text-blue" to="/contact">Contact us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Mobile;
