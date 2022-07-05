import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../CSS/Accueil.css";
import Bgparticles from './Particles';

function Connexion() {

    const [entered, setEntered] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username !== "" && password !== "") {
            const data = {
                username: username,
                password: password
            }
            console.log(data)
        } else {
            toast.error('Votre login ou votre mot de passe est vide!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


        // axios.post('ttp://localhost:2000/', data).then(res => {
        //     setData(res.data);
        //     setUsername('');
        //     setPassword('');
        //      link
        // }).catch(err => {
        //     //Erreur
        // });
    }  

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#4706FF]">
            <Bgparticles/>
            <form className="bg-white z-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-80 items-center justify-center ">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-mono font-bold mb-2" htmlFor="username">
                        Login
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Login" value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Mot de passe
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <p className="text-red-500 text-xs italic">Saisissez un mot de passe.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-mono font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " type="submit" onClick={handleSubmit}>
                        Connexion
                    </button>
                </div>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <p className="text-center text-white text-xs">
                &copy;2022 Educative IT Solutions. All rights reserved.
            </p>
            <svg className="absolute inset-x-0 bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path className="" fill="#4b4e6d" fillOpacity="1" d="M0,256L40,256C80,256,160,256,240,261.3C320,267,400,277,480,277.3C560,277,640,267,720,229.3C800,192,880,128,960,128C1040,128,1120,192,1200,213.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default Connexion;