import React, { useState } from "react";
import NavBarHome from '../Accueil/Nav'
import FooterHome from '../Accueil/Footer'
import About from './About'

export default function ContactPage() {
    return (
        <div className="bg-gray-800 h-max">
            <NavBarHome />
            <About />
            <FooterHome />
        </div>
    )
}