import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo-nav-transparent.png';
import careerBgImage from '../images/careers.jpg';

const CareersContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${careerBgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CareerInfo = styled.div`
  max-width: 110rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1.5rem;
  padding: 0 3rem 5rem 3rem;
  margin: 2.5rem 2.5rem 4rem 2.5rem;
  text-align: center;
`;

const Heading = styled.h2`
  color: #fff;
  font-size: 4.8rem;
  font-weight: 600;
  line-height: 1.1;
  text-decoration: underline;
  margin-bottom: 4rem;

  @media screen and (max-width: 535px) {
    font-size: 4rem;
  }
`;

const LogoImg = styled.img`
  width: 20rem;
  height: 20rem;

  @media screen and (max-width: 535px) {
    width: 16rem;
    height: 16rem;
  }
`;

const Text = styled.div`
  margin-bottom: 5rem;
  color: #fff;
  font-size: 1.8rem;
  text-align: left;

  & h4 {
    font-weight: bold;
    font-size: 2rem;
  }

  & li {
    margin: 0.8rem 0;
    line-height: 1.4;
  }
`;

const Mail = styled.a`
  color: #fff;
  transition: all 0.3s;

  &:hover {
    color: #f48599;
  }
`;

const HomeBtn = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  border-radius: 5rem;
  padding: 1.2rem 3rem;
  font-size: 1.6rem;
  background: #f48599;
  color: #010606;
  transition: all 0.3s;

  &:hover {
    background: #fff;
  }
`;

const Careers = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <CareersContainer>
      <CareerInfo>
        <LogoImg src={logo} alt="Valmore Logo" />
        <Heading>Careers</Heading>
        <Text>
          <p>
            At Valmore, we are always looking for talented people to join our
            team.
          </p>
          <br />
          <p>
            At the moment we have vacancies for remote (work-from-home) Full
            Stack Web Developers. Read on if you are interested.
          </p>

          <br />
          <h4>About you:</h4>
          <ul>
            <li>
              You are a problem solver – you do not just go to your supervisor
              with questions about something you are trying to fix. You analyze
              the situation, consider possible solutions and come up with
              suggestions where possible.
            </li>
            <li>
              You are a team player – the work of others is not only their
              concern, just as your work is not only yours.
            </li>
            <li>
              You love computer science and you like to learn new things. A nice
              day at work is a day when you made something that until now you
              did not know how it could be done (or that it was possible).
            </li>
            <li>
              You communicate timely – you discuss issues with teammates, and if
              something concerns you, you escalate as soon as possible.
            </li>
            <li>You are willing, polite, and smile as often as possible.</li>
          </ul>

          <br />
          <h4>Required Skills:</h4>
          <ul>
            <li>
              At least 2 years of prior experience in web development and
              Javascript in particular
            </li>
            <li>
              Essential Stack skills: JavaScript/JQuery, React.js, Node.js,
              MongoDB
            </li>
            <li>Nice-to-have Stack skills: Electron, Go, Vue.js, PHP, MySQL</li>
            <li>Essential Tools skills: Git, Jira, Slack</li>
            <li>Nice-to-have Tools skills: Docker, AWS</li>
            <li>Excellent knowledge of English and Greek languages</li>
            <li>Fulfilled military obligations</li>
          </ul>

          <br />
          <h4>What we offer:</h4>
          <ul>
            <li>
              An opportunity to work on cutting-edge technologies in an
              international, multicultural environment, alongside high caliber
              IT professionals from the US and Greece, on the latest web
              technologies with contemporary tools.
            </li>
            <li>Competitive salary with full social security (IKA).</li>
            <li>Remote work & flexible hours.</li>
            <li>
              Continuous vocational training in the field of work with a
              perspective of development.
            </li>
            <li>Pleasant working environment.</li>
          </ul>

          <br />
          <p>
            If you are interested in this opportunity and feel that your skills
            are compatible with the above requirements, feel free to send us
            your CV anytime at:{' '}
            <Mail href="mailto:info@valmore.gr">info@valmore.gr</Mail> - we
            always respond!
          </p>
        </Text>

        <HomeBtn to="/valmore-website">Back Home</HomeBtn>
      </CareerInfo>
    </CareersContainer>
  );
};

export default Careers;
