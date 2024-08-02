import React from 'react';
import { MediumIcon } from '../Components/DevIcons';
import Menu from '../Components/Menu';

const Article: React.FC = () => {
    return (
        <div className="container w-full h-screen">
            <div className="flex w-full h-screen" >

                <div className="grow" >
                    <div className=" bg-yellow-700 bg-col2-selected  bg-[length:10%] text-white max-sm:show md:hidden lg:hidden">
                        <div className="mx-5 border-white ">
                            <h1 className="text-3xl">{`{ Reading }`}</h1>
                            <p>Learn new things and solve new problems</p>
                        </div>
                    </div>



                    <div className="m-10 p-5 ">
                        <h1 className="text-2xl"># Reading</h1>
                        <div>

                            <ul className="divide-y divide-gray-100">
                                <li className="flex justify-between gap-x-6 py-5">
                                    <div className="flex min-w-0 gap-x-4">
                                        <MediumIcon />
                                        <div className="min-w-0 flex-auto">
                                            <p className="text-sm font-semibold leading-6 text-gray-900">How to Sign In using Huawei ID with Laravel</p>
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                                A clear road map by Huawei indicate they are going to debut HarmonyOS on next smartphone in 2021. Given the name started ...
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                        <a href="https://medium.com/@starkliew/how-to-sign-in-using-huawei-id-with-laravel-336a2397b930">Read</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-none p-5 h-full max-w-sm bg-yellow-700 bg-col2-selected text-white bg-[length:50%]  max-sm:hidden max-md:hidden lg:show">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Reading }`}</h1>
                        <p>Learn new things and solve new problems</p>
                    </div>

                    <div >
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;