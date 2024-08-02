import React from 'react';
import Menu from '../Components/Menu';

const Contact: React.FC = () => {
    return (
        <div className="container w-full h-screen">
            <div className="flex w-full h-screen" >

                <div className="grow" >
                    <div className=" bg-blue-700 bg-col4-selected  bg-[length:10%] text-white max-sm:show md:hidden lg:hidden">
                        <div className="mx-5 border-white ">
                            <h1 className="text-3xl">{`{ Team up }`}</h1>

                        </div>
                    </div>


                    <div className="m-10 p-5 ">
                        <h1 className="text-2xl"># Let team up</h1>
                        <div className="m-10">

                            <div className="flex flex-wrap place-content-center gap-10">

                                <div><a href="https://www.github.com/starkliew">GITHUB</a></div>
                                <div><a href="https://www.linkedin.com/in/starkliew">LINKEDIN</a></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex-none p-5 h-full max-w-sm bg-blue-700 bg-col4-selected text-white bg-[length:50%]  max-sm:hidden max-md:hidden lg:show">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Team up }`}</h1>
                        <p>Team up</p>
                    </div>

                    <div >
                        <Menu />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;