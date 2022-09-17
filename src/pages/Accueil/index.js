import React, { useState } from "react";
import NavBarHome from './Nav';
import FooterHome from './Footer';
import BodyHome from './Body';

export default function HomePage() {
    return (
        <div className="bg-gray-800 h-max">
            <NavBarHome />
            <BodyHome />
            <FooterHome />
        </div>
    )
}
