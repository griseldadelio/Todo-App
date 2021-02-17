import React from "react";
import { Header } from "./components";
import "./styles.css";

const Main = ({ children, showButton, title, txt, link, className }) => {
    return (
        <>
            <main className={className}>
                <Header showButton={showButton} title={title} txt={txt} link={link} />
                {children}
            </main>
        </>
    );
};

export { Main };