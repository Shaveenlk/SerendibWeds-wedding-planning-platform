import React from 'react';
import './AboutUsPage.css';
// Import images for the team members if they are stored locally
import jayathu from './jayathu.jpg'; 
import joseph from './joseph.jpg'; 
import janudi from './janudi.jpg'; 
import shaveen from './shaveen.jpg'; 
import nishadi from './nishadi.jpg'; 
import jayathuName from './jayathuName.png'; 
import josephName from './josephName.png'; 
import janudiName from './janudiName.png'; 
import shaveenName from './shaveenName.png'; 
import nishadiName from './nishadiName.png'; 


function AboutUsPage() {
    // ... your state or other variables

    return (
        <div className="about-us-container">
            <div className="section who-we-are">
                <h1>Who We Are?</h1>
                <p>"We are a team of passionate wedding enthusiasts dedicated to simplifying your special day. With a blend of expertise in event planning and cutting-edge technology, we're here to transform how you plan your wedding, making every step enjoyable and stress-free."</p>
            </div>
            
            <div className="section our-vision">
                <h1>Our Vision</h1>
                <p>"Our vision is to revolutionize wedding planning. We imagine a world where every couple easily discovers the wedding of their dreams. By harnessing advanced technology, we aim to bring your most cherished wedding aspirations to life with simplicity and joy."</p>
            </div>
            
            <div className="section our-mission">
                <h1>Our Mission</h1>
                <p>"Our mission is to make wedding planning as delightful as the day itself. We provide a comprehensive platform where users can effortlessly find exactly what they need, draw inspiration, and explore limitless possibilities with our advanced, NLP-powered search functionality."</p>
            </div>
            
            {/* <div className="section meet-our-team">
                <h1>Meet Our Team</h1>
                <div className="team-members">
                <div className="team-member">
                        <img src={jayathu} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={joseph} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={janudi} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={shaveen} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={nishadi} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                </div>
            </div> */}


            {/* Choose a correct color - JC */}
            <div className="section meet-our-team"> 
            <h1>Meet Our Team</h1>
            <div className="team-members">
                <div className="team-member">
                    <img src={jayathu} alt="Team Member Name" className="team-member-photo" />
                    <img src={jayathuName} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={joseph} alt="Team Member Name" className="team-member-photo" />
                    <img src={josephName} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={janudi} alt="Team Member Name" className="team-member-photo" />
                    <img src={janudiName} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={shaveen} alt="Team Member Name" className="team-member-photo" />
                    <img src={shaveenName} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={nishadi} alt="Team Member Name" className="team-member-photo" />
                    <img src={nishadiName} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                
                
                {/* <div className="team-member">
                    <img src={jayathu} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={joseph} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={janudi} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={shaveen} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={nishadi} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div> */}
            </div>
        </div>
        </div>
    );
}

export default AboutUsPage;
