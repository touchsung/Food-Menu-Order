import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../features/Cart/cartSlice";

export const TotalPrice = () => {

    const dispatch = useDispatch()
    return (
        // <h2 className="my-4 font-medium">Total Price</h2>
        <div>
            <h2 className=" bg-rose-600 h-10 flex justify-center items-center rounded-3xl mx-3 text-white font-medium my-2" onClick={() => dispatch(toggle({ type: "order" }))}>Order Now</h2>
        </div>
    )
}