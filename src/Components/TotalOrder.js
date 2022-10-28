import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggle } from "../features/Cart/cartSlice";

export const TotalOrder = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart);
    return (
        <div className="h-[90%] bottom-0 w-[90%] absolute top-[50px] left-[50px] drop-shadow-md rounded-md bg-white p-5 z-40">
            <div className="row-span-1">
                <h2 className="my-4 font-medium">Total Order</h2>
                <hr />
            </div>
            <div className="h-[520px] my-2 pl-5">
                <ul className=" overflow-y-scroll h-[520px]">
                    {cart.totalCart.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center justify-between">
                                <h2 className="my-4 font-medium">{item.name}</h2>
                                <div className="mr-8">
                                    <h2 className="font-medium flex items-center justify-center">{item.quantity}</h2>
                                </div>
                            </li>

                        )
                    })}
                </ul>
            </div>
            <div className="flex justify-center">
                <button className=" bg-green-400 w-28 h-8 rounded-2xl flex items-center justify-center relative mx-2 text-xl font-semibold  text-white" onClick={() => {
                    alert("Order successfully")
                    dispatch(clearCart())
                }}>Order</button>
                <button className=" bg-rose-400 w-28 h-8 rounded-2xl flex items-center justify-center relative mx-2 text-xl font-semibold  text-white" onClick={() => dispatch(toggle({ type: 'cancel' }))}>Cancel</button>
            </div>
        </div>
    )
};