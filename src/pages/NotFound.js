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

const NotFound = () => {
  return <ErrorPage></ErrorPage>;
};

export default NotFound;
