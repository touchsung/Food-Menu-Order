import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { count } from "../features/Cart/cartSlice";
import { ListTotalCart } from "./ListTotalCart";

export const Section = () => {
    const soup = useSelector(state => state.cart.soup)
    const dispatch = useDispatch()
    return (
        <div className="grid grid-rows-6 h-screen px-4">
            <div className="row-span-1">
                <h2 className="my-4 font-medium">Soup</h2>
                <hr />
                <div className="soup flex mt-2">
                    <div className="grid grid-cols-2 mr-10 z-10 ">
                        {soup.map((item, index) => {
                            return (
                                <img src={item.img} alt={item.name} key={index} className=" bg-cover w-20 h-20" />
                            )
                        })}
                    </div>
                    <img src={require('../img/pot.jpg')} alt="pot" className="w-40 h-40 absolute"></img>

                    <div className="flex flex-col">
                        {soup.map((item, index) => {
                            return (
                                <div key={index} className="flex justify-between my-2">
                                    <h2 className="font-medium mr-5">{item.name}</h2>
                                    <button className=" bg-rose-400 w-6 h-6 rounded-2xl flex items-center justify-center relative"><h3 className="text-2xl font-bold absolute top-[-6px] text-white" onClick={() => dispatch(count({ name: item.name, category: item.category, price: 0, type: 'remove' }))}>-</h3></button>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="row-span-5 mt-20">
                <ListTotalCart />
            </div>
        </div>
    )
};