
import './Hero.css';
import {Button} from './Button';
import '../App.css';

const Hero =() =>{
    
    
    return (
        <div className='hero-container'>
            
        < video src="/video/video-1.mp4" autoPlay loop muted/>
        <h1> ADVENTURE AWAITS</h1>
        <p> What are you waiting for? </p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle= 'btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle= 'btn--primary' buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /> </Button>

        </div>
        </div>
    )
};
 export default Hero;