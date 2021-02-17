import React from "react";
import LogoFucsia from "../../../../../../assets/img/logo-fucsia-Ada.png";

const Logo = () => {
    return (
        <div className="d-flex justify-content-center mb-4">
            <img src={LogoFucsia} alt="ADA admin logo" height="50" />
        </div>
    );
};

export { Logo };