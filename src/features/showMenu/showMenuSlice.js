import { createSlice } from '@reduxjs/toolkit'

export const showMenuSlice = createSlice({
    name: 'selectCategory',
    initialState: {
        category: "Soup"
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setCategory } = showMenuSlice.actions

export default showMenuSlice.reducer