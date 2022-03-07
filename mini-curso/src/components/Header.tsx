import React from "react";

interface HeaderProps {
    title: string 
    subtitle?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            {props.title}
            <h1/>
            {props.subtitle}
        </header>
    );
}

export default Header;