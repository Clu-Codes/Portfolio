import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './Contact.css';



function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSumbit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <section>
            <div className='contact-me'>
                <h1 className='contact-title'>Reach Out</h1>
                <form id='contact-form' onSubmit={handleSumbit}>
                    <div>
                        <label htmlFor='name' className='name-label'>Name:</label>
                        <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='email' className='email-label'>Email:</label>
                        <input type='text' name='email' defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='message' >Message:</label>
                        <input type='text' name='message' className='message-input'
                            defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button className='form-btn'>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;