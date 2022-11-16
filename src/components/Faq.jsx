
import '../Faq/faq.css'
import {Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'



const Faq = () => {

    const handleEnter = (e) => {
        e.target.style.background = '#24364C'
        e.target.style.color = "white"
    }
    const handleLeave =(e) =>{
        e.target.style.background = 'white'
        e.target.style.color = '#24364C'
    }
    
    return (
        <>
            <body> 
                <div className="Container">
                    <div className="UpperContainer">
                        <div className="ask">
                            <p style={{color: 'green', marginTop: '20px'}}id="help">How can we help you?</p>
                            <Link to='/contactus'>
                                <button style={{marginTop: '20px', color:'green'}} type="button" id="button1" >CONTACT US</button>
                            </Link>
                        </div>
                    </div>
                    <div className="LowerContainer">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>If I am an oraganization and want to collaborate with Kalpabriksha, what should I do?</Accordion.Header>
                                <Accordion.Body >
                                If you have any such plans, contact us via email at kalpabriksha.np@gmail.com or find more contact details about us on Contact Us page.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>How can I apply to be a part of Kalpbriksha?</Accordion.Header>
                                <Accordion.Body>
                                Kalpabriksha is launching different programs in a timely manner. Whenever any new program is to be started, we call for volunteers or other roles via our Facebook and/or Instagram pages. So, keep an eye on our social pages. Soon, we will be shifting all applications to our website.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>What are the benefits of becoming a part of Kalpabriksha?</Accordion.Header>
                                <Accordion.Body>
                                The benefits depend on the programs and roles you are applying to. But, we assure you that this experience is like no other.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Where is Kalpabriksha based?</Accordion.Header>
                                <Accordion.Body>
                                As of now, Kalpabriksha is based on Kathmandu valley only. However, we are working to expand our programs to all over Nepal.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" >
                                <Accordion.Header onMouseEnter={handleEnter} onMouseLeave={handleLeave}>When was Kalpabriksha founded?</Accordion.Header>
                                <Accordion.Body>
                                Kalpabriksha was founded in 2021 by three co-founders who are currently residing in three different parts of the world.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <br /><br />

                <div className="end-part">
                    <div className="connection">Connect with us SOCIALLY !!! </div>

                    <footer>
                    <div className="social-icons">
                        <a href="https://youtube.com">
                            <SocialIcon  network="youtube" ></SocialIcon>
                        </a>
                        
                        <a href="https://facebook.com">
                            <SocialIcon  network="facebook"  ></SocialIcon>
                        </a>
                        
                        <a href="https://instagram.com">
                            <SocialIcon network="instagram" ></SocialIcon>
                        </a>
                    </div>
                        <p className="cr">© Kalpabriksha 2022</p>
                    </footer>
                </div>
                {/* <!-- for container --> */}

                {/* <!-- <div class="ContactUs">
    <h1>Has something not been adressed?</h1>
    <button type="button"><i class="contact">Contact Us</i></button>
</div> --> */}

            </body >
        </>
    )
}

export default Faq