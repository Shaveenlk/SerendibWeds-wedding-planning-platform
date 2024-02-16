import React from 'react';
import './AboutUsPage.css';
// Import images for the team members if they are stored locally
import teamMember1 from './teamMember1.png'; 
import teamMember2 from './teamMember2.png'; 
import teamMember3 from './teamMember3.png'; 
import teamMember4 from './teamMember4.png'; 
import teamMember5 from './teamMember5.png'; 
import teamMemberName1 from './teamMemberName1.png'; 
// import teamMemberName2 from './teamMemberName2.png'; 
// import teamMemberName3 from './teamMemberName3.png'; 
// import teamMemberName4 from './teamMemberName4.png'; 
// import teamMemberName5 from './teamMemberName5.png'; 

// function AboutUsPage() {
//     return (
//         <div className="about-us-container">
//             <section className="about-section">
//                 <h1>Who We Are?</h1>
//                 <p>"We are a team of passionate wedding enthusiasts dedicated to simplifying your special day. With a blend of expertise in event planning and cutting-edge technology, we're here to transform how you plan your wedding, making every step enjoyable and stress-free."</p>
//             </section>
            
//             <section className="vision-mission">
//                 <h1>Our Vision</h1>
//                 <p>"Our vision is to revolutionize wedding planning. We imagine a world where every couple easily discovers the wedding of their dreams. By harnessing advanced technology, we aim to bring your most cherished wedding aspirations to life with simplicity and joy."</p>
                
//                 <h1>Our Mission</h1>
//                 <p>"Our mission is to make wedding planning as delightful as the day itself. We provide a comprehensive platform where users can effortlessly find exactly what they need, draw inspiration, and explore limitless possibilities with our advanced, NLP-powered search functionality."</p>
//             </section>
            
//             <section className="team-section">
//                 <h1>Meet Our Team</h1>
//                 <div className="team-members">
//                     {/* Repeat this block for each team member */}
//                     <div className="team-member">
//                         <img src={teamMember1} alt="Team Member Name" />
//                         <p>Team Member Name</p>
//                     </div>
//                     <div className="team-member">
//                         <img src={teamMember2} alt="Team Member Name" />
//                         <p>Team Member Name</p>
//                     </div>
//                     <div className="team-member">
//                         <img src={teamMember3} alt="Team Member Name" />
//                         <p>Team Member Name</p>
//                     </div>
//                     <div className="team-member">
//                         <img src={teamMember4} alt="Team Member Name" />
//                         <p>Team Member Name</p>
//                     </div>
//                     <div className="team-member">
//                         <img src={teamMember5} alt="Team Member Name" />
//                         <p>Team Member Name</p>
//                     </div>
//                     {/* ... */}
//                 </div>
//             </section>
//         </div>
//     );
// }

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
                        <img src={teamMember1} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={teamMember2} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={teamMember3} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={teamMember4} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                    <div className="team-member">
                        <img src={teamMember5} alt="Team Member Name" />
                        <p>Team Member Name</p>
                    </div>
                </div>
            </div> */}


            {/* Choose a correct color - JC */}
            <div className="section meet-our-team"> 
            <h1>Meet Our Team</h1>
            <div className="team-members">
                <div className="team-member">
                    <img src={teamMember1} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName1} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={teamMember1} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName1} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={teamMember1} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName1} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                {/* <div className="team-member">
                    <img src={teamMember2} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName2} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={teamMember3} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName3} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={teamMember4} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName4} alt="Team Member Name" className="team-member-name-photo" />
                </div>
                <div className="team-member">
                    <img src={teamMember5} alt="Team Member Name" className="team-member-photo" />
                    <img src={teamMemberName5} alt="Team Member Name" className="team-member-name-photo" />
                </div> */}

                
                {/* <div className="team-member">
                    <img src={teamMember1} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={teamMember2} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={teamMember3} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={teamMember4} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div>
                <div className="team-member">
                    <img src={teamMember5} alt="Team Member Name" />
                    <div className="team-member-name">Team Member Name</div>
                </div> */}
            </div>
        </div>
        </div>
    );
}

export default AboutUsPage;
