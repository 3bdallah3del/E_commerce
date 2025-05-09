import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   //item : [],//  me added 
  item: JSON.parse(localStorage.getItem("cart")) || [],
}

export const AddProduct = createSlice({
  name: 'AddProduct',
  initialState,
  reducers: {
    AddProdct : (state , actions)=>{
      state.item.push(actions.payload)
    },
    updateProductQuantity: (state, action) => {
      const index = state.item.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.item[index].quantity = action.payload.quantity;
      }
    },
    deleteproduct:(state ,actions)=>{
      state.item= state.item.filter((item)=>item.id !=actions.payload)
     },
    
  },
})

// Action creators are generated for each case reducer function
export const { AddProdct ,updateProductQuantity , deleteproduct } = AddProduct.actions

export default AddProduct.reducer




// AddProduct 