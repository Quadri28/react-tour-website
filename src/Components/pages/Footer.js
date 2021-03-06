import { Button } from '../Button';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer =() => {
    return(
        <div className='footer-container'>
            <section className='footer-subscription'> 
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to recieve our best vacation deals.
            </p >
            <p className='footer-subscription-text'> 
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form> 
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us</h2>
                        <Link to='/'> How it works</Link>
                        <Link to='/'> Testimonials </Link>
                        <Link to='/'> Investors</Link>
                        <Link to='/'> Careers</Link>
                        <Link to='/'> Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Contact Us</h2>
                        <Link to='/'> Contact</Link>
                        <Link to='/'> Support </Link>
                        <Link to='/'> Destinations</Link>
                        <Link to='/'> Sponsorship</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> Videos</h2>
                        <Link to='/'> Submit Videos</Link>
                        <Link to='/'> Ambassadors</Link>
                        <Link to='/'>Agency </Link>
                        <Link to='/'>Influencer</Link>
                        <Link to='/'>Enjoy</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> Social Media</h2>
                        <Link to='/'> Instagram</Link>
                        <Link to='/'> Facebook </Link>
                        <Link to='/'> YouTube</Link>
                        <Link to='/'> Tweeter</Link>
                        
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'> 
                        TRVL <i className='fab fa-typo3'/>
                         </Link>
                    </div>
                    <div>
                        <small className='website-rights'> TRVL @copy 2020</small>
                        <Link className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        arial-label= 'Facebook'
                        >
                            <i className='fab fa-facebook-f'/>
                        </Link>
                        <Link className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        arial-label= 'Linkedin'
                        >
                            <i className='fab fa-linkedin'/>
                        </Link>
                        <Link className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        arial-label= 'instagram'
                        >
                            <i className='fab fa-instagram'/>
                        </Link>
                        <Link className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        arial-label= 'Youtube'
                        >
                            <i className='fab fa-youtube'/>
                        </Link>
                        <Link className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        arial-label= 'Twitter'
                        >
                            <i className='fab fa-twitter'/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer;