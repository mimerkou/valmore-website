import styled from 'styled-components';
import contactBgImage from '../../images/contact-bg.jpg';

export const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${contactBgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 2.4rem;
  margin: 0 auto;
  max-width: 110rem;
`;

export const ContactText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopLine = styled.p`
  color: #f48599;
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const Heading = styled.h1`
  margin-bottom: 5rem;
  font-size: 4.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const ContactInfo = styled.div`
  margin: 0 auto;
  padding: 2rem;
`;

export const Box = styled.div`
  position: relative;
  padding: 2rem 0;
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxIcon = styled.div`
  width: 6rem;
  height: 6rem;
  background: #fff;
  color: #010606;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 2.2rem;

  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 300;

  & h3 {
    font-weight: 700;
    font-size: 2.4rem;
    color: #f48599;
  }

  & p {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0 auto;
    text-align: center;
  }
`;

export const ContactForm = styled.div`
  width: 80%;
  position: relative;
  padding: 4rem;
  margin-top: 5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;

  & h2 {
    font-size: 3.2rem;
    font-weight: 500;
    color: #f48599;
  }

  & h3 {
    color: #f4f4f4;
    letter-spacing: 0.7px;
    font-size: 2rem;
  }

  & p {
    font-size: 1.6rem;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
    color: #f4f4f4;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;

  & label {
    padding-left: 2px;
    color: #f48599;
    font-size: 1.2rem;
    margin: 0;
  }

  & input {
    height: 4rem;
  }

  & input,
  & textarea {
    width: 100%;
    padding: 5px 2px;
    font-size: 1.6rem;
    margin: 1rem 0;
    border: none;
    border-radius: 5px;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }

  & input[type='submit'] {
    width: 100px;
    background: #f48599;
    white-space: nowrap;
    color: black;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 1.2rem 3rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }

  & input[type='submit']:hover {
    background: #fff;
    color: #010606;
  }

  & p {
    color: tomato;
    font-size: 1.2rem;
    padding: 0;
    padding-left: 2px;
    margin-top: -0.5rem;
    margin-bottom: 2rem;
  }
`;
