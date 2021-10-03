import { useState } from 'react';

export default function Contact() {

	const [visitorName, setName] = useState( '' );
	const [visitorEmail, setEmail] = useState( '' );
	const [visitorMessage, setMessage] = useState( '' );
	const [validName, setValidName] = useState( false );
	const [validEmail, setValidEmail] = useState( false );
	const [validMessage, setValidMessage] = useState( false );
	const [leftName, setLeftName] = useState( false );
	const [leftEmail, setLeftEmail] = useState( false );
	const [leftMessage, setLeftMessage] = useState( false );
	const nameRegex = new RegExp( /^[A-Za-z_]+\s?[A-Za-z_]+$/ );
	const emailRegex = new RegExp( /^[A-Za-z0-9.]+@[A-Za-z_]+\.[A-Za-z]{2,3}$/ );

	const handleInputChange = ( e ) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if( inputType === 'visitorName' ) {
			setName( inputValue );
		} else if ( inputType === 'visitorEmail' ) {
			setEmail( inputValue );
		} else if ( inputType === 'visitorMessage' ) {
			setMessage( inputValue );
		}
	};

	const checkInput = ( e ) => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		if( inputType === 'visitorName' ) {
			setLeftName( true );
			if( nameRegex.test( inputValue ) ) {
				setValidName( true );
			} else {
				setValidName( false );
			}
		} else if ( inputType === 'visitorEmail' ) {
			setLeftEmail( true );
			if( emailRegex.test( inputValue ) ) {
				setValidEmail( true );
			} else {
				setValidEmail( false );
			}
		} else if ( inputType === 'visitorMessage' ) {
			setLeftMessage( true );
			if( inputValue ) {
				setValidMessage( true );
			} else {
				setValidMessage( false );
			}
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
					onBlur={checkInput}
					type="text"
					placeholder="Your Name"
				/>
				<label htmlFor="email-entry">Email</label>
				<input
					id="email-entry"
					value={visitorEmail}
					name="visitorEmail"
					onChange={handleInputChange}
					onBlur={checkInput}
					type="email"
					placeholder="Your Email"
				/>
				<label htmlFor="message-entry">Message</label>
				<textarea
					id="message-entry"
					value={visitorMessage}
					name="visitorMessage"
					onChange={handleInputChange}
					onBlur={checkInput}
					type="text"
				/>
				{( !validName && leftName ) &&
					<h5>Please enter a valid name</h5>
				}
				{( !validEmail && leftEmail ) &&
					<h5>Please enter a valid email</h5>
				}
				{( !validMessage && leftMessage ) &&
					<h5>Please write a message to send</h5>
				}
				{( validName && validEmail && validMessage )
					? <button type="submit">Send</button>
					: <button type="submit" disabled>Send</button>}
			</form>
		</div>
	);
}