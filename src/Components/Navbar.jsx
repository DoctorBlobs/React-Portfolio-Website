import React, {useState, useEffect} from "react";
// import Link from "react-scroll";

// get our fontawesome imports
import { faBars, faHome, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import '../App.css'
import './Section.css';

// import logo from './Images/Logo.png'

// import { Button } from "./Button";

const anchor1 = document.querySelector('#some-id')

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // const showButton = () => {
    //     if (window.innerWidth <= 960){
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // }

    // useEffect(() => {showButton();}, []);

    // window.addEventListener('resize', showButton)

    return(    
    <>
         <nav style={{ justifyContent: 'center' }} className="navbar">
            <div className="navbar-container">

                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faBars : faStop} className="whiteIcon"/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item, unselectable'>
                        <li className='nav-links'  onClick={closeMobileMenu}>
                            <li onClick={() => {    
                                                const anchor = document.querySelector('#Home')
                                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                                }
                                        }>
                                Home
                            </li>
                        </li>
                    </li>
                </ul>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item, unselectable'>
                        <li className='nav-links'  onClick={closeMobileMenu}>
                            <li onClick={() => {    
                                                const anchor = document.querySelector('#About')
                                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                                }
                                        }>
                                About
                            </li>
                        </li>
                    </li>
                </ul>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item, unselectable'>
                        <li className='nav-links'  onClick={closeMobileMenu}>
                            <li onClick={() => {    
                                                const anchor = document.querySelector('#Portfolio')
                                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                                }
                                        }>
                                Portfolio
                            </li>
                        </li>
                    </li>
                </ul>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item, unselectable'>
                        <li className='nav-links'  onClick={closeMobileMenu}>
                            <li onClick={() => {    
                                                const anchor = document.querySelector('#Media')
                                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                                }
                                        }>
                                Media
                            </li>
                        </li>
                    </li>
                </ul>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item, unselectable'>
                        <li className='nav-links'  onClick={closeMobileMenu}>
                            <li onClick={() => {    
                                                const anchor = document.querySelector('#Contact')
                                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                                }
                                        }>
                                Contact
                            </li>
                        </li>
                    </li>
                </ul>

                {/* {button && <Button buttonStyle='btn--primary'>Test</Button>} */}
            </div>
        </nav>
    </>
    )
}

export default NavBar