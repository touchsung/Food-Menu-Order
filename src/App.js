import React from "react";
import { NavBar } from './Components/NavBar';
import { Section } from './Components/Section';
import { TotalOrder } from './Components/TotalOrder';
import { CategoryMenu } from "./Components/CategoryMenu";
import { ListMenu } from "./Components/ListMenu";
import { TotalPrice } from "./Components/TotalPrice";
import { useSelector } from "react-redux";

const App = () => {
    const toggleOrder = useSelector(state => state.cart.toggleOrder)
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="w-[1024px] h-[768px] overflow-hidden relative bg-white outline outline-[1px]">
                <NavBar />
                <div className="grid grid-cols-10 grid-flow-col ">
                    <div className="col-span-2">
                        <CategoryMenu />
                    </div>
                    <div className="col-span-5">
                        <Section />
                    </div>
                    <div className="col-span-3">
                        <TotalPrice />
                        <ListMenu />
                    </div>
                </div>
                {toggleOrder && <TotalOrder />}
            </div>
        </div>
    )
}

export default App