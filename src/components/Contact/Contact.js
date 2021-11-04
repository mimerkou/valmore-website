import React, { useState } from 'react';
import {
  ContactContainer,
  ContactWrapper,
  ContactText,
  TopLine,
  Heading,
  ContactInfo,
  Box,
  BoxIcon,
  Text,
  ContactForm,
  InputBox,
} from './ContactElements';
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [messageError, setMessageError] = useState({});

  const [success, setSuccess] = useState('');

  const sendEmailHandler = (event) => {
    event.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      emailjs
        .sendForm(
          'gmail',
          'email_template_id',
          event.target,
          'user_hjiXLSO3lG0J6BG4oNO4M'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      event.target.reset();

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const formValidation = () => {
    const nameError = {};
    const emailError = {};
    const messageError = {};
    let success = '';
    let isValid = true;

    if (name && email && message) {
      success = 'We have received your request.';
      setSuccess(success);
      isValid = true;
    }

    if (!name) {
      nameError.nameErr = 'Name is required.';
      isValid = false;
    }

    if (!email) {
      emailError.emailErr = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.emailErr = 'Email address is not valid.';
      isValid = false;
    }

    if (!message) {
      messageError.messageErr = 'Message is required.';
      isValid = false;
    }

    setNameError(nameError);
    setEmailError(emailError);
    setMessageError(messageError);

    return isValid;
  };

  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactText
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-once="true"
          >
            <TopLine>Contact Us</TopLine>
            <Heading>Enough talk, let's build something together</Heading>
          </ContactText>

          <ContactInfo>
            <Box data-aos="zoom-in" data-aos-once="true">
              <BoxIcon>
                <i className="fas fa-map-marker-alt"></i>
              </BoxIcon>
              <Text>
                <h3>Address</h3>
                <p>
                  Kyprion Iroon Ave.
                  <br />
                  16341, Athens Greece
                </p>
              </Text>
            </Box>

            <Box data-aos="zoom-in" data-aos-delay="250" data-aos-once="true">
              <BoxIcon>
                <i className="fas fa-envelope"></i>
              </BoxIcon>
              <Text>
                <h3>Email</h3>
                <p>info@valmore.gr</p>
              </Text>
            </Box>
          </ContactInfo>

          <ContactForm
            data-aos="zoom-in"
            data-aos-delay="250"
            data-aos-once="true"
          >
            <form onSubmit={sendEmailHandler}>
              <h2>Drop us a line.</h2>
              <h3>We always respond!</h3>
              <p>* All fields are required.</p>

              <InputBox>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {Object.keys(nameError).map((key, index) => {
                  return <p key={index}>{nameError[key]}</p>;
                })}
              </InputBox>

              <InputBox>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {Object.keys(emailError).map((key, index) => {
                  return <p key={index}>{emailError[key]}</p>;
                })}
              </InputBox>

              <InputBox>
                <label>Type your message...</label>
                <textarea
                  name="message"
                  rows="7"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {Object.keys(messageError).map((key, index) => {
                  return <p key={index}>{messageError[key]}</p>;
                })}
              </InputBox>

              <InputBox>
                <input type="submit" value="Send" />
                {success && (
                  <p
                    style={{
                      color: 'white',
                      fontSize: '1.6rem',
                      marginTop: '2rem',
                    }}
                  >
                    {success}
                  </p>
                )}
              </InputBox>
            </form>
          </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
