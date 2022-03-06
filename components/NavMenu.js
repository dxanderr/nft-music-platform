import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import "../style.css"
import { CSSTransition } from 'react-transition-group';
import { GiMoebiusStar } from 'react-icons/gi'
// import { BsPlusLg } from 'react-icons/bs'

function NavMenu() {
    return (
        <DropdownMenusStyled>
            <NavItem icon={<GiMoebiusStar />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </DropdownMenusStyled>
    );
}


function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<GiMoebiusStar />}
                        rightIcon={<GiMoebiusStar />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<GiMoebiusStar />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>

                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<GiMoebiusStar />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<GiMoebiusStar />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<GiMoebiusStar />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<GiMoebiusStar />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<GiMoebiusStar />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<GiMoebiusStar />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default NavMenu;

const DropdownMenusStyled = styled.div`
    display: flex;
    z-index: 1;


    /* <li> */
    .nav-item {
    width: calc(var(--nav-size) * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    }

    /* Icon Button */
    .icon-button {
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    }

    .icon-button:hover {
    filter: brightness(1.2);
    }

    .icon-button svg { 
    fill: var(--text-color);
    width: 20px;
    height: 20px;
    }


    /* Dropdown Menu */
    .dropdown {
        position: absolute;
        top: 58px;
        width: 250px;
        display: flex;
        transform: translateX(-45%);
        background-color: var(--bg);
        border: var(--border);
        border-radius: var(--border-radius);
        padding: 1rem;
        overflow: hidden;
        transition: height var(--speed) ease;
        }

    .menu {
    width: 100%;
    }

    .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
    }

    .menu-item .icon-button {
    margin-right: 0.5rem;
    }


    .menu-item .icon-button:hover {
    filter: none;
    }

    .menu-item:hover {
    background-color: #525357;
    }

    .icon-right {
    margin-left: auto;
    }

    /* CSSTransition classes  */
    .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
    }
    .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
    }
    .menu-primary-exit {
    position: absolute;
    }
    .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
    }


    .menu-secondary-enter {
    transform: translateX(110%);
    }
    .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
    }
    .menu-secondary-exit {

    }
    .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
    }

    @media screen and (min-width: 1200px){
        display: none;
    }
`