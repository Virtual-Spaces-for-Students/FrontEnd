import React from 'react';
import {
  Message,
  Divider,
} from 'rsuite';
import PageContent from '@/components/PageContent';
import { useState } from 'react';

const Feedback = () => {
  const [titre, setTitre] = useState('');
  const [texte, setTexte] = useState('');

  //Data here
  const submit = (e) => {
    e.preventDefault();
    console.log(titre + " " + texte);
  }

  return (
    <PageContent>
      <Message>
        Veuillez saisir votre feedback, votre login est enregistré automatiquement. Ne le saisissez pas dans le titre!
      </Message>
      <Divider />
      <form className="p-6 flex flex-col justify-center">
        <div className="flex flex-col mt-2">
          <label htmlFor="email" className="hidden">Email</label>
          <input value={titre} onChange={e => setTitre(e.target.value)} name="Titre" placeholder='Titre (50 caractères maximum)' className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 focus:border-indigo-500 focus:outline-none' />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="Texte" className="hidden">Texte</label>
          <textarea value={texte} onChange={e => setTexte(e.target.value)} name="Texte" placeholder='Texte (250 caractères maximum)' rows={5} className='w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 focus:border-indigo-500 focus:outline-none'></textarea>
        </div>
        <button type='submit' disabled={titre.length > 50 || texte.length > 250 || !titre || !texte} onClick={submit} className='md:w-32 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300'>Soumettre</button>
      </form>
    </PageContent>
  );
};

export default Feedback;