import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, updateProductQuantity } from '../../AddReducer/AddProduct';

const Cart = () => {
  
  const cartItems = useSelector((state) => state.product.item);
  const dispatch = useDispatch()
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
    <Navbar/>
    <section
        className="h-[40vh] bg-cover bg-no-repeat flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/about/banner.png')" }}
      >
        <h1 className="text-white text-4xl font-bold">#Cart</h1>
        <p className="text-white text-lg">Add your coupun & Save UP TO 70 % </p>
    </section>
    <section id="table" className="px-4 md:px-20 mt-8">
      <table className="w-[95%] border-collapse mx-auto mt-8">
        <thead>
          <tr>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a]">id</th>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a] hidden md:table-cell">IMAGE</th>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a]">PRODUCT</th>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a]">PRICE</th>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a] hidden md:table-cell">count</th>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a] hidden md:table-cell">SUBTOTAL</th>
            <th className="p-1 text-center border text-black font-bold uppercase bg-[#cdd0d24a]">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {/* مثال ثابت - كرره حسب الحاجة */}
          {cartItems.map((item , i)=>(
              <tr key={item.id} className="even:bg-[#f9fafb] hover:bg-[#f1f1f1]">
              <td className="p-1 text-center border">{i+1}</td>
              <td className="p-1 text-center border hidden md:table-cell justify-center ">
                <img
                  src={item.image}
                  alt="Product"
                  className="w-[60px] h-[50px] object-cover m-auto"
                />
              </td>
              <td className="p-1 text-center border">{item.name}</td>
              <td className="p-1 text-center border">${item.price}</td>
              <td className="p-1 text-center border hidden md:table-cell">
              <div className="flex items-center justify-center gap-2">
    <button
      className="px-2 py-1 bg-gray-200 rounded"
      onClick={() => {
        if (item.quantity > 1) {
          dispatch(updateProductQuantity({ id: item.id, quantity: item.quantity - 1 }));
        }
      }}
    >−</button>

    <span>{item.quantity}</span>

    <button
      className="px-2 py-1 bg-gray-200 rounded"
      onClick={() =>
        dispatch(updateProductQuantity({ id: item.id, quantity: item.quantity + 1 }))
      }
    >+</button>
  </div>
              </td>
              <td className="p-1 text-center border hidden md:table-cell">${item.price * item.quantity}</td>
              <td className="p-1 text-center border">
                <button className="bg-[#e74c3c] text-white font-bold py-2 px-3 rounded-md cursor-pointer"
                onClick={()=>dispatch(deleteproduct(item.id))} 
                
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {/* <tr className="even:bg-[#f9fafb] hover:bg-[#f1f1f1]">
            <td className="p-1 text-center border">1</td>
            <td className="p-1 text-center border hidden md:table-cell">
              <img
                src="https://via.placeholder.com/50"
                alt="Product"
                className="w-[50px] h-[100px] object-cover"
              />
            </td>
            <td className="p-1 text-center border">Product Name</td>
            <td className="p-1 text-center border">$20</td>
            <td className="p-1 text-center border hidden md:table-cell">$20</td>
            <td className="p-1 text-center border hidden md:table-cell">$20</td>
            <td className="p-1 text-center border">
              <button className="bg-[#e74c3c] text-white font-bold py-2 px-3 rounded-md cursor-pointer">
                Delete
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
      <div className="w-[95%] mx-auto mt-4 flex justify-end ">
        <h2 className="text-xl font-bold bg-[#cdd0d24a] py-2 px-1 rounded-sm" >Total: ${totalAmount.toFixed(2)}</h2>
      </div>

    </section>
    <Footer/>
    
    
    </>
  )
}

export default Cart