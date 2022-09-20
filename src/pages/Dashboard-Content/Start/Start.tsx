import React from 'react';
import {
  Message,
  Divider,
} from 'rsuite';
import PageContent from '@/components/PageContent';
import setCookie from '../../../components/Cookie/SetCookie'
import { useState } from 'react';
import { useEffect } from 'react';

const Start = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => { // useEffect hook
    setTimeout(() => { // simulate a delay
      //Récupérer le paramètre dans l'URL
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const token = urlParams.get('token')
      console.log(token)
      if (token !== "") {
        setCookie("token", token)
        setLoading(true)
      } else {
        setLoading(false)
      }

    }, 3000);
  }, []);

  if (isLoading === true) {
    return (
      <div>
      </div>
    );
  } else if (isLoading === false) {
    window.location.replace("http://172.18.8.2:8080/auth/login")
  }
};

export default Start;