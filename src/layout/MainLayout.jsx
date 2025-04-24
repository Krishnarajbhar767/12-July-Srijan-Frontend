import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />

            <main className="flex-1 overflow-x-hidden overflow-y-auto">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
