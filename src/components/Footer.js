import { animateScroll as scroll } from 'react-scroll';
import { AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

export default function Footer(){
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div className="footer-container">
            <div className="footer-wrap">
                <div className="footer-links-container">
                    <div className="footer-links-wrapper">
                        
                        <div className="footer-link-items">
                            <h1 className="footer-links-title">About Us</h1>
                            <a className="footer-link" to="/">Journey</a>
                            <a className="footer-link" to="/">Journey</a>
                        </div>

                        <div className="footer-link-items">
                            <h1 className="footer-links-title">FAQ</h1>
                            <a className="footer-link" to="/">Media</a>
                            <a className="footer-link" to="/">Media</a>
                        </div>
                    </div>

                    <div className="footer-links-wrapper">

                        <div className="footer-link-items">
                            <h1 className="footer-links-title">Resources</h1>
                            <a className="footer-link" to="/">Tutorials</a>
                            <a className="footer-link" to="/">Tutorials</a>

                        </div>

                        <div className="footer-link-items">
                            <h1 className="footer-links-title">Support</h1>
                            <a className="footer-link" to="/">Sign Up</a>
                            <a className="footer-link" to="/">Sign Up</a>
                        </div>

                    </div>
                </div>
                <section className="social-media-container">
                    <div className="social-media-wrap">
                        <div className="social-logo" to="/" onClick={toggleHome}>NFT Website</div>
                        <div className='website-rights'>NFT Website &copy; 2020 All rights reserved.</div>
                        <div className="social-icons">
                            <div className="social-icon-link" href='/' target='_blank' aria-label="facebook">
                                <AiFillFacebook />
                            </div>
                            <div className="social-icon-link" href='/' target='_blank' aria-label="facebook">
                                <BsTwitter />
                            </div>
                            <div className="social-icon-link" href='/' target='_blank' aria-label="youtube">
                                <FaDiscord />
                            </div>
                            <div className="social-icon-link" href='/' target='_blank' aria-label="Twitter">
                                <AiFillGithub />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
