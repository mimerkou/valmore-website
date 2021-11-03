import styled from 'styled-components';

export const AboutContainer = styled.div`
  min-height: 100vh;
  background: #010606;
  color: white;
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 2.4rem;
  margin: 0 auto;
  max-width: 110rem;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

export const AboutBox = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
  padding: 0 1.5rem 0 0;
  overflow-x: hidden;
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
  margin-bottom: 2.4rem;
  font-size: 4.8rem;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 3.5rem;
  font-size: 1.8rem;
  line-height: 2.4rem;
  color: #fff;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const ImgWrap = styled.div`
  height: 100%;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding-left: 1rem;
`;
