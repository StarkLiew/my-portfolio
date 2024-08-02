import React from 'react';
import Menu from '../Components/Menu';
import Timeline from '../Components/Timeline';

const Project: React.FC = () => {
    return (
        <div className="container w-full h-screen">
            <div className="flex w-full h-screen" >


                <div className=" bg-green-700 bg-col3-selected  bg-[length:10%] text-white max-sm:show md:hidden lg:hidden">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Delivered }`}</h1>

                    </div>
                </div>

                <div className="flex-none p-5 h-full max-w-sm bg-green-700 bg-col3-selected text-white bg-[length:50%]  max-sm:hidden max-md:hidden lg:show">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Delivered }`}</h1>
                        <p>Delivered Projects </p>
                    </div>

                    <div >
                        <Menu />
                    </div>
                </div>
                <div className="grow" >
                    <div className="m-10 p-5 ">
                        <h1 className="text-2xl"># Past Project Delivery</h1>
                        <div>
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;