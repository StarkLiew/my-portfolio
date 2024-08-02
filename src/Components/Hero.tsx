import React from 'react';
import { Link } from 'react-router-dom';
import DownCircle from '../Components/DownCircle';

const Hero: React.FC = () => {
    return (
        <div className="w-full h-screen max-w-100">
            <div className="grid grid-cols-1 gap-1 h-screen auto-cols-max text-white sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">

                <div className="flex flex-wrap p-5 bg-black hover:bg-red-700 bg-col1 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 border-white">
                        <h1 className="text-3xl">{`{ Portfolio }`}</h1>
                        <p>Stark L</p>
                        <p>product owner</p>
                        <p>fullstack developer</p>
                    </div>
                    <div className="w-full">
                        <Link to="/about"><DownCircle /></Link>
                    </div>

                </div>
           

                <div className="flex flex-wrap p-5 bg-black hover:bg-yellow-700  bg-col2 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 w-full border-white">
                        <h1 className="text-3xl">{`{ Reading }`}</h1>
                        <p>Learn new things and solve new problems</p>
                    </div>

                    <div className="w-full">
                        <Link to="/article"><DownCircle /></Link>
                    </div>

                    
                </div>

                <div className="flex flex-wrap p-5 bg-black hover:bg-green-700 bg-col3 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 w-full border-white ">
                        <h1 className="text-3xl">{`{ Delivered }`}</h1>
                        <p>from 2017 - 10 completed</p>
                    </div>
                    <div className="w-full">
                        <Link to="/projects"><DownCircle /></Link>
                    </div>

                </div>
                <div className="flex flex-wrap p-5 bg-black hover:bg-blue-700 bg-col4 bg-[length:15%] sm:bg-[length:15%] md:bg-[length:10%] lg:bg-[length:50%]">
                    <div className="mx-5 w-full border-white ">
                        <h1 className="text-3xl">{`{ Team up }`}</h1>
                        <p>Complexity need uncertainty</p>
                    </div>
                    <div className="w-full">
                        <Link to="/contact"><DownCircle /></Link>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default Hero;