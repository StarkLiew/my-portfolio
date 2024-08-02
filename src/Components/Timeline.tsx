import React from "react";
import * as Icons from '../Components/DevIcons';

const Timeline: React.FC = () => {
    const size = 20;
    return (

        <ol className="border-l border-neutral-300 dark:border-neutral-500">
            <li>
                <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Dec 2023
                    </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold">
                        IMPRESSO App ver. 4.0 Backend and ML
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Sponsors: Xobaedi Sarl <br />
                        Delivered: On-going <br /><br />
                        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" href="https://www.impressoapp.com/nft">Learn more</a>
                    </p>
                    <div className="flex flex-wrap place-content-center gap-4">
                        <Icons.AzureIcon size={size} />
                        <Icons.GoogleCloudIcon size={size} />
                        <Icons.NodejsIcon size={size} />
                        <Icons.PythonIcon size={size} />
                        <Icons.MongoIcon size={size} />
                        <Icons.OpenAiIcon size={size} />
                        <Icons.DockerIcon size={size} />
                        <Icons.FlutterIcon size={size} />
                    </div>
                </div>

            </li>

            <li>
                <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Sep 2022
                    </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold">
                        IMPRESSO App ver. 3.0 Backend
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Sponsors: Xobaedi Sarl <br />
                        Delivered: Sep 2023 <br /><br />
                        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" href="https://www.impressoapp.com/fintech">Learn more</a>
                    </p>
                    <div className="flex flex-wrap place-content-center gap-4">
                        <Icons.AwsIcon size={size} />
                        <Icons.GoogleCloudIcon size={size} />
                        <Icons.LaravelIcon size={size} />
                        <Icons.PythonIcon size={size} />
                        <Icons.MySqlIcon size={size} />
                        <Icons.RedisIcon size={size} />
                        <Icons.RabbitMqIcon size={size} />
                        <Icons.DockerIcon size={size} />
                        <Icons.FlutterIcon size={size} />
                    </div>
                </div>
            </li>

            <li>
                <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Apr 2020
                    </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold">
                        IMPRESSO App ver. 2.0 Backend
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Sponsors: Xobaedi Sarl <br />
                        Delivered: Mar 2021 <br /><br />
                        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" href="https://www.impressoapp.com/">Learn more</a>
                    </p>
                    <div className="flex flex-wrap place-content-center gap-4">
                        <Icons.AwsIcon size={size} />
                        <Icons.LaravelIcon size={size} />
                        <Icons.MySqlIcon size={size} />
                        <Icons.FlutterIcon size={size} />
                    </div>
                </div>
            </li>
            <li>
                <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        Apr 2020
                    </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold">
                        Point of Sales System for Hair Salon
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Sponsors: JuxtPoint<br />
                        Delivered: Dec 2020<br /><br />
                        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" href="https://github.com/StarkLiew/juztpoint">Learn more</a>
                    </p>
                    <div className="flex flex-wrap place-content-center gap-4">
                        <Icons.LaravelIcon size={size} />
                        <Icons.VueJsIcon size={size} />
                        <Icons.MySqlIcon size={size} />
                    </div>
                </div>
            </li>
            <li>
                <div className="flex-start flex items-center pt-3">
                    <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-300">
                        March 2019
                    </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                    <h4 className="mb-1.5 text-xl font-semibold">
                        Extract, Transform, and Load Data From UBS Payroll to SolutionX HR System
                    </h4>
                    <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Sponsors: SolutionX Software Sdn. Bhd. <br />
                        Delivered: Jun 2019<br /><br />
                        <a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" href="https://www.solutionx.com.my/">Learn more</a>
                    </p>
                    <div className="flex flex-wrap place-content-center gap-4">
                        <Icons.ElectronIcon size={size} />
                        <Icons.NodejsIcon size={size} />
                        <Icons.PythonIcon size={size} />
                        <Icons.PostgresqlIcon size={size} />
                    </div>
                </div>
            </li>
        </ol>
    )

}

export default Timeline;