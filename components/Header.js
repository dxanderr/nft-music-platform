import styled from 'styled-components'
import NavMenu from './NavMenu'

// react-icons 
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
 
export default function Header(){
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
            <input type="text" className="search-field" placeholder="search..">
            
            </input>
            
            {/* Social Media Links */}
            <div className="social-links">
                <AiFillFacebook />
                <BsTwitter />
                <FaDiscord />
                <AiFillGithub />
            </div>

            {/* Navigation Menu  */}
            <NavMenu />
        </NavStyled>
    )
}


const NavStyled = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 26px;
    background: rgba(255, 255, 255, 0.116);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    
    nav{
        display: none;
    }

    /* Logo */
    .logo{
        cursor: pointer;
        font-size: 12px;
    }

    /* Navigation */
    .nav-links{
        margin: 0 16px;
        font-size: 14px;
        color: white;
        cursor: pointer;

        &:hover{
            color: #2D9FF6;
        }
    }

    /* Search Field */
    .search-field{
        background: #DEDEDE;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 5px 5px 5px 10px;
        width: 40%;
        border-radius: 6px;

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



    /* Social media icons */
    .social-links{
        display: none;
        svg{
            margin: 0 5px;
            cursor: pointer;
            
            &:hover{
                fill: lime;
            }
        }
    }

    /* Tablet / Desktop Sizing */
    @media screen and (min-width: 500px){
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