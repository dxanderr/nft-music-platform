import {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import {animateScroll as scroll} from 'react-scroll';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    
    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer className="navbar-container">
                <NavLogo to="/" onClick={toggleHome}>
                    <strong>Music</strong>
                    <p>NFT Platform</p>
                </NavLogo>
                {/* Mobile Menu  */}
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink to="/marketplace"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Marketplace</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                        to="/about"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                        to="/resources"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Resources</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                        to="/faq"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >FAQ</NavLink>
                    </NavItem>
                </NavMenu>
                {/* Social Media Links */}
                <div className="social">
                    <AiFillFacebook />
                    <BsTwitter />
                    <FaDiscord />
                    <AiFillGithub />
                </div>
            </NavbarContainer>
        </Nav>
    );
}

export default Navbar

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'linear-gradient(75deg, rgba(0,0,0,0.7990119485294118) 0%, rgba(6,30,36,0.3754825367647059) 100%)' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky !important;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width:1600px;
`

export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    font-weight: bold;
    text-decoration: none;

    p{
        font-weight: 400;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 968px){
        display:block;
        position: absolute;
        top: .8rem;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 968px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 45px;
`

export const NavLink = styled(LinkRouter)`
    position: relative ;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;

    &:hover::after{
            content: "";
            position: absolute;
            background-color: lime;
            top: 40px;
            right: 50%;
            height: 5px;
            width: 5px;
            border-radius: 50%;
        }
    }

    &.active{
        border-bottom: 3px solid #06FFF0;
    };
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 968px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkRouter)`
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #010606;
    }
`