import styled from 'styled-components'
import NavMenu from './NavMenu'


// react-icons 
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
 
export default function Nav(){
    return(
        <NavStyled>
            {/* Logo */}
            <div className="logo">
                <strong>Music</strong>
                <p>NFT Platform</p>
            </div>

            {/* Navigation Links */}
            <nav>
                <p className="nav-links">MARKETPLACE</p>
                <p className="nav-links">ABOUT</p>
                <p className="nav-links">RESOURCES</p>
                <p className="nav-links">FAQ</p>
            </nav>

            {/* Search Field */}
            {/* <input type="text" className="search-field" placeholder="search..">
            
            </input> */}
            
            <div className="group">
                {/* Social Media Links */}
                <div className="social-links">
                    <AiFillFacebook />
                    <BsTwitter />
                    <FaDiscord />
                    <AiFillGithub />
                </div>

                {/* Navigation Menu  */}
                <NavMenu />
            </div>
        </NavStyled>
    )
}


const NavStyled = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    z-index: 0;
    
    nav{
        display: none;
        z-index: 1;
    }
    
    /* Logo */
    .logo{
        cursor: pointer;
        z-index: 1;
        font-size: 12px;
    }

    /* Navigation */
    .nav-links{
        margin: 0 16px;
        font-size: 14px;
        color: white;
        cursor: pointer;

        &:hover{
            color: #06F3FF;
        }
    }

    /* Search Field */
    .search-field{
        background: #DEDEDE;
        box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
        padding: 5px 5px 5px 10px;
        width: 40%;
        border-radius: 8px;
        z-index: 1;

        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #828282;
            opacity: 1; /* Firefox */
        }
    
        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #828282;
        }
    
        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #828282;
        }    
    }

    .group{
        display: flex;
        align-items: center;
    }

    /* Social media icons */
    .social-links{ 
        display: none;
        z-index: 1;
        svg{
            margin: 0 5px;
            cursor: pointer;
            
            &:hover{
                fill: lime;
            }
        }
    }

    /* Tablet / Desktop Sizing */
    @media screen and (min-width: 768px){
        .social-links{
            display: flex;
        }
    }
    /* Desktop Sizing */
    @media screen and (min-width: 1200px){
        padding: 0 10%;
        nav{
            display: flex;
        }

        .search-field{
            width: 200px;
        }
    }
`