import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className=' bg-green-800 items-center'>
                <div className='flex justify-between max-w-7xl m-auto'>
                    <nav>
                        <a className='inline-block p-5 text-white text-xl' href="/home">React Tailwind</a>
                    </nav>
                    <nav>
                        <a className=' inline-block p-5 text-white' href="/home">Home</a>
                        <a className=' inline-block p-5 text-white' href="/product">Poduct</a>
                        <a className=' inline-block p-5 text-white' href="/services">Services</a>
                        <a className=' inline-block p-5 text-white' href="/portfolio">Portfolio</a>
                        <a className=' inline-block p-5 text-white' href="/abot">About</a>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Header;