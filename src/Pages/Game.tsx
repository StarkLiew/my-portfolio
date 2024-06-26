import React from 'react';
import { MediumIcon } from '../Components/DevIcons';
import Menu from '../Components/Menu';

const About: React.FC = () => {
    return (
        <div className="container w-full h-screen">
            <div className="flex w-full h-screen" >


                <div className=" bg-yellow-700 bg-col2-selected  bg-[length:10%] text-white max-sm:show md:hidden lg:hidden">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Game }`}</h1>
                        <p>Eidetic a reactjs game <br />
                            blowing your neutron</p>
                    </div>
                </div>

                <div className="flex-none p-5 h-full max-w-sm bg-yellow-700 bg-col2-selected text-white bg-[length:50%]  max-sm:hidden max-md:hidden lg:show">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Game }`}</h1>
                        <p>Eidetic a reactjs game <br />
                            blowing your neutron</p>
                    </div>

                    <div >
                        <Menu />
                    </div>
                </div>
                <div className="grow" >
                    <div className="m-10 p-5 ">
                        <h1 className="text-2xl"># Eidetic</h1>
                        <div className="text-center">
                            <h1 className="text-9xl">COMMING SOON</h1>
                            <h3 className="text-2xl">MEANWHILE READ MY ARTICLE ON MEDIUM: </h3>
                            <a className="self-center" href="https://medium.com/@starkliew/how-to-sign-in-using-huawei-id-with-laravel-336a2397b930"><MediumIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;