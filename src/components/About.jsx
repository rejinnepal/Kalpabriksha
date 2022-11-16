import '../AboutUs/AboutUs.css' 
import nitam from '../AboutUs/nitam.jpg'
import rejin from '../AboutUs/rejin.jpg'
import pankaj from '../AboutUs/pankaj.jpg'
import { SocialIcon } from 'react-social-icons'


const About = () =>{
    return (
        <body>
        <div>
            <div class="vision">
                <h1> OUR VISION </h1>
            </div>
            <div class="vstatement">
                <p> "To broaden youth engagement in the Nepali society"</p>
            </div>

            <div class="vision">
                <h1> OUR MISSION </h1>
            </div>
            <div class="mstatement">
                <p> "To elevate the youth empowerment to build strong pillars of Nepal" </p>
            </div>

            <div class="vision">
                <h1> OUR VALUES </h1>
            </div>
            <div className="mstatement">
                <p>Diversity | Inclusion | Prosperity | Success</p>
            </div>
        </div>

        <div class="wrapper">
            <h1>Our Team</h1>
            <div class="our_team">
                <div class="team_member">
                   <div class="member_img">
                     <img src={nitam} alt="our_team"/>
                     <div class="social_media">
                        <a href='https://facebook.com/'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/'><SocialIcon network="instagram" ></SocialIcon></a>
                     </div>
                  </div>
                  <h3>Nitam Raj Poudel</h3>
                  <span>Freshman</span>
                  <p>MBBS Student </p>
              </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={pankaj} alt="our_team"/>
                     <div class="social_media">
                        <a href='https://facebook.com/'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/'><SocialIcon network="instagram" ></SocialIcon></a>
                     </div>
                  </div>
                  <h3>Pankaj Bhattarai</h3>
                  <span>Junior</span>
                  <p>Computer Engineering</p>
              </div>
                <div class="team_member">
                   <div class="member_img">
                     <img src={rejin} alt="our_team"/>
                     <div class="social_media">
                        <a href='https://facebook.com/rejinnepal1'><SocialIcon  network="facebook"  ></SocialIcon> </a>
                        <a href='https://twitter.com/rejinnepal'><SocialIcon  network="twitter"  ></SocialIcon></a>
                        <a href='https://instagram.com/rejinnepal'><SocialIcon network="instagram" ></SocialIcon></a>
                     
                       
                     </div>
                  </div>
                  <h3>Rejin Nepal</h3>
                  <span>Freshman</span>
                  <p>Computer Science Major</p>
              </div>  
            </div>
        </div>
        <br/><br/><br/>
        
        <div class="end-part">
                    <div class="connection">Connect with us SOCIALLY !!! </div>

                    <footer class="social-footer">
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
                    </footer>

                    <footer>
                        <p class="cr">© Kalpabriksha 2022</p>
                    </footer>
                </div>
  
    </body>
    )
}

export default About