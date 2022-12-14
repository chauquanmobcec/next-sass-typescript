import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react'
import styles from '../styles/Header.module.scss';


type Props = {}

const Header = (props: Props) => {
    const { setTheme, theme } = useTheme();
    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <header className={styles.header}>
            <nav
                className="navbar navbar-dark bg-dark"
                aria-label="First navbar example"
            >
                <div className="container-fluid">
                    <div className="container d-flex justify-content-between">
                        <Link href="/" >
                            <a className="navbar-brand d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                <strong className='px-2'>Album</strong></a>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample01"
                            aria-controls="navbarsExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="container">
                        <div className={`collapse navbar-collapse ${styles.transition_5}`} id="navbarsExample01">
                            <div className="row">
                                <div className="col-sm-8 col-md-7 py-4">
                                    <h4 className="text-white">About</h4>
                                    <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                                </div>
                                <div className="col-sm-4 offset-md-1 py-4">
                                    <h4 className="text-white">Contact</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                        <li><a href="#" className="text-white">Like on Facebook</a></li>
                                        <li><a href="#" className="text-white">Email me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header