import Header from '../components/Header';

export default function Contact() {

	return (
		<>
			<Header/>
			<div className="page-section">
				<h2 className="lines">Contact</h2>
				<h4>Feel free to reach out to me in any of the following ways!</h4>
				<div className="contact-box">
					<p><span className="heading">EMAIL:</span> williamcrownover1@gmail.com</p>
					<p><span className="heading">PHONE:</span> 216.255.1947</p>
				</div>
			</div>
		</>
	);
}