import React, { ReactNode } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg"

import './style.css'

export const Header: React.FC = () => {
    return (
        <header className='header-main'>
            <Image src={Logo} alt="Logo TaskManagment" />
        </header>
    )
}