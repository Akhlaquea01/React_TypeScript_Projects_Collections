import React from 'react';
import Header from '../components/common/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h2 className="text-2xl">Welcome to the Home Page</h2>
                <p>This is a sample home page.</p>
            </main>
        </div>
    );
};

export default Home;
