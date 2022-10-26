import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalCart: [],
        totalPrice: 0,
    },
    reducers: {
        addCart: (state, action) => {
            console.log(action.payload);

            const name = action.payload.name;
            const checkItemCart = state.totalCart.find(item => item.name === name)
            const itemIndex = state.totalCart.findIndex(item => item.name === name)
            if (checkItemCart) {
                state.totalCart[itemIndex].quantity++;
            } else {
                state.totalCart.push(action.payload)
            }

        },
        count: (state, action) => {

            const name = action.payload.name;
            const itemIndex = state.totalCart.findIndex(item => item.name === name);
            switch (action.payload.type) {
                case 'add':
                    state.totalCart[itemIndex].quantity++;
                    break;
                case 'remove':
                    if (state.totalCart[itemIndex].quantity > 1) {
                        state.totalCart[itemIndex].quantity--;
                    } else {
                        state.totalCart.splice(itemIndex, 1)
                    }
                    break;
                default:
                    console.log("Check payload");
            }
        },
    }
})

// Action creators are generated for each case reducer function
export const { addCart, count } = cartSlice.actions
export default cartSlice.reducer