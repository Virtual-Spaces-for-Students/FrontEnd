import { Link } from "react-router-dom";
import "../CSS/Accueil.css";
import logo from '../Images/logo.png';
import Bgparticles from "./Particles";

function Accueil() {
    return (
        <div className="wave-container bgColor">
            <div className="flex mt-10 ">
                <Link to="/signin" className="absolute top-5 right-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-3 text-center h-12 w-50 font-mono">
                    Se Connecter
                </Link>                
                <div className="w-screen bg-opacity-50 mb-5  py-5 text-white flex justify-center relative">
                    <img className="float-left w-40 mr-6 rounded-full " src={logo} alt="Logo de VSS"></img>
                    <h1 className="block text-8xl font-mono font-bold text-center my-auto">Virtual Spaces For Students</h1>
                </div>
            </div>
            <p className="text-6xl font-mono mt-20">Une solution efficace pour chaque profils</p>
            <p className="text-4xl font-mono mt-72 z-10">Educative IT Solutions, une association au service des universités et de leurs étudiants!</p>
            <svg className="flex w-full items-center h-10 mt-32" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
            <svg className="absolute inset-x-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path className="" fill="#4b4e6d" fillOpacity="1" d="M0,256L40,256C80,256,160,256,240,261.3C320,267,400,277,480,277.3C560,277,640,267,720,229.3C800,192,880,128,960,128C1040,128,1120,192,1200,213.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div >
    )
}

export default Accueil;