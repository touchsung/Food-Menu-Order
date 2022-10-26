import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/Cart/cartSlice'
import showMenuSlice from '../features/showMenu/showMenuSlice'
export default configureStore({
    reducer: {
        category: showMenuSlice,
        cart: cartSlice
    }
})