import { useState } from "react";

export default function Contact() {

	const [visitorName, setName] = useState('');
	const [visitorEmail, setEmail] = useState('');
	const [visitorMessage, setMessage] = useState('');

	const handleInputChange = (e) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if(inputType === 'visitorName') {
			setName(inputValue);
		} else if (inputType === 'visitorEmail') {
			setEmail(inputValue);
		} else if (inputType === 'visitorMessage') {
			setMessage(inputValue);
		}
	};

	return (
		<div className="page-section">
			<h2 className="lines">Contact</h2>
			<form className="form">
				<label htmlFor="name-entry">Name</label>
				<input
					id="name-entry"
					value={visitorName}
					name="visitorName"
					onChange={handleInputChange}
					type="text"
					placeholder="Your Name"
				/>
				<label htmlFor="email-entry">Email</label>
				<input
					id="email-entry"
					value={visitorEmail}
					name="visitorEmail"
					onChange={handleInputChange}
					type="text"
					placeholder="Your Email"
				/>
				<label htmlFor="message-entry">Message</label>
				<textarea
					id="message-entry"
					value={visitorMessage}
					name="visitorMessage"
					onChange={handleInputChange}
					type="text"
				/>
			</form>
		</div>
	);
}