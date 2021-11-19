/* eslint-disable no-undef */

import Accordion from '../components/Accordion';
import Header from '../components/Header';
import { allSkills } from '../utils/data';

export default function AboutMe() {

	return (
		<>
			<Header/>
			<div className="page-section">
				<h2 className="lines">About Me</h2>
				<div className="about-me-flex">
					<img className="profile-pic" src={`${process.env.PUBLIC_URL}/assets/profilepic.jpg`} alt="William Crownover"/>
					<p style={{ textIndent: '40px', textAlign: 'left' }}>
						Full-stack Web Developer applying experience in Digital Media Production and Freelance Graphic Design
						to build engaging and interactive data visualization websites. Certified in Full-stack Web Development from the University of
						Washington. Respectable teammate who is a knowledgeable resource and
						helping hand for colleagues. I apply my organizational skills and attention to detail in order to
						deliver a high quality product. My passions include enhancing user experiences and delving into data to
						present new intriguing patterns. I am thrilled to bring my knowledge and creativity to an inspirational
						team of developers looking to captivate knowledge seekers across the web.
					</p>
				</div>
				<h2 className="lines">Skills</h2>
				<div className='accord-flex'>
					{allSkills.map( ( skills ) => (
						<Accordion
							key={skills.title}
							title={skills.title}
							list={skills.list}
						/>
					) )}
				</div>
			</div>
		</>
	);
}