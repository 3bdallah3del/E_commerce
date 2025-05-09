import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import  AddProduct  from './AddReducer/AddProduct.jsx';
const store = configureStore({
  reducer: {
    product :AddProduct
    
  },
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
