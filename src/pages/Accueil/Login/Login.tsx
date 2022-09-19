import React from 'react'
import { useState } from 'react'
import logo from '../../../images/logo_VSS.png';

const Popup = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { setPopUp } = props;

    const submit = (e) => {
        e.preventDefault();
        console.log(login + " " + password);

    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                            VSS
                        </a>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Connectez-vous à votre compte !
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre login</label>
                                        <input type="text" value={login} onChange={e => setLogin(e.target.value)} name="login" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Login" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <button onClick={submit} type="submit" disabled={!login || !password} className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300 p-6">Connexion</button>
                                        <button onClick={() => setPopUp(false)} className="bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-red-800 transition ease-in-out duration-300">Annuler</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;