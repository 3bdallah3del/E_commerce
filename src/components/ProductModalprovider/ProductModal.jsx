import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { AddProdct, updateProductQuantity } from '../../AddReducer/AddProduct';

const ProductModal = ({ selectedProduct, setIsOpen }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.item);
  const productInCart = cartItems.find(p => p.id === selectedProduct.id);
  const hundelclick =()=>{
    // if (!size) {
    //   alert("Please choose a size first.");
    //   return;
    // }
    if (productInCart) {
      alert("The product is already available.");
      // dispatch(updateProductQuantity({ id: selectedProduct.id, quantity: productInCart.quantity + quantity }));
    }else{

      dispatch(AddProdct({...selectedProduct , quantity ,  size}));
      setIsOpen(false);
    }
  }
  return (
    <Modal>
      <div className="bg-white max-w-6xl w-[80%] rounded-lg p-4 md:p-6 relative overflow-y-auto " >
        <button
          className="absolute top-3 right-2 text-gray-600 hover:text-black"
          onClick={()=>setIsOpen(false)} 
        >
          <IoMdClose size={25} />
        </button>

        <section className="flex flex-col md:flex-row gap-1 md:gap-8 mt-4 md:mt-1 w-full " >
          <div className="w-full md:w-[40%] md:mr-10 flex-shrink-0 ">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className=" w-[225px] md:w-[450px]  h-[225px] md:h-[450px] rounded object-cover justify-center max-md:m-auto max-md:mt-3"
            />
          </div>

          {/* تفاصيل المنتج */}
          <div className="w-full md:w-[50%] pt-2 md:pt-12">
            <h6 className="text-sm text-gray-500 mb-2">Home / {selectedProduct.category}</h6>
            <h4 className="text-2xl font-semibold mb-4">{selectedProduct.name}</h4>
            <h2 className="text-[26px] text-green-700 font-bold mb-4">
              ${selectedProduct.price}
            </h2>

            <select className="block border p-2 rounded mb-3"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="">Select Size</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="Small">Small</option>
              <option value="Large">Large</option>
            </select>

            <div className="flex items-center mb-4">
              <input
                type="number"
                value={quantity}
                min={1}
                className="w-16 h-[47px] text-base px-2 border mr-4 rounded"
                onChange={(e)=>setQuantity(parseInt(e.target.value))}
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={()=>hundelclick()}
              >
                Add To Cart
              </button>
            </div>

            <h4 className="text-lg font-medium mb-2">Product Details</h4>
            <span className="text-sm text-gray-700 leading-6">
              {selectedProduct.description ||
                "This is a high-quality t-shirt made from 100% cotton. Comfortable, stylish and perfect for everyday wear."}
            </span>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default ProductModal;


//##############################################################################################
        //if you want prevrnt click  to same product  just add for count  1
// import { useSelector } from 'react-redux'; // ضيفها فوق

// const ProductModal = ({ selectedProduct, setIsOpen }) => {
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();

//   const cartItems = useSelector((state) => state.AddProduct.item); // الوصول للمنتجات بالسلة

//   const handleClick = () => {
//     const existingProduct = cartItems.find(item => item.id === selectedProduct.id);

//     if (existingProduct) {
//       // لو المنتج موجود بالفعل، نزود الكمية بدل ما نضيفه تاني
//       const updatedProduct = {
//         ...existingProduct,
//         quantity: existingProduct.quantity + quantity
//       };

//       // نحدث المنتج بدلاً من إضافة جديد (لازم تعمل reducer مخصوص لـ update)
//       dispatch({ type: 'AddProduct/UpdateQuantity', payload: updatedProduct });
//     } else {
//       dispatch(AddProdct({ ...selectedProduct, quantity }));
//     }
//   };
