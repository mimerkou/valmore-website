import React from 'react';
import { CopyrightContainer } from './CopyrightElements';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <CopyrightContainer>
        <p>
          Copyright &copy; {year} Valmore Technologies
          <br />
          All rights reserved
        </p>
      </CopyrightContainer>
    </>
  );
};

export default Copyright;
