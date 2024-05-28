import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export let Layout = () => {
    //hooks area


    //function dewefinetion area


    //return statments
    return (
        <>
           <Header/>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
        </>
    )
}