import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex flex-1">
                    <Sidebar /> {/* Sidebar on the left */}
                    <main className="flex-1 p-4">
                        <Outlet /> {/* Render the matching child route */}
                    </main>
                </div>
                <Footer />
            </div>
        </>

    );
};

export default Home;
