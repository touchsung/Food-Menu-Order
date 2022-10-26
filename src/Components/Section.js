import React from "react";
import { ListTotalCart } from "./ListTotalCart";

export const Section = () => {
    return (
        <div className="grid grid-rows-6 h-screen px-4">
            <div className="row-span-1">
                <h2 className="my-4 font-medium">Soup</h2>
                <hr />
            </div>
            <div className="row-span-5">
                <ListTotalCart />
            </div>
        </div>
    )
};