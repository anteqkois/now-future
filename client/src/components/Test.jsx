import React, { useEffect } from 'react';
import styled from 'styled-components';

import useError from '../providers/ErrorContext';

const StyledTest = styled.div`
  color: ${({ theme }) => theme.colors.textOnBackground};
  ${({ theme }) => theme.typography.H3};
  padding: ${({ theme }) => theme.spacing.xl1};

  p {
    ${({ theme }) => theme.typography.body1}
  }
`;

const StyledTestTwo = styled.div`
  color: ${({ theme }) => theme.colors.textOnBackground};
  ${({ theme }) => theme.typography.H3};
  padding: ${({ theme }) => theme.spacing.xl1};
  h2 {
    ${({ theme }) => theme.typography.H1};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    ${({ theme }) => theme.typography.body1}
  }
`;

function Test() {
  // const setError = useError();

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setError('Coś poszło nie tak!');
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [setError]);

  return (
    <>
      <StyledTest>
        Potwierdź !
        <p>
          lorem rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refnlorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
        </p>
      </StyledTest>
      <StyledTestTwo>
        <h2>Potwierdź !</h2>
        <p>
          lorem rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refnlorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
          rejfner ferfuni erfnoerf erfnioerf rfeioerf oi nioerf refn lorem
        </p>
      </StyledTestTwo>
    </>
  );
}

export default Test;
