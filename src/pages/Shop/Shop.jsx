import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Navbar from '../../components/Navbar/Navbar'
import data from '../../data/products.json'
import Shelter from '../../components/Shelter/Shelter';
import ProductModal from '../../components/ProductModalprovider/ProductModal';
import Footer from '../../components/Footer/Footer'
import Filter from '../../components/Filter/Filter';
const Shop = () => {
  const [isOpen , setisOpen] =useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState(null); //  The user clicks on the status to start filtering.
  const productsPerPage = 10;


  
  // Filter products by category
  const filteredData =  filterCategory ? data.filter(product => product.category === filterCategory) : data;

  const totalPages = Math.ceil(filteredData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredData.slice(startIndex, endIndex);


  //################################################################################## 
  // when he use to slice data  and made apagnation
  // // احسب المنتجات اللي هتتعرض في الصفحة الحالية
  // const startIndex = (currentPage - 1) * productsPerPage;
  // const endIndex = startIndex + productsPerPage;
  // const currentProducts = data.slice(startIndex, endIndex);  //store data in varible

  // // احسب عدد الصفحات تلقائيًا
  // const totalPages = Math.ceil(data.length / productsPerPage);
  // console.log(setCurrentPage);
  return (
    <>
    <Navbar/>
    <section
        id="banner"
        className="flex flex-col justify-center items-center h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
    >
        <h1 className="text-white text-6xl font-bold ">#Stayhome</h1>
        <h2 className="text-white text-1xl text-center py-2">
            Up To <span className="text-red-600">70% off </span>-All t-Shirts & Accessorise
        </h2>
    </section>
        <section className="py-12 text-center">
              <h1 className="text-5xl font-bold mb-4">Shop Our Latest Collection</h1>
              <p className="text-gray-500 mb-10">Explore trendy styles and exclusive discounts on all products.</p>

              <div className="flex justify-center px-20">
                <Filter onFilterChange={setFilterCategory} />
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    // className="bg-white rounded-xl shadow-md p-5 w-[80%] sm:w-[250px] text-left relative overflow-hidden transition-shadow hover:shadow-xl"
                    className="bg-white rounded-xl shadow-md p-5 w-[80%] sm:w-[250px] text-left relative overflow-hidden transition-shadow hover:shadow-xl cursor-pointer"
                    onClick={() => {
                      setSelectedProduct(product);  // تعيين المنتج المختار
                      setisOpen(true);  // فتح المودال
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full sm:w-[235px] rounded-xl h-[300px] sm:h-[230px]"
                    />
                    <span className="text-gray-500 text-sm block mt-2">{product.brand}</span>
                    <h5 className="font-semibold my-1">{product.title}</h5>
                    <div className="text-yellow-400 mb-1">
                      {"★".repeat(product.rating)}
                    </div>
                    <p className="text-green-500 font-semibold text-lg ">${product.price}</p>
                    <button className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center absolute bottom-5 right-5 shadow-md">
                    <FaShoppingCart  size={23}/>
                    </button>
                  </div>
                ))}
              </div>
              {isOpen && selectedProduct && (
            <ProductModal
              selectedProduct={selectedProduct}  //Send the selected product
              setIsOpen={setisOpen}  
            />
          )}

        </section>
        {/* أزرار الصفحات */}
      <section className='text-center flex items-center justify-center gap-3 mb-4'>
        {Array.from({ length: totalPages }, (_, i) => (
          <a
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`text-white px-5 py-3 rounded-md cursor-pointer ${
              currentPage === i + 1 ? 'bg-blue' : 'bg-gray-300'
            }`}
          >
            {i + 1}
          </a>
        ))}

        
      </section>
    
    <Shelter/>
    <Footer/>
    </>
  )
}

export default Shop



// {Array.from({length:totalPages} ,(_,i)=>(
//   <a
//   key={i+1}
//   onClick={()=>setCurrentPage(i+1)}
//   className={`text-white px-5 py-3 rounded-md cursor-pointer
//     ${
//       currentPage===i+1 ? "bg-blue " :'bg-gray-50'
//     }
//   `}
//   >
//   {i+1}
//   </a>
// ))}