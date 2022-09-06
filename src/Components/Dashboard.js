import React, { useState } from 'react';
import setCookie from './setCookie';
import getCookie from './getCookie';
import removeCookie from './removeCookie.Js';
import Cookies from 'js-cookie';



function FunctionCookie() {

    const cookie = (e) => {
        e.preventDefault()
        setCookie('usrin', 'Ceci-est-mon-cookie');
        let Para= document.getElementById('cookie')
        Para.textContent= getCookie('usrin')
    }

    const nocookie = (e) => {
        e.preventDefault()
        Cookies.remove('usrin')
        let Para= document.getElementById('cookie')
        Para.textContent= getCookie('usrin') + ' test'
    }



    return (
        

        <div className="w-full h-full flex flex-col items-center justify-center bg-[#4706FF]">
           <button className="text-white" onClick={cookie} >BOUTON COOKIE</button>
           <p className="text-white" id="cookie"></p>
           <br></br>
           <button className="text-white" onClick={nocookie}>SUPPRIMER LE COOKIE</button>



        </div>
    )
}

export default FunctionCookie;