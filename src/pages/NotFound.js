import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background: #13152a;
`;

const ErrorInfo = styled.div`
  margin: 2rem;
`;

const ErrorH2 = styled.h2`
  border: 1px solid #fff;
  font-size: 4.8rem;
  padding: 1rem 2rem;
  color: #13152a;
  background-color: #fff;
`;

const ErrorP = styled.p`
  margin-top: 2rem;
  margin-bottom: 5rem;
  color: #fff;
  font-size: 1.8rem;
`;

const HomeBtn = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  border-radius: 5rem;
  padding: 1.2rem 3rem;
  background: #f48599;
  color: #010606;
  transition: all 0.3s;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

const NotFound = () => {
  return (
    <ErrorPage>
      <ErrorInfo>
        <ErrorH2>Oops! Page not found</ErrorH2>
        <ErrorP>The page you were looking for does not exist.</ErrorP>
        <HomeBtn to="/">Back Home</HomeBtn>
      </ErrorInfo>
    </ErrorPage>
  );
};

export default NotFound;
