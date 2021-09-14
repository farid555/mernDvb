import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Errorpage = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <p>WE ARE SORRY, PAGE NOT FOUND</p>
                        <p className="mb-5">
                            The HTTP 404, 404 Not Found, 404, 404 Error, Page Not Found or File Not Found
                            error message is a Hypertext Transfer Protocol (HTTP) standard response code,
                            in computer network communications, to indicate that the browser was able to
                            communicate with a given server, but the server could not find what was requested.
                            The error may also be used when a server does not wish to disclose whether
                            it has the requested information.
                        </p>
                        <NavLink to="/">Back to HomePage...</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Errorpage
