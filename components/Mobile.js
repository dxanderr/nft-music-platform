import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRoute } from 'react-scroll';
import { FaTimes } from 'react-icons/fa'

const MobileMenu = ({isOpen, toggle}) => {
    return (
        <MobileMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MobileMenuWrapper>
                <Menu>
                    <MobileMenuLink to="#" onClick={toggle}>
                        Marketplace
                    </MobileMenuLink>
                    <MobileMenuLink to="#" onClick={toggle}>
                        About
                    </MobileMenuLink>
                    <MobileMenuLink to="#" onClick={toggle}>
                        Resources
                    </MobileMenuLink>
                    <MobileMenuLink to="#" onClick={toggle}>
                        FAQ
                    </MobileMenuLink>
                </Menu>
                <MobileMenuBtnWrap>
                    <MobileRoute to="/signin">Sign In</MobileRoute>
                </MobileMenuBtnWrap>
            </MobileMenuWrapper>
            
        </MobileMenuContainer>
    )
}

export default MobileMenu



export const MobileMenuContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0; 
    transition: 0.35s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 2.25rem;
    right: 1.5rem;
    background: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    outline: none;
`;

export const MobileMenuWrapper = styled.div`
    color: #fff;
`

export const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px)
    }
`

export const MobileMenuLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const MobileMenuBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const MobileRoute = styled(LinkRoute)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`