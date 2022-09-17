import React from 'react';
import {
  Message,
  Divider,
} from 'rsuite';
import PageContent from '@/components/PageContent';
import { useState } from 'react';

const Start = () => {
  const [titre, setTitre] = useState('');
  const [texte, setTexte] = useState('');

  //Data here
  const submit = (e) => {
    e.preventDefault();
    console.log(titre + " " + texte);
  }

  return (
    <div>
      
    </div>
  );
};

export default Start;