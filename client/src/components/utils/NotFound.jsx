import React from 'react';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: grid;
  grid-template-rows: 30% 50% 20%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.tablet} {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
    padding: 5vw;
  }
`;

const StyledHeader = styled.div`
  h1 {
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: clamp(120px, 35vw, 350px);
    line-height: 1em;
    font-weight: ${({ theme }) => theme.typography.weightBold};
    :nth-of-type(2) {
      padding: 0 10%;
      text-transform: unset;
      font-size: clamp(25px, 5vw, 50px);
    }
  }
  ${({ theme }) => theme.media.tablet} {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: center;
    h1:nth-of-type(2) {
      padding: 0;
    }
  }
`;

function NotFound({ location }) {
  return (
    <StyledNotFound>
      <StyledHeader>
        <h1>404</h1>
        <h1>
          Nie znaleziono strony pod adresem: <i>{location.pathname}</i>
        </h1>
      </StyledHeader>
    </StyledNotFound>
  );
}

export default NotFound;
