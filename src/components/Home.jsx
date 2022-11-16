
import '../HomeF/Home.css'
import GradPic from '../Pictures/Gradschool.jpg'
import Mentorship from '../Pictures/Mentorship.jpg'
import Research from '../Pictures/Research.jpg'
import StudyAbroad from '../Pictures/Study-Abroad.png'
import Scholarship from '../Pictures/Scholarship.jpg'
import Internship from '../Pictures/Internship.jpg'
import humanLibrary from '../Pictures/human_library.jpg';
import ideathon from '../Pictures/ideathon.jpg';
import debate from '../Pictures/debate.jpg';
import hackathon from '../Pictures/hackathon.jpg';
import advice from '../Pictures/advice.jpg';
import partTimeJob from '../Pictures/part_time_job.jpg';
import { Carousel } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import { useState } from 'react'

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <>
            <body className='homeback'>
                <br /><br />
                <div className="text-opp">
                    <h1 style={{ color: 'green'}}>Our Programs</h1>
                </div>
                <Carousel activeIndex={index} onSelect={handleSelect}>

                    <Carousel.Item>
                        
                        <img src={humanLibrary} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Human Library</Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img src={ideathon} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Ideathon</Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                       
                        <img src={debate} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Debate</Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        
                        <img src={Internship} height="350px" style={{width:"50%"}} alt="" />
                        <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Internship</Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Mentorship</Carousel.Caption>
                        <img src={advice} height="350px" style={{width:"50%"}} alt="" />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Hackathon</Carousel.Caption>
                        <img src={hackathon} height="350px" style={{width:"50%"}} alt="" />
                        
                    </Carousel.Item>

                    <Carousel.Item >
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Study Abroad</Carousel.Caption>
                        <img src={StudyAbroad} height="350px" style={{width:"50%"}} alt="" />
                        
                    </Carousel.Item>

                    <Carousel.Item>
                    <Carousel.Caption style={{color:'#F4BA1B', fontWeight:'bolder'}}>Part - Time Job Opportunities</Carousel.Caption>
                        <img src={partTimeJob} height="350px" style={{width:"50%"}} alt="" />
                        
                    </Carousel.Item>
                </Carousel>

                <br /><br />
                <div className="container-3">
                    <div id="about-fiskbook">
                        Kalpabriksha is a non-for-profit organization co-founded by three Nepali youths who are currently residing in three different parts of the world. Kalpabriksha aims to promote youth empowerment
                    </div>
                </div>

                <br /><br />

                <div className="end-part">
                    <div>
                        <div className="connection">Connect with us SOCIALLY!!</div>
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
                    </div>
                </div>

                <footer className="social-footer">
                    
                </footer>

                <footer>
                    <p className="cr">© Kalpabriksha 2022</p>
                </footer>

            </body>
        </>

    )
}

export default Home
