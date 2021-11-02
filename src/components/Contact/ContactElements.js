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
