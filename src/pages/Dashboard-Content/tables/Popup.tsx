import React from 'react'
import { useState } from 'react'

const Popup = props => {
    const [name, setName] = useState('');
    const [os, setOs] = useState('');
    const { setPopUp } = props;

    const submit = (e) => {
        e.preventDefault();
        console.log(os + " " + name);

    }

    const options = [
        {
            label: "Windows-11",
            value: "Windows-11",
        },
        {
            label: "Windows-10",
            value: "Windows-10",
        },
        {
            label: "CENTOS-9",
            value: "CENTOS-9",
        },
        {
            label: "CENTOS-8",
            value: "CENTOS-8",
        },
    ];

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="hidden">Nom</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" placeholder="Nom de la machine" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white text-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 font-semibold focus:border-indigo-500 focus:outline-none" />
                        </div>

                        <div className="flex flex-col mt-2">
                            <select className='bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' value={os} onChange={e => setOs(e.target.value)} name="os" id="os">
                                {options.map((option) => (
                                    <option value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col mt-2'>
                            <button type="submit" disabled={name.length > 50 || !name} onClick={submit} className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                Soumettre
                            </button>
                            <button onClick={() => setPopUp(false)} className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                Annuler
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Popup;