import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer" id="Footer">
            <div className="d-flex m-3">
                <div className="text-start pt-2 w-100 ">
                    <b> De Lio Griselda &nbsp; {new Date().getFullYear()}</b>
                </div>
                <div className="flex-shrink-1 me-2">
                    <a className="size" href={"https://github.com/griseldadelio"} target='_blank'><i className="bi bi-github"></i></a>
                </div>
                <div className="flex-shrink-1 me-2">
                    <a className="size" href={"https://www.linkedin.com/in/griseldadelio"} target='_blank'><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="flex-shrink-1 me-2">
                    <a className="size" href={"https://api.whatsapp.com/send?phone=5491154057431"} target='_blank'><i className="bi bi-whatsapp"></i></a>
                </div>
                <div className="flex-shrink-1 me-4">
                    <a className="size" href={"mailto:griseldadelio@gmail.com"} target='_blank'><i className="bi bi-envelope-fill"></i></a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }