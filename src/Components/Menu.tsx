import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
    return (
        <ul className="group  flex-wrap">
            <li>
                <Link to="/" className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-red-300">Home</Link>
            </li>
            <li>
                <Link to="/about" className="group relative flex gap-x-6  rounded-lg p-4 hover:bg-red-300">Portfolio</Link>
            </li>
            <li>
                <Link to="/game" className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-red-300">Game</Link>
            </li>
            <li>
                <Link to="/projects" className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-red-300">Delivered</Link>
            </li>
            <li>
                <Link to="/contact" className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-red-300">Team Up</Link>
            </li>
        </ul>
    );

}

export default Menu;

