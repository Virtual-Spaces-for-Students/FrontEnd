import Cookie from 'js-cookie';

const removeCookie = (cookiename)=>{
   Cookies.remove(cookiename);

};
export default removeCookie;