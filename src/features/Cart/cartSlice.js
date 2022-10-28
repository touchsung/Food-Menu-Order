import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalCart: [],
        totalPrice: 0,
        soup: [],
        toggleOrder: false
    },
    reducers: {
        addCart: (state, action) => {
            const category = action.payload.category
            const name = action.payload.name;
            const checkItemCart = state.totalCart.find(item => item.name === name)
            const itemIndex = state.totalCart.findIndex(item => item.name === name)
            if (category === 'Soup') {
                console.log(state.soup.length);
                if (state.soup.length < 4) {
                    state.soup.push(action.payload)
                }
            } else {
                if (checkItemCart) {
                    state.totalCart[itemIndex].quantity++;
                } else {
                    state.totalCart.push(action.payload)
                }
            }

        },
        count: (state, action) => {
            const name = action.payload.name;
            const itemIndex = state.totalCart.findIndex(item => item.name === name);
            const itemIndexSoup = state.soup.findIndex(item => item.name === name);

            switch (action.payload.type) {
                case 'add':
                    state.totalCart[itemIndex].quantity++;
                    break;
                case 'remove':
                    if (action.payload.category === 'Soup') {
                        state.soup.splice(itemIndexSoup, 1)
                    }
                    else {
                        if (state.totalCart[itemIndex].quantity > 1) {
                            state.totalCart[itemIndex].quantity--;
                        } else {
                            state.totalCart.splice(itemIndex, 1)
                        }
                    }
                    break;
                default:
                    console.log("Check payload");
            }
        },
        toggle: (state, action) => {
            const type = action.payload.type;
            if (type === 'order') {
                state.toggleOrder = true
            } else {
                state.toggleOrder = false
            }
        },
        clearCart: (state) => {
            state.totalCart = []
            state.totalPrice = 0
            state.soup = []
            state.toggleOrder = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { addCart, count, toggle, clearCart } = cartSlice.actions
export default cartSlice.reducer