import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import newarrivals from '../../data/products.json'
import ProductModal from '../ProductModalprovider/ProductModal';
import { useDispatch } from 'react-redux';
import { AddProdct } from '../../AddReducer/AddProduct';
const NewArrivals = () => {
  const dispatch = useDispatch();
    const arrivals = newarrivals.filter(product => product.isNewArrival === true)
    //  const hundelclick =()=>{

    //   dispatch(AddProdct({...selectedProduct }));
  
    // }

    const [isOpen , setisOpen] =useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <section className="py-12 text-center">
          <h1 className="text-5xl font-semibold mb-4"> NewArrivals Products </h1>
          <p className="text-gray-500 mb-10">Summer Collection New Modern Design</p>
    
          <div className="flex flex-wrap justify-center gap-8">
            {arrivals.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-5 w-[80%] sm:w-[250px] text-left relative overflow-hidden transition-shadow hover:shadow-xl cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);  // تعيين المنتج المختار
                  setisOpen(true);  // فتح المودال
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-xl"
                />
                <span className="text-gray-500 text-sm block mt-2">{product.brand}</span>
                <h5 className="font-semibold my-1">{product.title}</h5>
                <div className="text-yellow-400 mb-1">
                  {"★".repeat(product.rating)}
                </div>
                <p className="text-green-500 font-semibold text-lg ">${product.price}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center absolute bottom-5 right-5 shadow-md"
                  // onClick={()=>hundelclick()}
                >
                <FaShoppingCart  size={23}/>
                </button>
              </div>
            ))}
          </div>
          {isOpen && selectedProduct && (
            <ProductModal
              selectedProduct={selectedProduct}  // إرسال المنتج المختار
              setIsOpen={setisOpen}  // إرسال دالة غلق المودال
            />
          )}
        </section>
  )
}

export default NewArrivals