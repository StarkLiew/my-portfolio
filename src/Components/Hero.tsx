import React from 'react';
import { Link } from 'react-router-dom';
import DownCircle from '../Components/DownCircle';

const Hero: React.FC = () => {
    return (
        <div className="w-full h-screen max-w-100">
            <div className="grid grid-cols-1 gap-1 h-screen auto-cols-max text-white sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">

                <div className="relative bg-black hover:bg-red-700 bg-col1 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Portfolio }`}</h1>
                        <p>Stark L</p>
                        <p>product owner</p>
                        <p>fullstack developer &nbsp; web3 hacker</p>
                    </div>
                 
                    <div className="absolute top-10 right-20 hidden sm:block">
                        <Link to="/about"><DownCircle /></Link>
                    </div>

                    <div className="absolute bottom-10 left-5 hidden lg:block">
                        <Link to="/game"><DownCircle /></Link>
                    </div>


                </div>

                <div className="relative bg-black hover:bg-yellow-700  bg-col2 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 border-white">
                        <h1 className="text-3xl">{`{ Game }`}</h1>
                        <div>Eidetic a reactjs game <br />
                            blowing your neutron</div>

                    </div>

                    <div className="absolute top-10 right-20 sm:hidden">
                        <Link to="/game"><DownCircle /></Link>
                    </div>

                    <div className="absolute top-10 right-20 lg:hidden">
                        <Link to="/game"><DownCircle /></Link>
                    </div>

                    <div className="absolute bottom-10 left-5">
                        <Link to="/game"><DownCircle /></Link>
                    </div>
                    
                </div>

                <div className="relative bg-black hover:bg-green-700 bg-col3 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Delivered }`}</h1>
                        <p>from 2017 - 10 completed</p>
                    </div>
                    <div className="absolute top-10 right-20 sm:hidden">
                        <Link to="/projects"><DownCircle /></Link>
                    </div>

                    <div className="absolute top-10 right-20 lg:hidden">
                        <Link to="/projects"><DownCircle /></Link>
                    </div>

                    <div className="absolute bottom-10 left-5">
                        <Link to="/projects"><DownCircle /></Link>
                    </div>
                </div>
                <div className="relative bg-black hover:bg-blue-700 bg-col4 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Team up }`}</h1>
                        <p>Complexity need uncertainty</p>
                    </div>
                    <div className="absolute top-10 right-20 sm:hidden">
                        <Link to="/contacts"><DownCircle /></Link>
                    </div>

                    <div className="absolute top-10 right-20 lg:hidden">
                        <Link to="/contacts"><DownCircle /></Link>
                    </div>

                    <div className="absolute bottom-10 left-5">
                        <Link to="/contacts"><DownCircle /></Link>
                    </div>
                </div>

            </div>
        </div >

    )
}

export default Hero;