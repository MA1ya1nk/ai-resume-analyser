import React from 'react';
import {Link} from "react-router";
import {usePuterStore} from "~/lib/puter";

const Navbar = () => {
    const { auth } = usePuterStore();

    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            <div className="flex justify between gap-2">
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
                <Link to="https://github.com/MA1ya1nk/ai-resume-analyser" target="_blank" rel="noopener noreferrer" className="primary-button w-fit">
                    Github
                </Link>
                <Link to="/auth" className="primary-button w-fit">
                    {auth.isAuthenticated ? (
                        <p>Log Out</p>
                    ): (
                        <p>Log In</p>
                    )}
                </Link>
            </div>

        </nav>

    )
}

export default Navbar