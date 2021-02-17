import React from 'react';
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer bg-light" id="Footer">
            <div className="d-flex m-3">
                <div className="text-start pt-2 w-100 ">
                    <b> De Lio Griselda &nbsp; {new Date().getFullYear()}</b>
                </div>
                <div className="flex-shrink-1 me-2">
                    <Link className="size" to={"https://github.com/griseldadelio"}><i class="bi bi-github"></i></Link>
                </div>
                <div className="flex-shrink-1 me-2">
                    <Link className="size" to={"www.linkedin.com/in/griseldadelio"}><i class="bi bi-linkedin"></i></Link>
                </div>
                <div className="flex-shrink-1 me-2">
                    <a className="size" href={"https://api.whatsapp.com/send?phone=5491154057431"}><i class="bi bi-whatsapp"></i></a>
                </div>
                <div className="flex-shrink-1 me-4">
                    <a className="size" href={"mailto:griseldadelio@gmail.com"}><i class="bi bi-envelope-fill"></i></a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }