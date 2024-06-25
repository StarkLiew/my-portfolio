import React from 'react';
import { Link } from 'react-router-dom';
import { LaravelIcon, NodejsIcon, ReactjsIcon, PythonIcon, DockerIcon, AwsIcon, AzureIcon, TailwindIcon } from '../Components/DevIconss';

const About: React.FC = () => {

    return (
        <div className="container w-full h-screen">
            <div className="flex w-full h-screen" >

                <div className="grow" >
                    <div className=" bg-red-700 bg-col1-selected  bg-[length:10%] text-white max-sm:show md:hidden lg:hidden">
                        <div className="mx-5 border-white ">
                            <h1 className="text-3xl">{`{ Portfolio }`}</h1>
                            <p>Stark L</p>
                            <p>product owner</p>
                            <p>fullstack developer &nbsp; web3 hacker</p>
                        </div>
                    </div>

                    <div className="m-10 p-5">
                        <h1> # About Me</h1>

                        <div>
                            <p>
                                I am a versatile full stack developer and certified product owner with over 10 years of experience in the complete lifecycle of web, Web3, and AI product development. My expertise has been instrumental in helping a startup company in Switzerland become the runner-up in the Huawei App Challenge in 2020. I possess extensive knowledge of various business processes, including CRM, ERP, and payroll systems. Additionally, I have a solid background in working with older database systems and performing ETL operations.

                            </p>
                            <p>
                                Key Skills: <br /><br />
                                Full Stack Development: Proficient in front-end and back-end technologies, ensuring seamless integration and functionality across web applications.
                                Web3 Technologies: Experienced in blockchain development and decentralized applications.
                                AI Product Development: Skilled in integrating artificial intelligence to enhance product capabilities and user experiences.
                                Business Process Knowledge: Deep understanding of CRM, ERP, and payroll systems, enabling efficient and effective business operations.
                                ETL Processes: Expertise in data extraction, transformation, and loading, particularly with legacy systems.
                            </p>
                            <p>

                                Professional Highlights:<br /><br />
                                Huawei App Challenge 2020: Played a key role in a Swiss startup's achievement as the runner-up in this prestigious competition.
                                Certified Product Owner: Successfully managed product development processes, ensuring alignment with business goals and user needs.
                                Cross-Functional Expertise: Adept at bridging the gap between technical and business teams, fostering collaboration and innovation.

                            </p>
                        </div>
                        <div className="m-10">
                            <h1> TECHNICAL </h1>
                            <div className="flex flex-wrap place-content-center gap-4">
                                <LaravelIcon />
                                <PythonIcon />
                                <NodejsIcon />
                                <ReactjsIcon />
                                <TailwindIcon />
                                <DockerIcon />
                                <AwsIcon />
                                <AzureIcon />
                            </div>
                        </div>

                        <div className="m-10">

                            <div className="flex flex-wrap place-content-center gap-10">
                                <div><a href="">RESUME</a></div>
                                <div><a href="https://www.github.com/starkliew">GITHUB</a></div>
                                <div><a href="https://www.linkedin.com/in/starkliew">LINKEDIN</a></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex-none p-5 h-full max-w-sm bg-red-700 bg-col1-selected text-white bg-[length:50%]  max-sm:hidden max-md:hidden lg:show">
                    <div className="mx-5 border-white ">
                        <h1 className="text-3xl">{`{ Portfolio }`}</h1>
                        <p>Stark L</p>
                        <p>product owner</p>
                        <p>fullstack developer &nbsp; web3 hacker</p>
                    </div>

                    <div >
                        <ul>
                            <li>
                                <Link to="/" className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-red-300">Home</Link>
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default About;